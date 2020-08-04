# Personal Website

Personal Website made with Angular 10.0.2

## Overview

This project contains Jenkins and Docker files for CI/CD for longterm use. 

## Setup (Development)

### Building the Application

#### Docker Compose 

To build the application using docker compose use 
```
docker-compose up -d --build
```

Website can be access at localhost:4201

When you wish to stop the container run
```
docker-compose stop
```

### Running Test

After running the docker container, you can perform test on the Angular application

#### Run Unit Test

Run the following command to run the unit test using Headless Chrome
```
docker-compose exec website npm run test -- --no-watch --no-progress --browsers=ChromeHeadlessCI
```

#### Run E2E Test

Run the following command to run the E2E test
```
docker-compose exec website npm run e2e -- --port 4202 --protractor-config=e2e/protractor-ci.conf.js
```

## Setup (Production)

### Building the Application

To build the application for production run
```
docker-compose -f docker-compose-prod.yml up -d --build
```

## Released Packages

### Github Package (Development Version)

Exposes port 4200 for Angular 

Pull image from the command line:
```
docker pull docker.pkg.github.com/thomasmendez/personal-website/personal-website:latest
```

*If unable to pull github package version please read [Configuring Docker for use with GitHub Packages](https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages)*

Run docker image from the command line
```
docker run -p 4200:4200 --name website-dev docker.pkg.github.com/thomasmendez/personal-website/personal-website:latest
```

Use as base image in DockerFile
```
FROM docker.pkg.github.com/thomasmendez/personal-website/personal-website:latest
```

### Docker Hub Release (Production Version)

Exposes port 80 for NGNIX server

Pull image from the command line
```
docker pull thomasmendez01/personal-website
```

Run docker image from the command line
```
docker run -p 80:80 --name website-prod thomasmendez01/personal-website
```

Use as base image in DockerFile
```
FROM thomasmendez01/personal-website
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
