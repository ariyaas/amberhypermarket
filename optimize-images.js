import { promises as fs } from "fs";
import path from "path";
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

const srcDir = "src/assets";
const outDir = "src/assets/optimized";

async function convertImages() {
  await fs.mkdir(outDir, { recursive: true });

  const files = await fs.readdir(srcDir);
  const images = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f));

  for (const img of images) {
    const inputPath = path.join(srcDir, img);
    const outputPath = path.join(outDir, img.replace(/\.(png|jpe?g)$/i, ".webp"));

    console.log(`🧠 Converting: ${img}`);
    await imagemin([inputPath], {
      destination: outDir,
      plugins: [imageminWebp({ quality: 80 })],
    });
    console.log(`✅ Saved: ${outputPath}`);
  }

  console.log("\n🎉 All images converted successfully!");
}

convertImages().catch(console.error);
