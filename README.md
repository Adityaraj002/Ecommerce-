# E-Commerce Backend API

## 🚀 Introduction
Welcome to the **E-Commerce Backend API**, an open-source backend solution for eCommerce applications. Built using **Node.js**, **Express**, and **MongoDB**, this API provides a robust and scalable foundation for managing products, users, orders, and payments.

## 🛠 Features
- User authentication with JWT
- Product management (CRUD operations)
- Shopping cart and wishlist functionality
- Order management with real-time stock updates
- Secure payment integration
- Scalable and optimized architecture

## 📌 Tech Stack
- **Node.js** - Runtime environment
- **Express.js** - Backend framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Cors & Helmet** - Security enhancements
- **Stripe/PayPal** - Payment integration

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Adityaraj002/Ecommerce-.git
cd ecommerce-backend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and configure the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET=your_stripe_secret_key
```

### 4️⃣ Run the Server
#### Development Mode
```sh
npm run dev
```
#### Production Mode
```sh
npm start
```

### 5️⃣ API Routes
The following API routes are available:

#### User Management
- `POST /api/v1/user/register` - User Registration
- `POST /api/v1/user/login` - User Login
- `POST /api/v1/user/logout` - User Logout
- `POST /api/v1/user/updateProfile` - Update Profile
- `POST /api/v1/user/updatePassword` - Update Password
- `POST /api/v1/user/getUserProfile` - Get User Profile
- `DELETE /api/v1/user/deleteUser` - Delete User

#### Address Management
- `POST /api/v1/shoppingAddress/addAddress` - Add Shopping Address
- `POST /api/v1/shoppingAddress/getAddress` - Retrieve Shopping Address
- `PATCH /api/v1/shoppingAddress/updateAddress` - Update Address
- `PATCH /api/v1/shoppingAddress/setDefaultAddress` - Set Default Address
- `DELETE /api/v1/shoppingAddress/deleteOneAddress/:addressId` - Delete One Address
- `DELETE /api/v1/shoppingAddress/deleteAllAddress` - Delete All Addresses

#### Categories
- `GET /api/v1/category` - Get All Categories
- `POST /api/v1/category` - Add Category
- `GET /api/v1/category/:category_id` - Get Category By ID
- `PUT /api/v1/category/:category_id` - Update Category
- `DELETE /api/v1/category/:category_id` - Delete Category

#### Products
- `GET /api/v1/products` - Get All Products
- `POST /api/v1/products` - Add a Product
- `GET /api/v1/products/:product_id` - Get Product By ID
- `PUT /api/v1/products/:product_id` - Update Product
- `DELETE /api/v1/products/:product_id` - Delete Product

#### Product Variants
- `POST /api/v1/productVarient/:products_id` - Create Product Variant
- `PUT /api/v1/productVarient/:products_id` - Update Product Variant

#### Reviews & Comments
- `POST /api/v1/comment/:product_id` - Add a Comment
- `GET /api/v1/comment/:product_id` - Get Comments
- `PUT /api/v1/comment/:comment_id` - Update Comment
- `DELETE /api/v1/comment/:comment_id` - Delete Comment
- `POST /api/v1/reviews/:product_id` - Add a Review
- `GET /api/v1/reviews/:product_id` - Get Reviews
- `PATCH /api/v1/reviews/:review_id` - Moderate Reviews
- `DELETE /api/v1/reviews/:review_id` - Delete Review

#### Wishlist
- `GET /api/v1/wishlist` - Get Wishlist Items
- `POST /api/v1/wishlist` - Add to Wishlist
- `DELETE /api/v1/wishlist` - Clear Wishlist
- `DELETE /api/v1/wishlist/:product_id` - Remove from Wishlist

#### Cart
- `GET /api/v1/cart` - Get Cart Items
- `PUT /api/v1/cart` - Add to Cart
- `DELETE /api/v1/cart` - Remove from Cart

## 🛠 Contributing
We welcome contributions from the community! To contribute:
1. Fork the repository.
2. Create a new branch (`feature-branch-name`).
3. Commit your changes.
4. Push to your fork and submit a pull request.

## 📜 License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## 🤝 Support
If you like this project, ⭐ the repository and share it with others! You can also open an issue if you encounter any problems.

Happy Coding! 🚀

