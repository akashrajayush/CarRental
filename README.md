# CarRental - Car Rental Management System

A full-stack car rental management system built with React frontend and Express.js backend. This application allows users to browse and book cars, while owners can manage their car listings and bookings.

## 🚀 Features

### For Users
- Browse available cars with detailed information
- View car details with images and specifications
- Book cars with date selection
- Manage personal bookings
- User authentication and profile management

### For Owners
- Dashboard with analytics and statistics
- Add, edit, and manage car listings
- Toggle car availability
- Manage booking requests
- View revenue and booking statistics
- Image upload with optimization

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS 4** - Styling framework
- **React Router DOM** - Navigation
- **Axios** - HTTP client
- **React Hot Toast** - Notifications

### Backend
- **Express.js 5** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **ImageKit** - Image storage and optimization
- **Multer** - File upload handling
- **bcrypt** - Password hashing

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- ImageKit account (for image storage)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CarRental
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Configuration**

   Create `server/.env` file:
   ```env
   MONGODB_URI=mongodb://localhost:27017/car-rental
   JWT_SECRET=your-jwt-secret-key-here
   IMAGEKIT_PUBLIC_KEY=your-imagekit-public-key
   IMAGEKIT_PRIVATE_KEY=your-imagekit-private-key
   IMAGEKIT_URL_ENDPOINT=your-imagekit-url-endpoint
   PORT=3000
   ```

   Create `client/.env` file:
   ```env
   VITE_BASE_URL=http://localhost:3000
   VITE_CURRENCY=₹
   ```

5. **Start the application**

   Start the backend server:
   ```bash
   cd server
   npm run server
   ```

   Start the frontend development server (in a new terminal):
   ```bash
   cd client
   npm run dev
   ```

## 🗄️ Database Schema

### User Model
- name: String (required)
- email: String (required, unique)
- password: String (required)
- role: String (enum: ["owner", "user"], default: 'user')
- image: String (default: '')

### Car Model
- owner: ObjectId (ref: User)
- brand: String (required)
- model: String (required)
- image: String (required)
- year: Number (required)
- category: String (required)
- seating_capacity: Number (required)
- fuel_type: String (required)
- transmission: String (required)
- pricePerDay: Number (required)
- location: String (required)
- description: String (required)
- isAvailable: Boolean (default: true)

### Booking Model
- car: ObjectId (ref: Car, required)
- user: ObjectId (ref: User, required)
- owner: ObjectId (ref: User, required)
- pickupDate: Date (required)
- returnDate: Date (required)
- status: String (enum: ["pending", "confirmed", "cancelled"], default: "pending")
- price: Number (required)

## 🔌 API Endpoints

### Authentication Routes (`/api/user`)
- `POST /register` - User registration
- `POST /login` - User login
- `GET /data` - Get user data
- `GET /cars` - Get all cars

### Owner Routes (`/api/owner`)
- `POST /change-role` - Change user role to owner
- `POST /add-car` - Add new car listing
- `GET /cars` - Get owner's cars
- `POST /toggle-car` - Toggle car availability
- `POST /delete-car` - Remove car listing
- `GET /dashboard` - Get dashboard data
- `POST /update-image` - Update user profile image

### Booking Routes (`/api/booking`)
- `POST /book` - Create new booking
- `GET /user-bookings` - Get user bookings
- `POST /update-status` - Update booking status

## 🎨 Frontend Structure

```
client/
├── src/
│   ├── components/          # Reusable components
│   │   ├── owner/          # Owner-specific components
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── owner/          # Owner pages
│   │   └── ...
│   ├── context/            # React context for state management
│   ├── assets/             # Images and icons
│   └── ...
```

## 🚀 Deployment

### Backend Deployment
1. Set up production environment variables
2. Build the application: `npm run build`
3. Use process manager like PM2: `pm2 start server.js`

### Frontend Deployment
1. Build for production: `npm run build`
2. Deploy to platforms like Vercel, Netlify, or traditional hosting

### Environment Variables for Production
Update the environment variables with production values:
- MongoDB Atlas connection string
- Production ImageKit credentials
- Secure JWT secret
- Production API URL

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Support

For support or questions, please create an issue in the repository or contact the development team.

## 🔄 Version History

- **v1.0.0** - Initial release with basic car rental functionality
- Features: User authentication, car management, booking system, owner dashboard

---

**Note**: Make sure to replace the placeholder values in the environment files with your actual configuration values before running the application.
