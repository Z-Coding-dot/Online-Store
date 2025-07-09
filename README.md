# 🛍️ Online Store - React E-commerce Application

A modern, responsive e-commerce web application built with React, featuring a beautiful UI, shopping cart functionality, and seamless user experience.

## ✨ Features

- **🛒 Shopping Cart Management** - Add, remove, and manage cart items with quantity controls
- **📱 Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI/UX** - Beautiful interface with Tailwind CSS styling
- **🔍 Product Categories** - Browse products by categories (beauty, skincare, fragrances, dresses)
- **📄 Product Details** - Detailed product pages with images and descriptions
- **👤 User Authentication** - Login and signup functionality
- **🔄 State Management** - Redux Toolkit for efficient state management
- **📡 API Integration** - Fetches products from DummyJSON API
- **🎠 Interactive Components** - Carousels, accordions, and smooth scrolling
- **💳 Payment Integration** - Support for multiple payment methods (Visa, MasterCard, PayPal, Apple Pay, Google Pay)

## 🚀 Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.8
- **State Management**: Redux Toolkit 2.8.2
- **Routing**: React Router DOM 7.6.2
- **HTTP Client**: Axios 1.9.0
- **Form Handling**: React Hook Form 7.59.0
- **Validation**: Yup 1.6.1
- **Icons**: React Icons 5.5.0
- **Carousel**: React Slick 0.30.3
- **Loading**: ldrs 1.1.7
- **Utilities**: clsx 2.1.1

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features Explained

### Shopping Cart
- Add products to cart with quantity selection
- Increase/decrease item quantities
- Remove items from cart
- Persistent cart state using Redux

### Product Management
- Fetch products from DummyJSON API
- Display products in categories
- Detailed product pages with images and descriptions
- Product filtering and search capabilities

### User Interface
- Responsive design using Tailwind CSS
- Modern, clean UI with smooth animations
- Interactive carousels and sliders
- Accordion components for FAQs
- Loading states and error handling

### Authentication
- User registration and login pages
- Form validation using Yup and React Hook Form
- Secure authentication flow

## 🎨 Design Features

- **Hero Section** - Eye-catching banner with call-to-action
- **Category Browsing** - Browse products by categories
- **New Arrivals** - Showcase latest products
- **Top Selling** - Display popular items
- **Customer Reviews** - Social proof section
- **FAQ Section** - Helpful information for customers
- **Footer** - Complete site navigation and contact info

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_API_BASE_URL=https://dummyjson.com
```

### API Integration
The application currently uses the DummyJSON API for product data. You can modify the API endpoint in `src/App.jsx`:

```javascript
axios.get("https://dummyjson.com/products?limit=20")

## 👨‍💻 Author

Created with ❤️ using React and modern web technologies.

---

**Happy Shopping! 🛍️**
