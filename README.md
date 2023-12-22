# Cloud-Native Sandwich Store Project

## Overview
Welcome to the Cloud-Native Sandwich Store Project! This project demonstrates the implementation of a modern, scalable, and resilient online sandwich store. The application architecture leverages Docker containers for deployment, RabbitMQ for message queuing between microservices, and a React-based front end for a dynamic user experience.

### Key Features:

- Microservices Architecture: Utilizing Docker for containerization of the front end and back end services.
- Message Queue: Integration of RabbitMQ to enable asynchronous communication between services.
- React Front End: A responsive and interactive user interface.

## Architecture

### Front End Service:

- Built with React.
- Communicates with the back-end services through RESTful APIs.

### Back End Services:

- Two distinct microservices handling different aspects of the application (e.g., order processing, inventory management).
- Each service runs in its own Docker container.
### Message Queue:

- RabbitMQ is used to decouple the services.
Facilitates the handling of requests and data exchange between services.

## Course feedback

<img width="751" alt="Screenshot 2023-12-22 at 14 07 28" src="https://github.com/Anh-Duy-Tran/Sandwich-Webstore/assets/113171462/fd2b0953-7eb2-4ceb-9bea-8e6ad864ed4b">
