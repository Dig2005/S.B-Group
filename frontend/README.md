# 🏨 Hotel Management System

A full-stack Hotel Management System developed using React.js for the frontend and Spring Boot for the backend. The system allows customers to make hotel reservations and provides administrators with a dashboard to manage bookings, view reports, verify reservations, and cancel bookings.

---

## 📌 Project Overview

The Hotel Management System is designed to simplify hotel reservation and administration processes.

Customers can:

- View available room types
- Enter their personal information
- Select check-in and check-out dates
- Select the number of guests
- Select a room type
- Confirm a booking
- Verify an existing booking
- Edit booking information
- Cancel a booking

Administrators can:

- Login to the admin panel
- View booking statistics
- View total bookings
- View currently occupied rooms
- View upcoming check-ins
- View room occupancy information
- View weekly booking statistics
- View booking reports
- Cancel bookings
- Manage booking information

---

# 🛠️ Technologies Used

## Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- React Router
- Fetch API

## Backend

- Java
- Spring Boot
- Spring Web
- Spring Data JPA
- Hibernate
- Maven

## Database

- MySQL

## Development Tools

- IntelliJ IDEA
- Visual Studio Code
- Git
- GitHub
- Postman

---

# 🏗️ Project Architecture

The project follows a client-server architecture.

```text
                    HOTEL MANAGEMENT SYSTEM
                              |
             ┌────────────────┴────────────────┐
             │                                 │
        React Frontend                    Spring Boot
             │                              Backend
             │                                 │
             │                           REST API
             │                                 │
             └──────────── HTTP ───────────────┘
                                               │
                                               │
                                            JPA
                                               │
                                               │
                                            MySQL
                                            Database
```

---

# 📁 Project Structure

## Frontend

```text
frontend/
│
├── src/
│   │
│   ├── components/
│   │
│   ├── Booking.jsx
│   ├── Adminpanel.jsx
│   ├── Admindashboard.jsx
│   ├── EditBooking.jsx
│   ├── CancelBooking.jsx
│   │
│   ├── Hero.jsx
│   ├── Header.jsx
│   ├── Headerdash.jsx
│   ├── Herotwo.jsx
│   │
│   ├── booking.css
│   ├── adminpanel.css
│   ├── admindashboard.css
│   ├── editbooking.css
│   ├── cancelbooking.css
│   │
│   └── App.jsx
│
├── package.json
└── README.md
```

## Backend

```text
server/
│
├── src/
│   └── main/
│       │
│       ├── java/
│       │   └── com/
│       │       └── jobportal/
│       │           │
│       │           ├── ServerApplication.java
│       │           │
│       │           ├── controller/
│       │           │   ├── BookingController.java
│       │           │   ├── DashboardController.java
│       │           │   └── ReportController.java
│       │           │
│       │           ├── entity/
│       │           │   └── Booking.java
│       │           │
│       │           ├── repository/
│       │           │   └── BookingRepository.java
│       │           │
│       │           └── service/
│       │               └── DashboardService.java
│       │
│       └── resources/
│           └── application.properties
│
├── pom.xml
└── README.md
```

---

# ✨ Main Features

## 1. Customer Booking

The booking page allows customers to enter:

- Full Name
- Email Address
- Phone Number
- Check-In Date
- Check-Out Date
- Room Type
- Number of Guests

After submitting the form, the React frontend sends the booking information to the Spring Boot backend.

```text
React Booking Form
       ↓
POST /api/bookings
       ↓
Spring Boot
       ↓
BookingController
       ↓
BookingRepository
       ↓
MySQL
```

---

# 🛏️ Room Types

The system currently supports the following room types:

| Room Type | Price Per Night |
|---|---:|
| Deluxe Room | ₹5,000 |
| Executive Room | ₹8,500 |
| Family Room | ₹7,000 |
| Single Room | ₹3,000 |

The backend can calculate the total booking cost using:

```text
Total Cost = Price Per Night × Number of Nights
```

---

# 📅 Booking Status

Each booking contains a status.

The default status for a new booking is:

```text
CONFIRMED
```

When an administrator cancels a booking, its status changes to:

```text
CANCELLED
```

The booking is **not deleted from the database**.

This allows the system to maintain a record of cancelled reservations.

---

# 👤 Admin Panel

The Admin Panel provides an administrator login interface.

The login page contains:

- Admin ID
- Email Address
- Password
- Remember Me
- Forgot Password

After successful authentication, the administrator can be redirected to the dashboard.

Example React navigation:

```javascript
navigate("/admindashboard");
```

---

# 📊 Admin Dashboard

The admin dashboard displays important hotel statistics.

The dashboard can display:

- Total Bookings
- Currently Occupied Rooms
- Cancelable Bookings
- Upcoming Check-Ins
- Room Occupancy
- Weekly Bookings

The dashboard receives data from:

```text
GET /api/dashboard
```

---

# 📈 Dashboard Statistics

The dashboard receives data from the Spring Boot backend.

Example response:

```json
{
  "totalBookings": 10,
  "currentlyOccupied": 4,
  "cancelable": 6,
  "upcomingCheckIns": 5,
  "roomOccupancy": {
    "Deluxe Room": 4,
    "Executive Suite": 2,
    "Family Room": 3
  },
  "weeklyBookings": {
    "Mon": 2,
    "Tue": 4,
    "Wed": 3,
    "Thu": 5,
    "Fri": 6,
    "Sat": 4,
    "Sun": 2
  }
}
```

---

# ❌ Cancel Booking

Administrators can cancel a booking.

The frontend sends:

```text
PUT /api/bookings/cancel/{id}
```

For example:

```text
PUT /api/bookings/cancel/5
```

The backend finds booking ID `5` and changes:

```text
CONFIRMED
```

to:

```text
CANCELLED
```

The database record remains available.

---

# 🔄 Active Bookings

The backend provides an endpoint to retrieve only active bookings.

```text
GET /api/bookings/active
```

This endpoint excludes bookings whose status is:

```text
CANCELLED
```

This is useful for the admin dashboard and booking summaries.

---

# 📝 Edit Booking

Existing booking information can be updated using:

```text
PUT /api/bookings/{id}
```

For example:

```text
PUT /api/bookings/10
```

The backend can update fields such as:

- Full Name
- Check-In Date
- Check-Out Date
- Room Type
- Number of Guests
- Special Requests

---

# 🔍 Verify Booking

Customers can verify their booking using:

- Booking ID
- Phone Number

The endpoint is:

```text
GET /api/bookings/verify
```

Example:

```text
GET /api/bookings/verify?bookingId=10&phone=9876543210
```

If the information matches, the booking information is returned.

If it does not match:

```text
Booking ID or Mobile Number is incorrect
```

is returned.

---

# 📋 Booking API

## Create Booking

```http
POST /api/bookings
```

### Request

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "checkIn": "2026-11-10",
  "checkOut": "2026-11-12",
  "roomType": "Deluxe Room",
  "guests": 2
}
```

### Response

```json
{
  "id": 1,
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "checkIn": "2026-11-10",
  "checkOut": "2026-11-12",
  "roomType": "Deluxe Room",
  "guests": 2,
  "totalCost": 10000,
  "status": "CONFIRMED"
}
```

---

## Get All Bookings

```http
GET /api/bookings
```

Returns all booking records, including cancelled bookings.

---

## Get Booking by ID

```http
GET /api/bookings/{id}
```

Example:

```http
GET /api/bookings/1
```

---

## Verify Booking

```http
GET /api/bookings/verify?bookingId=1&phone=9876543210
```

---

## Update Booking

```http
PUT /api/bookings/{id}
```

---

## Cancel Booking

```http
PUT /api/bookings/cancel/{id}
```

Example:

```http
PUT /api/bookings/cancel/1
```

---

## Get Active Bookings

```http
GET /api/bookings/active
```

Returns bookings whose status is not `CANCELLED`.

---

## Delete Booking

```http
DELETE /api/bookings/{id}
```

This permanently removes the booking from the database.

For normal cancellation, the system should use the **Cancel Booking** endpoint instead of deleting the record.

---

# 📊 Reports API

The system provides booking reports based on a date range.

```http
GET /api/reports/bookings
```

Parameters:

```text
from
to
```

Example:

```text
/api/reports/bookings?from=2026-10-01&to=2026-10-31
```

The report can provide:

- Total Bookings
- Total Revenue
- Total Guests
- Total Nights
- Booking Details

Cancelled bookings should be excluded from active booking reports.

---

# 🗄️ Database Entity

The main database entity is:

```java
Booking
```

The corresponding database table is:

```text
bookings
```

The table contains fields such as:

| Field | Type |
|---|---|
| id | Long |
| fullName | String |
| email | String |
| phone | String |
| checkIn | LocalDate |
| checkOut | LocalDate |
| roomType | String |
| guests | Integer |
| totalCost | Double |
| specialRequests | String |
| status | String |

---

# 🔗 Booking Entity

The entity is mapped using:

```java
@Entity
@Table(name = "bookings")
```

The ID is automatically generated:

```java
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
```

---

# 🗃️ Repository

The project uses Spring Data JPA.

The repository extends:

```java
JpaRepository<Booking, Long>
```

Important repository methods include:

```java
Optional<Booking> findByIdAndPhone(
    Long id,
    String phone
);
```

```java
List<Booking> findByCheckInBetween(
    LocalDate from,
    LocalDate to
);
```

```java
List<Booking> findByStatusNotIgnoreCase(
    String status
);
```

```java
List<Booking> findByCheckInBetweenAndStatusNotIgnoreCase(
    LocalDate from,
    LocalDate to,
    String status
);
```

---

# ⚙️ Spring Boot Configuration

The backend uses Spring Boot with Maven.

Important dependencies include:

- Spring Boot Web
- Spring Data JPA
- Lombok
- MySQL Driver

The project uses Java 26.

---

# 🔧 Maven

Check Maven installation:

```bash
mvn -version
```

Expected output should show Maven and Java versions.

Example:

```text
Apache Maven 3.9.16
Java version: 26
```

---

# ▶️ Running the Backend

Open PowerShell or Command Prompt.

Navigate to the backend folder:

```powershell
cd "C:\Users\digvi\OneDrive\Desktop\S.B Group\server"
```

Run:

```powershell
mvn spring-boot:run
```

The backend should start on:

```text
http://localhost:8080
```

---

# ▶️ Running the Frontend

Open another terminal.

Navigate to the React frontend:

```powershell
cd "path-to-your-frontend"
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm run dev
```

The frontend normally runs at:

```text
http://localhost:5173
```

---

# 🔌 Frontend to Backend Connection

The React application communicates with Spring Boot using the Fetch API.

Example:

```javascript
const response = await fetch(
    "http://localhost:8080/api/bookings",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bookingData)
    }
);
```

The backend receives the request through:

```java
@PostMapping
public ResponseEntity<Booking> createBooking(
        @RequestBody Booking booking
) {
    // ...
}
```

---

# 🌐 CORS Configuration

The backend allows requests from the React development server:

```java
@CrossOrigin(origins = "http://localhost:5173")
```

This is required because the frontend and backend run on different ports during development.

---

# 🧱 Database Table Creation

Hibernate can automatically create/update the database table based on the entity.

In:

```text
src/main/resources/application.properties
```

you can configure:

```properties
spring.jpa.hibernate.ddl-auto=update
```

With this configuration, Hibernate can create or update the `bookings` table based on the `Booking` entity.

---

# 🔐 Security

The Admin Panel is intended for authorized personnel.

The UI contains:

- Admin ID
- Email
- Password
- Remember Me
- Forgot Password

For a production deployment, authentication should be implemented using a proper authentication mechanism such as Spring Security with encrypted passwords and session/JWT-based authentication.

---

# 🔄 Booking Workflow

```text
Customer
   │
   ▼
Booking Page
   │
   ▼
Enter Booking Details
   │
   ▼
Confirm Booking
   │
   ▼
React sends POST request
   │
   ▼
Spring Boot
   │
   ▼
BookingController
   │
   ▼
BookingRepository
   │
   ▼
MySQL Database
   │
   ▼
Booking Created
   │
   ▼
Booking ID Returned
```

---

# ❌ Cancellation Workflow

```text
Admin
  │
  ▼
Admin Dashboard
  │
  ▼
Cancel Booking
  │
  ▼
PUT /api/bookings/cancel/{id}
  │
  ▼
BookingController
  │
  ▼
Find Booking
  │
  ▼
status = CANCELLED
  │
  ▼
Save to Database
  │
  ▼
Booking remains in DB
  │
  ▼
Excluded from Active Summary
```

---

# 📊 Dashboard Workflow

```text
Admin Login
     │
     ▼
Admin Dashboard
     │
     ▼
GET /api/dashboard
     │
     ▼
DashboardController
     │
     ▼
DashboardService
     │
     ▼
BookingRepository
     │
     ▼
MySQL
     │
     ▼
Dashboard Statistics
```

---

# 🧪 Testing with Postman

The backend APIs can be tested using Postman.

## Test Create Booking

Method:

```text
POST
```

URL:

```text
http://localhost:8080/api/bookings
```

Body → raw → JSON:

```json
{
  "fullName": "Digvijay Singh",
  "email": "example@gmail.com",
  "phone": "9876543210",
  "checkIn": "2026-11-10",
  "checkOut": "2026-11-12",
  "roomType": "Deluxe Room",
  "guests": 2
}
```

---

## Test Get Bookings

```text
GET http://localhost:8080/api/bookings
```

---

## Test Cancel Booking

If booking ID is `1`:

```text
PUT http://localhost:8080/api/bookings/cancel/1
```

Expected result:

```json
{
  "id": 1,
  "status": "CANCELLED"
}
```

---

## Test Active Bookings

```text
GET http://localhost:8080/api/bookings/active
```

The cancelled booking should not be included.

---

# ⚠️ Common Problems

## Port 8080 Already in Use

If Spring Boot shows:

```text
Web server failed to start.
Port 8080 was already in use.
```

Find the process:

```powershell
netstat -ano | findstr :8080
```

You may see:

```text
LISTENING 26824
```

The last number is the PID.

Stop that process if it is an old Spring Boot server:

```powershell
taskkill /PID 26824 /F
```

Then start Spring Boot again:

```powershell
mvn spring-boot:run
```

---

## Unable to Connect to Server

If React displays:

```text
Unable to connect to the server.
```

check the following:

1. Spring Boot is running.
2. Spring Boot is running on port `8080`.
3. React is running on port `5173`.
4. The Fetch URL is correct.
5. CORS allows `http://localhost:5173`.
6. MySQL is running.
7. The database configuration is correct.
8. There is no second application occupying port `8080`.

Test the backend directly:

```text
http://localhost:8080/api/bookings
```

If the backend is working, it should return booking data or an empty JSON list.

---

# 🧹 Maven Clean Problem

If Maven gives an error such as:

```text
Failed to delete target\classes
```

it usually means another process is using files inside the `target` directory.

Stop the running Spring Boot application first.

Then run:

```powershell
mvn clean
```

After that:

```powershell
mvn spring-boot:run
```

---

# 📦 Build the Backend

To create a Maven build:

```powershell
mvn clean package
```

The generated JAR will be placed in:

```text
target/
```

---

# 🚀 Future Improvements

The project can be extended with:

- Spring Security authentication
- JWT authentication
- Password encryption
- Customer registration
- Admin registration
- Room availability checking
- Online payment
- Email confirmation
- SMS confirmation
- PDF booking receipt
- Room management
- Staff management
- Customer management
- Advanced reports
- Revenue analytics
- Responsive mobile design
- Cloud deployment
- Docker support

---

# 🎯 Project Objectives

The main objectives of the Hotel Management System are:

1. To provide an easy-to-use hotel booking interface.
2. To store reservation information in a database.
3. To connect a React frontend with a Spring Boot backend.
4. To provide administrators with a centralized dashboard.
5. To allow administrators to manage bookings.
6. To support booking verification.
7. To support booking modification.
8. To support booking cancellation.
9. To exclude cancelled bookings from active booking summaries.
10. To provide useful booking and revenue reports.

---

# 👨‍💻 Development

This project uses a separate frontend and backend architecture.

```text
React.js
   ↓
REST API
   ↓
Spring Boot
   ↓
Spring Data JPA / Hibernate
   ↓
MySQL
```

This separation makes the project easier to maintain, test, and extend.

---

# 📄 License

This project is developed for educational and academic purposes.

You may modify and extend the project according to your project requirements.

---

# ⭐ Conclusion

The Hotel Management System provides a complete foundation for managing hotel reservations through a modern web application.

The React frontend provides the user interface, while Spring Boot provides REST APIs for handling booking operations. Spring Data JPA and Hibernate handle communication between the application and database.

The system supports the complete booking lifecycle:

```text
Create
  ↓
Confirm
  ↓
View
  ↓
Verify
  ↓
Edit
  ↓
Cancel
```

Cancelled bookings are retained in the database while being excluded from active booking summaries and reports.
# 🖼️ Project Screenshots

## 🏠 Home Page

![Hotel Management System - Home Page](/Screenshot/home.jpeg)

The home page provides navigation to the main features of the Hotel Management System.

---

## 🛏️ Room Page

![Hotel Rooms](./screenshots/rooms-page.png)

The room page displays the available hotel rooms and their prices.

---

## 📅 Booking Page

![Hotel Booking Page](./screenshots/booking-page.png)

The booking page allows customers to enter their personal information, select dates, choose a room type, and specify the number of guests.

---

## 🔐 Admin Login

![Admin Login](./screenshots/admin-login.png)

The admin login page provides access to the administrator portal.

---

## 📊 Admin Dashboard

![Admin Dashboard](./screenshots/admin-dashboard.png)

The admin dashboard displays booking statistics, room occupancy, upcoming check-ins, and weekly booking information.

---

## ❌ Cancel Booking

![Cancel Booking](./screenshots/cancel-booking.png)

Administrators can cancel bookings. Cancelled bookings are marked as `CANCELLED` rather than being permanently deleted from the database.

---

## 📈 Booking Reports

![Booking Reports](./screenshots/booking-reports.png)

The reports section provides booking information based on a selected date range, including total bookings, guests, nights, and revenue.


S.B Group/
│
├── frontend/
│
├── server/
│
├── screenshots/
│   ├── home-page.png
│   ├── rooms-page.png
│   ├── booking-page.png
│   ├── admin-login.png
│   ├── admin-dashboard.png
│   ├── cancel-booking.png
│   └── booking-reports.png
│
└── README.md
