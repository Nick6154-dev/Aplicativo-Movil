cd person-service && gradlew.bat bootJar && docker build -t person-service . && cd .. && cd chat-service && docker build -t chat-service . && cd .. && cd file-service && docker build -t file-service . && cd .. && cd gateway-server && docker build -t gateway-server . && cd .. && docker-compose up -d
