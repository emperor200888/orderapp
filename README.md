Project Name: Order Management App
Installation instructions:
Backend:
1. Install Node.js version 18.x
2. Install MongoDB & Start the MongoDB service, create a db username and password.
3. Install Git for version control if not already installed.
4. Clone the GitHub repository:   git clone (https://github.com/emperor200888/orderapp.git)
5. in your IDE “VS Code” Navigate to the project directory:   cd orders-management-app
6. Navigate to the `backend` directory:   cd backend and run:  npm install
7. Create a `.env` file “if not found”, in the `backend` directory and add the following configuration:
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/ordersdb
8. Start the backend server in development mode:   npm run dev
   The backend server will start at `http://localhost:5000

Frontend 
1. Navigate to the `frontend` directory:   cd frontend
2. Install dependencies: npm install
3. Start the frontend development server:   npm start
   The frontend app will start at `http://localhost:3000`.
4. Perform the following actions to test:
   - View the orders list.
   - Create a new order.
   - Edit an existing order.
   - Delete an order.

Technology stack used: React + Node.js + TypeScript + MongoDB