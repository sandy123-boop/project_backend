/**
 * Environment variable validation utility
 * Checks for required environment variables on application startup
 */

const requiredEnvVars = [
  'MONGODB_URI',
  'PORT',
  'CORS_ORIGIN',
  'ACCESS_TOKEN_SECRET',
  'ACCESS_TOKEN_EXPIRY',
  'REFRESH_TOKEN_SECRET', 
  'REFRESH_TOKEN_EXPIRY',
  'CLOUDINARY_CLOUD_NAME',
  'CLOUDINARY_API_KEY',
  'CLOUDINARY_API_SECRET'
];

export const validateEnvVars = () => {
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:');
    missingVars.forEach(varName => {
      console.error(`   - ${varName}`);
    });
    console.error('\n💡 Please check your .env file and ensure all required variables are set.');
    console.error('   Refer to .env.example for the complete list of required variables.');
    process.exit(1);
  }
  
  console.log('✅ All required environment variables are set');
  
  // Debug: Show Cloudinary config status
  console.log('Cloudinary config status:', {
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME ? 'set' : 'missing',
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY ? 'set' : 'missing',
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET ? 'set' : 'missing'
  });
};
