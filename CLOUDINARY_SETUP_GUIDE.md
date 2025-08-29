# Cloudinary Setup Guide

## Step 1: Create Your .env File
1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file and fill in your actual credentials

## Step 2: Get Cloudinary Credentials
1. Go to [Cloudinary Dashboard](https://cloudinary.com/console)
2. Sign up or log in to your account
3. On the dashboard, you'll find your:
   - **Cloud Name** (e.g., `my-cloud-name`)
   - **API Key** (e.g., `123456789012345`)
   - **API Secret** (e.g., `abcdefghijklmnopqrstuvwxyz123456`)

## Step 3: Update Your .env File
Replace the placeholder values in your `.env` file:

```env
CLOUDINARY_CLOUD_NAME=your-actual-cloud-name
CLOUDINARY_API_KEY=your-actual-api-key
CLOUDINARY_API_SECRET=your-actual-api-secret
```

## Step 4: Restart Your Server
After updating the `.env` file, restart your server:
```bash
npm run dev
```

## Step 5: Verify the Setup
The server should now show:
- "✅ All required environment variables are set"
- Cloudinary config status showing all variables as "set"

## Troubleshooting
- **Invalid Signature Error**: This means your Cloudinary credentials are incorrect
- **401 Unauthorized**: Double-check your API key and secret
- **Missing Variables**: Ensure all three Cloudinary variables are set in your `.env` file

## Security Notes
- Never commit your `.env` file to version control
- Keep your API secrets secure
- Use different credentials for development and production
