const fs = require('fs');
const path = require('path');

function removeReactFlowData(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('reactFlowData:')) {
    return false;
  }
  
  console.log(`Processing: ${filePath}`);
  
  let count = 0;
  let modified = content;
  
  // Keep removing reactFlowData blocks until none are left
  while (modified.includes('reactFlowData:')) {
    const before = modified;
    
    // Find "reactFlowData: {" and match until we find "},\n    steps: ["
    // We need to be careful to match the correct closing brace
    const regex = /reactFlowData:\s*\{[\s\S]*?\},\s*steps:\s*\[/;
    
    modified = modified.replace(regex, 'steps: [');
    
    if (modified === before) {
      console.log(`  ERROR: Could not remove reactFlowData block`);
      break;
    }
    
    count++;
  }
  
  if (count > 0) {
    fs.writeFileSync(filePath, modified, 'utf8');
    console.log(`  ✓ Removed ${count} reactFlowData block(s)`);
    return true;
  }
  
  return false;
}

function main() {
  const flowchartDir = 'src/data/flowcharts';
  const files = fs.readdirSync(flowchartDir)
    .filter(f => f.endsWith('.ts') && !f.endsWith('.test.ts') && f !== 'index.ts')
    .map(f => path.join(flowchartDir, f));
  
  let totalModified = 0;
  for (const file of files) {
    if (removeReactFlowData(file)) {
      totalModified++;
    }
  }
  
  console.log(`\n✅ Done! Modified ${totalModified} file(s)`);
}

main();

