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