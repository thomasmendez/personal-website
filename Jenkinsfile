pipeline {
  agent {
    dockerfile true
  }
  stages {
    stage('Test') {
      steps {
        sh 'npm run test -- --no-watch --no-progress --browsers=ChromeHeadlessCI'
        sh 'npm run e2e -- --port 4202 --protractor-config=e2e/protractor-ci.conf.js'
      }
    }
  }
}