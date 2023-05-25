pipeline {
	agent any
	stages {
		stage("verify tooling") {
			steps {
				sh '''
					docker version
					docker info
				'''
			}
		}
		stage('Tests') {
			steps {
				script {
				sh 'npm i'
				sh 'npm run test'
				}
			}
			post {
				always {
				step([$class: 'CoberturaPublisher', coberturaReportFile: 'output/coverage/jest/clover.xml', lineCoverageTargets: '100, 95, 50'])
				}
			}
		}
		stage("killing old container") {
			steps {
				sh 'sudo docker system prune --all'
			}
		}
		stage("build") {
			steps {
				sh 'docker build -t command-service .'
			}
		}
		stage("run") {
			steps {
				sh '''
                    docker run -d \
                    -e HOST=command_service \
                    -e JWT_SECRET=1kZDnw8==jh \
					-e KAFKA_CLIENTID=rem-kafka \
					-e KAFKA_BROKER_PORT=9092 \
        			-e KAFKA_BROKER_HOST=broker \
					-e ADMIN_EMAIL=gui.acassemiro@gmail.com \
					-e PORT=3008 \
					-e MONGO_HOST=mongo \
					-e MONGO_PORT=27017 \
					-e MONGO_DB_NAME=rem \
					-e MONGO_PASS=rem2023 \
					-e MONGO_USER=rem \
					-p 3008:3008 \
					--hostname command_service \
                    --network middleware-network \
					--restart always \
					--name command_service command_service
				'''
			}
		}
	}
}