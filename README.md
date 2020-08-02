# Personal Website

Personal Website made with Angular 10.0.2

## Overview

This project contains Jenkins and Docker files for CI/CD for longterm use. 

# Building Application

To build the docker container with the application use
```
docker build -t personal-website:dev .
```

To run the container use the following command. The website will be open in port 4201 in this example
```
docker run -d -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --name website --rm personal-website:dev
```

When you are finished using the docker container run 

```
docker stop website
```

# Running Test

After running the docker container, you can perform test on the Angular application

## Run Unit Test

Run the following command to run the unit test using Headless Chrome
```
docker exec -it website npm run test -- --no-watch --no-progress --browsers=ChromeHeadlessCI
```

## Run E2E Test

Run the following command to run the E2E test
```
docker exec -it website npm run e2e -- --port 4202 --protractor-config=e2e/protractor-ci.conf.js
```
## Built With

The personal website was built with

Frontend

* [Angular](https://angular.io/) - Structural Framework
* [Bootstrap](https://getbootstrap.com/) - CSS Framework

Unit Testing

* [Jasmine](https://mochajs.org/) - JavaScript Test Framework
* [Karma](https://www.chaijs.com/) -  BDD / TDD Assertion Library

CI/CD

* [Docker](https://www.docker.com/) - Containerization Tool 
* [Jenkins](https://www.jenkins.io/) - Automation Server 

Ubuntu Server Software

* [NGINIX](https://www.nginx.com/) - Web Server

## Authors

* **Thomas Antonio Mendez** - *Initial work* 

## License

Personal Website is under the MIT License - see the [LICENSE](https://github.com/thomasmendez/personal-website/blob/master/LICENSE) file for details
