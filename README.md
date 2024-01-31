# Pablo Nikolas Balseca Montufar

## Deber 2: Creación de aplicativo móvil utilizando React Native

El proyecto se divide en dos partes principales: el frontend y el backend.

### Carpeta Back-end:

#### Person-Service

[Person-Service](./Back-end/person-service) - Este servicio maneja las operaciones CRUD sobre una lista de personas. Utiliza una base de datos H2 para almacenar los datos de manera eficiente.

#### Chat-Service

[Chat-Service](./Back-end/chat-service) - El Chat-Service es responsable de la comunicación con OpenAI para convertir números a su representación binaria. Nota: La clave proporcionada para OpenAI no tiene fondos en este momento.

#### File-Service

[File-Service](./Back-end/file-service) - File-Service utiliza la librería 'langchain' para extraer información relevante según una pregunta dada. Similar al Chat-Service, la clave proporcionada no tiene fondos en este momento.

#### Gateway-Server

[Gateway-Server](./Back-end/gateway-server) - Este servidor actúa como un gateway y reverse proxy para facilitar las comunicaciones entre los diferentes servicios. Utiliza Traefik para gestionar las solicitudes de manera eficiente.

#### Docker-Compose

[Docker-Compose](./Back-end/docker-compose.yml) - Docker-Compose es un archivo YAML que orquesta los microservicios desplegados en contenedores Docker. Proporciona una forma fácil de gestionar y desplegar los servicios de manera consistente.

#### Ejecutable .bat

[Ejecutable .bat](./Back-end/run.bat) - El archivo ejecutable .bat es responsable de construir los ejecutables, empaquetarlos en un contenedor y desplegarlos utilizando Docker Compose.

### Carpeta Back-end:

#### Mobile-Application

[Mobile-Application](./Front-end/mobile-app) - Front realizado sobre react que consume los microservicios mencionados anteriormente.

Nota: Para consumir los microservicios se necesita agregar la ip 10.2.2.0 para que redireccione al localhost.