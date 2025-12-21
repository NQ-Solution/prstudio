import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public/images');
const QUALITY = 80; // JPEG/WebP quality
const MAX_WIDTH = 1920; // Max width for images

let totalOriginal = 0;
let totalOptimized = 0;
let processedCount = 0;

async function optimizeImage(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

    const stats = fs.statSync(filePath);
    const originalSize = stats.size;
    totalOriginal += originalSize;

    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Resize if too large
    let pipeline = image;
    if (metadata.width && metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
    }

    // Convert to optimized format
    let outputPath = filePath;
    let buffer;

    if (ext === '.png') {
      // Check if image has transparency
      if (metadata.hasAlpha) {
        // Keep as PNG but optimize
        buffer = await pipeline.png({ quality: QUALITY, compressionLevel: 9 }).toBuffer();
      } else {
        // Convert to JPEG
        outputPath = filePath.replace(/\.png$/i, '.jpg');
        buffer = await pipeline.jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer();
        fs.unlinkSync(filePath); // Remove original PNG
      }
    } else {
      // Optimize JPEG
      buffer = await pipeline.jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer();
    }

    fs.writeFileSync(outputPath, buffer);
    const newSize = buffer.length;
    totalOptimized += newSize;
    processedCount++;

    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    console.log(`✓ ${path.basename(filePath)} → ${path.basename(outputPath)} (${formatSize(originalSize)} → ${formatSize(newSize)}, -${savings}%)`);

  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + 'B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + 'KB';
  return (bytes / (1024 * 1024)).toFixed(1) + 'MB';
}

async function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      await walkDir(filePath);
    } else {
      await optimizeImage(filePath);
    }
  }
}

console.log('🖼️  이미지 최적화 시작...\n');
console.log(`디렉토리: ${PUBLIC_DIR}\n`);

await walkDir(PUBLIC_DIR);

console.log('\n' + '='.repeat(50));
console.log(`📊 최적화 완료!`);
console.log(`   처리된 파일: ${processedCount}개`);
console.log(`   원본 크기: ${formatSize(totalOriginal)}`);
console.log(`   최적화 후: ${formatSize(totalOptimized)}`);
console.log(`   절감: ${formatSize(totalOriginal - totalOptimized)} (${((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1)}%)`);
