# 🏠 Rent App - Full Stack Property Rental Platform

A modern, production-ready property rental platform built with React, Node.js, and Clerk authentication.

## ✨ Features

### 🔐 Authentication & User Management
- **Secure Authentication** with Clerk
- **User Dashboard** with property management
- **Protected Routes** for authenticated users
- **User Profile Management**

### 🏘️ Property Management
- **Browse Properties** with advanced search and filtering
- **Property Details** with contact functionality
- **Real-time Search** by location, price, bedrooms

### 🎨 Modern UI/UX
- **Responsive Design** for all devices
- **Beautiful Animations** with Lord Icons
- **Consistent Design System** with Tailwind CSS
- **Loading States** and error handling
- **Active Route Highlighting**

### 🚀 Production Ready
- **Environment Configuration**
- **Error Handling** and validation

## 🛠️ Tech Stack

### Frontend
- **React 19** with Vite
- **React Router** for navigation
- **Redux Toolkit** for state management
- **Tailwind CSS** for styling
- **Clerk** for authentication
- **Axios** for API calls

### Backend
- **Node.js** with Express
- **Multer** for file uploads
- **CORS** for cross-origin requests
- **JSON** file-based database

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Docker (optional)

### 1. Clone and Install
```bash
git clone <your-repo>
cd rent-app
npm install
cd backend
npm install
```

### 2. Environment Setup
Create `.env` file in root directory:
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_key_here
VITE_BACKEND_URL=http://localhost:8080
```

### 3. Get Clerk API Key
1. Go to [https://dashboard.clerk.com/](https://dashboard.clerk.com/)
2. Create a new application
3. Copy your **Publishable Key**
4. Add it to your `.env` file

### 4. Start Development
```bash
# Terminal 1 - Backend
cd backend
npm start

# Terminal 2 - Frontend
cd ..
npm run dev
```

Visit: `http://localhost:5173`

## 📱 Pages & Features

### Public Pages
- **Home** (`/`) - Hero section with featured properties
- **Properties** (`/properties`) - Browse all properties with filters
- **Property Details** (`/property/:id`) - Detailed property view
- **Agents** (`/agents`) - Real estate agents directory
- **Contact** (`/contact`) - Contact form and information

### Protected Pages (Requires Login)
- **Dashboard** (`/dashboard`) - User dashboard with stats
- **Add Property** (`/rent`) - Create new property listing

### Authentication
- **Login** (`/login`) - User sign in
- **Signup** (`/signup`) - User registration

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6)
- **Secondary**: Blue-300 (#93C5FD)
- **Background**: Gray-50 (#F9FAFB)
- **Text**: Gray-800 (#1F2937)

### Components
- **Cards**: Rounded corners with shadows
- **Buttons**: Hover effects and transitions
- **Forms**: Floating labels and validation
- **Navigation**: Active state highlighting

## 🚀 Production Deployment

### Environment Variables
```env
# Production
VITE_CLERK_PUBLISHABLE_KEY=pk_live_your_live_key
VITE_BACKEND_URL=https://your-backend-domain.com
```

### Build Commands
```bash
# Development build
npm run build

# Production build
npm run build:prod

# Docker build
npm run docker:build
```

### Deployment Platforms
- **Vercel** (Frontend)
- **Railway** (Backend)
- **DigitalOcean** (Full Stack)
- **AWS** (Full Stack)

## 📊 Performance Features

- **Code Splitting** for faster loading
- **Image Optimization** with proper sizing
- **Lazy Loading** for better performance
- **Caching** for static assets
- **Gzip Compression** for smaller bundles

## 🔒 Security Features

- **CORS** configuration
- **Input Validation** on all forms
- **File Upload** restrictions
- **Authentication** guards
- **Security Headers** in production

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking (if using TypeScript)
npm run type-check
```

## 📈 Monitoring & Analytics

- **Error Tracking** with proper error boundaries
- **Performance Monitoring** with loading states
- **User Analytics** through Clerk dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email: arafat.rahman.6003@gmail.com

---

**Built with ❤️ for the Bangladesh rental market**