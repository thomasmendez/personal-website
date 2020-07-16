pipeline {
  agent {
    docker { image 'circleci/node:12.9.1-stretch-browsers' }
  }
  stages {
    stage('Fetch dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test -- --no-watch --no-progress --browsers=ChromeHeadlessCI'
      }
    }
  }
}