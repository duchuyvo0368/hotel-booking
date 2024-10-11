# Hotel Booking Website

![Hotel Image 1](https://raw.githubusercontent.com/duchuyvo0368/hotel-booking/refs/heads/master/images/1.png)  
![Hotel Image 2](https://raw.githubusercontent.com/duchuyvo0368/hotel-booking/refs/heads/master/images/2.png)  
![Hotel Image 3](https://raw.githubusercontent.com/duchuyvo0368/hotel-booking/refs/heads/master/images/3.png)

## Description

This project is a **Hotel Booking Website** developed using **Node.js** for the backend and **React.js** for the frontend. It allows users to search for and book hotel rooms, and provides secure user authentication via **JWT (JSON Web Token)**. The backend is powered by **Express.js** and **MySQL** to manage hotel data, user information, and booking records. Additionally, it includes an integrated online payment system to process bookings securely.

## Features

- User Authentication with **JWT**
- Hotel search and room booking functionality
- Online payment processing
- **Express.js** backend with **MySQL** database integration
- User-friendly **React.js** frontend
- Admin dashboard for hotel management
- API for fetching hotel and booking data
- Secure data handling and validation

## Technologies Used

- **Backend**: Node.js, Express.js, MySQL, JWT for authentication
- **Frontend**: React.js
- **Database**: MySQL
- **Payment**: Integration with a payment gateway for secure online payments
- **Others**: SCSS for styling, Axios for API calls

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/duchuyvo0368/hotel-booking.git
    ```

2. Navigate to the project directory:
    ```bash
    cd hotel-booking
    ```

3. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

4. Install frontend dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

## Running the Project

### Backend (Node.js & Express)

1. Configure the MySQL database connection in the `.env` file:
    ```bash
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=password
    DB_NAME=hotel_booking
    ```

2. Run the backend server:
    ```bash
    cd backend
    npm start
    ```

### Frontend (React.js)

1. Start the React.js frontend:
    ```bash
    cd frontend
    npm start
    ```

The project will now be running locally.

## API Endpoints

### Authentication
- **POST** `/api/auth/register`: Register a new user
- **POST** `/api/auth/login`: Login and receive a JWT token
- ...

### Hotel Booking
- **GET** `/api/hotels`: Fetch a list of available hotels
- **POST** `/api/booking`: Book a hotel room (requires authentication)
=**GET** `/api/hotels/detail`: 
### Admin
- **GET** `/api/admin/bookings`: View all bookings (Admin only)
- **POST** `/api/admin/add-hotel`: Add a new hotel (Admin only)
- **Post** `/api/admin/user`: 
- **GET** `/api/admin/user`:
- ...

## Payment Integration

The website includes online payment functionality. Once a user selects a hotel and room, they can proceed to payment via an integrated payment gateway. All payment transactions are securely handled.

## Screenshots

![Hotel Image 1](https://raw.githubusercontent.com/duchuyvo0368/hotel-booking/refs/heads/master/images/1.png)  
![Hotel Image 2](https://raw.githubusercontent.com/duchuyvo0368/hotel-booking/refs/heads/master/images/2.png)  
![Hotel Image 3](https://raw.githubusercontent.com/duchuyvo0368/hotel-booking/refs/heads/master/images/3.png)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
