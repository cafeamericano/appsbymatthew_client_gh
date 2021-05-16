pipeline {
  agent any

  stages {

    // STARTING ////////////////////////////////////////////////////////////////////////////////////////////

    /* Print something to the console */
    stage('Say Hello') {
      steps {
        echo 'Hello world!'
      }
    }

    // BUILDING ////////////////////////////////////////////////////////////////////////////////////////////

    /* Build the Docker image */
    stage('Build') {
      steps {
        sh 'docker build -t mfarmer5102/appsbymatthew-client:latest .'
      }
    }

    // PUSHING ////////////////////////////////////////////////////////////////////////////////////////////

    /* Push the image to Docker Hub */
    stage('Push to Docker Hub') {
      steps {
        script {
          docker.withRegistry('', 'Docker_Hub') {
            def customImage = docker.build("mfarmer5102/appsbymatthew-client:latest")
            customImage.push()
          }
        }
      }
    }

  }
}