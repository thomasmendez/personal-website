pipeline {
  agent none
  stages {
    stage('Fetch dependencies') {
      agent {
        docker 'circleci/node:9.3-stretch-browsers'
      }
      steps {
        sh 'npm install'
        sh 'npm install -g @angular/cli'
      }
    }
    stage('Test') {
      sh 'ng test --no-watch --no-progress --browsers=ChromeHeadlessCI'
      sh 'ng e2e --protractor-config=e2e/protractor-ci.conf.js'
    }
  }
}