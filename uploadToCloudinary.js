import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config({ path: '.env.local' });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectsDir = path.join(__dirname, 'public', 'projects');

async function uploadFile(filePath, fileName) {
  try {
    console.log(`Starting upload for ${fileName}...`);
    
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload_large(filePath, {
        resource_type: "video", // Required for videos, audio or other large files
        folder: "portfolio",
        public_id: path.parse(fileName).name, // use filename without extension
        chunk_size: 20000000 // 20MB chunks
      }, (error, result) => {
        if (error) {
          console.error(`Error uploading ${fileName}:`, error);
          reject(error);
        } else {
          console.log(`Successfully uploaded ${fileName}`);
          console.log(`URL: ${result.secure_url}\n`);
          resolve(result);
        }
      });
    });
  } catch (error) {
    console.error(`Unexpected error with ${fileName}:`, error);
  }
}

async function uploadAll() {
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.error("❌ ERROR: Cloudinary credentials missing in .env.local");
    return;
  }

  const files = fs.readdirSync(projectsDir);
  
  for (const file of files) {
    const filePath = path.join(projectsDir, file);
    if (fs.statSync(filePath).isFile() && file.endsWith('.mp4')) {
      await uploadFile(filePath, file);
    }
  }
  console.log("All uploads complete! 🎉");
}

uploadAll();
