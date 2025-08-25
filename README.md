# Car Rental Application

A full-stack car rental platform built with React.js, Node.js, Express.js, and MongoDB. This application allows users to browse, book cars, and manage their rentals, while providing car owners with a dedicated dashboard to manage their fleet.

## 🚀 Features

### User Features
- **User Authentication**: Register and login with JWT-based authentication
- **Browse Cars**: View available cars with detailed information
- **Car Details**: View comprehensive car information including specifications and pricing
- **Booking System**: Book cars with pickup and return dates
- **My Bookings**: View and manage personal booking history
- **Responsive Design**: Mobile-friendly interface

### Owner Features
- **Owner Dashboard**: Analytics and overview of car fleet
- **Car Management**: Add, edit, delete, and toggle car availability
- **Booking Management**: View and manage bookings for owned cars
- **Image Upload**: Upload car images using ImageKit integration
- **Role Management**: Switch between user and owner roles

## 🛠️ Technology Stack

### Frontend
- **React.js** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling framework
- **React Router DOM** - Routing
- **Axios** - HTTP client
- **React Hot Toast** - Notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **ImageKit** - Image storage and CDN
- **Multer** - File upload handling

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
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

4. **Environment Variables**

   Create a `.env` file in the `server` directory with the following variables:
   ```env
   MONGODB_URI=mongodb://localhost:27017
   JWT_SECRET=your_jwt_secret_key
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
   PORT=3000
   ```

5. **Start the development servers**

   Backend (from server directory):
   ```bash
   npm run server
   ```

   Frontend (from client directory):
   ```bash
   npm run dev
   ```

## 🗄️ Database Schema

### User Model
- name: String (required)
- email: String (required, unique)
- password: String (required)
- role: String (enum: ["owner", "user"])
- image: String (profile image)
- timestamps

### Car Model
- owner: ObjectId (reference to User)
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
- timestamps

### Booking Model
- car: ObjectId (reference to Car)
- user: ObjectId (reference to User)
- owner: ObjectId (reference to User)
- pickupDate: Date (required)
- returnDate: Date (required)
- status: String (enum: ["pending", "confirmed", "cancelled"])
- price: Number (required)
- timestamps

## 🔌 API Endpoints

### User Routes (`/api/user`)
- `POST /register` - User registration
- `POST /login` - User login
- `GET /data` - Get user data (protected)
- `GET /cars` - Get all available cars

### Owner Routes (`/api/owner`)
- `POST /change-role` - Change user role to owner (protected)
- `POST /add-car` - Add new car (protected, file upload)
- `GET /cars` - Get owner's cars (protected)
- `POST /toggle-car` - Toggle car availability (protected)
- `POST /delete-car` - Delete car (protected)
- `GET /dashboard` - Get dashboard data (protected)
- `POST /update-image` - Update user profile image (protected, file upload)

### Booking Routes (`/api/booking`)
- Endpoints for booking management

## 🎨 Frontend Structure

```
client/
├── src/
│   ├── components/          # Reusable components
│   │   ├── owner/          # Owner-specific components
│   │   └── common/         # Shared components
│   ├── pages/              # Page components
│   │   ├── owner/          # Owner pages
│   │   └── user/           # User pages
│   ├── context/            # React context for state management
│   ├── assets/             # Images and icons
│   └── App.jsx             # Main app component
```

## 🚀 Deployment

### Vercel Deployment (Frontend)
The project includes `vercel.json` configuration for easy deployment to Vercel.

### Backend Deployment
The backend can be deployed to platforms like:
- Railway
- Heroku
- DigitalOcean App Platform
- AWS Elastic Beanstalk

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Support

For support, please open an issue in the GitHub repository or contact the development team.

## 🔮 Future Enhancements

- Payment integration
- Real-time notifications
- Advanced search and filters
- Car rating and reviews
- Admin panel
- Mobile app version
- Integration with mapping services
- Insurance options
- Multi-language support
