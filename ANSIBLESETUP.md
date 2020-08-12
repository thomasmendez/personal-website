# Ansible Setup

This Angular application can be setup at a web server 

## Install Ansible to your machine

Install Ansible to your machine by following the appropriate [installation](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)

*Note: If Ansible was installed via pip, set the ANSIBLE_CONFIG environment variable to a newly created ansible.cfg file*

## Setup hosts file 

Modify the hosts file so that it includes the ip address of the designated webserver 

```
[webservers]
xxx.xxx.xx.xx

[webservers:vars]
ansible_python_interpreter=/usr/bin/python3
```

## Run Ansible Playbook

Run the Ansible playbook to automatically configure the web server and setup the entire Angular application. A command similar to the one below can be used for running the Ansbile playbook

```
ansible-playbook ./playbooks/webserver.yaml -i hosts --private-key=path/to/private/key -u root
```

*Note: The Ansile playbook runs the Docker container to port 81, but can be changed to any port*

## Modify NGNIX Default Conf

Remove the default NGINX config file
```
sudo rm /etc/nginx/sites-available/default
```

Create a new NGINX config file 
```
sudo nano /etc/nginx/sites-available/default
```

File should be similar to the one below
```
server {
    listen 80;
    server_name example.com www.example.com;
    location / {
        proxy_pass http://xx.xxx.xx.xxx:81;
    }
    location /other_route {
        proxy_pass http://xx.xxx.xx.xxx:81;
    }
}
```

*Note: Set the proxy_pass to the ip address of the machine to the port the Docker container was assigned to (this example uses port 81). If there are other routes that the web app has, add them to the file using the same proxy_pass. If they are not added, refreshing the page at a different route will cause a 404 Not Found error.*

Restart Ngnix after modifying the config file
```
sudo systemctl reload nginx
```

*Note: If you have your own registered domain name, replace example.com and www.example.com to it. If not, just use ```server_name _```. If you are using a registered domain name, you can create a free SSL certificate using Let's Encrypt in the next steps below.*

The web application should be fully working on it's ip address or domain name

## Obtaining an SSL Certificate with Let's Encrypt (Optional)

If you own the domain name that you are using for server_name in the nginx config file, you can obtain a free SSL certificate with Let's Encrypt

To obtain the free SSL certificate use 
```
sudo certbot --nginx -d example.com -d www.example.com
```

Cerbot will ask you to how you would like to configure HTTPS settings
```
Output
Please choose whether or not to redirect HTTP traffic to HTTPS, removing HTTP access.
-------------------------------------------------------------------------------
1: No redirect - Make no further changes to the webserver configuration.
2: Redirect - Make all requests redirect to secure HTTPS access. Choose this for
new sites, or if you're confident your site works on HTTPS. You can undo this
change by editing your web server's configuration.
-------------------------------------------------------------------------------
Select the appropriate number [1-2] then [enter] (press 'c' to cancel):
```

Your SSL certificate will be added to the website and now uses https://
```
Output
IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/example.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/example.com/privkey.pem
   Your cert will expire on 2018-07-23. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot again
   with the "certonly" option. To non-interactively renew *all* of
   your certificates, run "certbot renew"
 - Your account credentials have been saved in your Certbot
   configuration directory at /etc/letsencrypt. You should make a
   secure backup of this folder now. This configuration directory will
   also contain certificates and private keys obtained by Certbot so
   making regular backups of this folder is ideal.
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```

Let’s Encrypt’s certificates are only valid for ninety days. The certbot package renews it by adding a renew script to /etc/cron.d. This script runs twice a day and will automatically renew any certificate that’s within thirty days of expiration.

To test the renewal process, you can do a dry run with certbot
```
sudo certbot renew --dry-run
```