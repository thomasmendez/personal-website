pipeline {
  agent {
    docker { image 'circleci/node:9.3-stretch-browsers' }
  }
  stages {
    stage('Fetch dependencies') {
      steps {
        sh 'npm install'
        sh 'npm install -g @angular/cli'
      }
    }
    stage('Test') {
      steps {
        sh 'ng test --no-watch --no-progress --browsers=ChromeHeadlessCI'
        sh 'ng e2e --protractor-config=e2e/protractor-ci.conf.js'
      }
    }
  }
}