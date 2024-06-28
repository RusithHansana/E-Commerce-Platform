# E-Commerce Platform

## Project Description
This E-Commerce Platform is designed to provide a seamless shopping experience for users, managing everything from product browsing to payment processing. Built with a microservices architecture, this application ensures scalability, maintainability, and efficient handling of various business operations. The backend is powered by Java Spring Boot, while the frontend is developed using React, creating a robust and interactive user interface.

## Services
The application is divided into the following microservices, each handling a specific aspect of the e-commerce platform:

1. **User Management Service**
    - Manages user registration, authentication, and profile management.
    - Handles roles and permissions for different types of users (e.g., customers, administrators).

2. **Product Catalog Service**
    - Manages product listings, categories, and inventory.
    - Allows administrators to add, update, and delete products.

3. **Order Management Service**
    - Handles order creation, tracking, and history.
    - Manages order statuses (e.g., pending, shipped, delivered).

4. **Payment Service**
    - Processes payments and integrates with various payment gateways.
    - Ensures secure transactions and maintains transaction history.

5. **Shopping Cart Service**
    - Manages user shopping carts, including adding, removing, and updating items.
    - Persists cart data across user sessions.

6. **Review and Rating Service**
    - Allows users to review and rate products.
    - Moderates and displays reviews to help other users make informed decisions.

## Tech Stack
### Frontend
- **React**: For building a dynamic and responsive user interface.

### Backend
- **Java Spring Boot**: For developing scalable and maintainable microservices.
- **Spring Cloud**: For managing microservices and service discovery.
- **Spring Security**: For securing the application and managing authentication and authorization.
- **Spring Data JPA**: For database operations and management.
- **Hibernate**: As the ORM tool for managing database interactions.
- **MySQL**: As the relational database for storing data.
- **RabbitMQ**: For messaging between microservices.
- **Docker**: For containerizing the application and ensuring consistency across different environments.

### Additional Tools
- **Git**: For version control.
- **Maven**: For project build and dependency management.
- **Postman**: For API testing and documentation.

## Prerequisites
- Java 11+
- Node.js 14+
- MySQL
- Docker
- Maven
