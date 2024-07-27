# Email Sending Service

This project demonstrates a simple email sending service using Node.js, Express, and Nodemailer. The service includes an endpoint to send an email through an SMTP server (Ethereal in this case).

## Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) installed

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Project Structure

├── controllers
│ └── sendMail_controller.js
├── services
│ └── sendEmail_service.js
├── app.js
└── README.md

- **app.js**: The main application file that sets up the Express server.
- **controllers/sendMail_controller.js**: The controller that handles the email sending request.
- **services/sendEmail_service.js**: The service that interacts with Nodemailer to send the email.

## Usage

1. Start the server:

   ```bash
   node app.js
   ```

2. Open your browser or use a tool like Postman to navigate to `http://localhost:5000/`.

3. To send an email, navigate to `http://localhost:5000/send`.
