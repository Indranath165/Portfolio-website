const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Function to convert SVG to PNG
async function convertSvgToPng(svgPath, outputPath) {
  try {
    const svgContent = fs.readFileSync(svgPath, 'utf8');
    
    // Convert SVG to PNG using sharp
    await sharp(Buffer.from(svgContent))
      .resize(800, 600)
      .toFile(outputPath);
    
    console.log(`Converted ${svgPath} to ${outputPath}`);
  } catch (error) {
    console.error(`Error converting ${svgPath}:`, error);
  }
}

// Convert project images
async function convertProjectImages() {
  const projectsDir = path.join(__dirname, 'public', 'projects');
  
  // Create PNG versions of the SVG files
  await convertSvgToPng(
    path.join(projectsDir, 'project-1.svg'), 
    path.join(projectsDir, 'project-1.png')
  );
  
  await convertSvgToPng(
    path.join(projectsDir, 'project-2.svg'), 
    path.join(projectsDir, 'project-2.png')
  );
  
  await convertSvgToPng(
    path.join(projectsDir, 'project-3.svg'), 
    path.join(projectsDir, 'project-3.png')
  );
  
  console.log('All images converted successfully!');
}

// Run the conversion
convertProjectImages().catch(console.error);