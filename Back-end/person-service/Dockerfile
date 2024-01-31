FROM eclipse-temurin:21-jre

COPY *.jar /app/person-service.jar

WORKDIR /app

EXPOSE 8001

CMD ["java", "-jar", "person-service.jar"]
