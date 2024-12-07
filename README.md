# Railway Management System

## Overview

The Railway Management System is designed to handle train booking, seat availability, and role-based access for users and admins. The application allows users to:
- Check seat availability between two stations.
- Book seats for available trains.
- Admins can manage train schedules, update seat availability, and more.

This system uses JWT-based authentication for role-based access and ensures real-time seat bookings using transactions to handle race conditions.

## Features
- **User Authentication**: Users can log in to check seat availability and book seats.
- **Admin Access**: Admins can add trains, update seat availability, and more.
- **Real-time Booking**: Transaction-based seat booking to handle simultaneous requests.
- **Role-based Access Control**: Different access levels for admins and users.

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL, Sequelize ORM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Encryption**: bcryptjs
- **Environment Configuration**: dotenv

## Getting Started

### 1. Clone the repository

```bash
git https://github.com/Akshaymathur20/railway_management_system.git
cd railway-management-system
