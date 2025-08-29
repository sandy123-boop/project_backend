# Backend project

This is a backend project for video sharing platform

## Environment Variables Setup

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your actual configuration values:

   - **Database**: Set your MongoDB connection string
   - **Server**: Configure PORT and CORS_ORIGIN
   - **JWT**: Set secure secrets for access and refresh tokens
   - **Cloudinary**: Required for file uploads - get credentials from cloudinary.com

3. Required Environment Variables:
   - `MONGODB_URI`: MongoDB connection string
   - `PORT`: Server port (default: 8000)
   - `CORS_ORIGIN`: Frontend origin for CORS
   - `ACCESS_TOKEN_SECRET`: JWT access token secret
   - `ACCESS_TOKEN_EXPIRY`: JWT access token expiry
   - `REFRESH_TOKEN_SECRET`: JWT refresh token secret
   - `REFRESH_TOKEN_EXPIRY`: JWT refresh token expiry
   - `CLOUDINARY_CLOUD_NAME`: Cloudinary cloud name
   - `CLOUDINARY_API_KEY`: Cloudinary API key
   - `CLOUDINARY_API_SECRET`: Cloudinary API secret

## Development

```bash
npm install
npm run dev
```

- [Model link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)
