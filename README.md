# Cartwright E-Commerce

Cartwright is a product catalog and seller dashboard built with React, Express, and MongoDB. Users can browse the catalog, while seller accounts can create, edit, and delete products. Product images are uploaded to ImageKit.

## Features

- Account registration, login, and session refresh
- Product catalog with search and category filters
- Product detail pages
- Seller product creation, editing, and deletion
- Multiple product images stored with ImageKit
- Product pricing, currency, description, and stock management

## Seller Demo Account

**Use this account to access seller features, including creating, editing, and deleting products.** Regular user accounts do not have seller permissions.

- Email: `developer@gmail.com`
- Password: `dev@123`

This is a demo account.

## Requirements

- Node.js
- MongoDB, local or hosted
- An ImageKit account and private API key

## Configuration

Create `server/.env` with:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/cartwright_ecom
ACCESS_TOKEN_SECRET=replace_with_a_long_random_secret
REFRESH_TOKEN_SECRET=replace_with_another_long_random_secret
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Set `MONGO_URI` to your MongoDB connection string. Keep the ImageKit private key and token secrets on the server; do not commit real secrets.

Create `client/.env` with:

```env
VITE_API_URL=http://localhost:3000/api
```

The server currently allows the Vite development origin `http://localhost:5173`.

## Install

Install dependencies separately in each app:

```powershell
cd server
npm install
cd ../client
npm install
```

## Run Locally

Start the backend in one terminal:

```powershell
cd server
npm run dev
```

Start the frontend in another terminal:

```powershell
cd client
npm run dev
```

Open the Vite URL shown in the client terminal, usually `http://localhost:5173`.

## Seller Permissions

Newly registered accounts default to the `user` role. Only accounts with the `seller` role can create, edit, or delete products. Make sure the demo account above has been provisioned as a seller in MongoDB before using those features.

## Project Structure

```text
client/  React, Vite, and Tailwind frontend
server/  Express API, MongoDB models, authentication, and ImageKit uploads
```
