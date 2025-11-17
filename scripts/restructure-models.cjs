const fs = require('fs');
const path = require('path');

// Read the current models.json
const modelsData = JSON.parse(fs.readFileSync('./src/data/models.json', 'utf8'));

// Create models directory if it doesn't exist
const modelsDir = './src/data/models';
if (!fs.existsSync(modelsDir)) {
  fs.mkdirSync(modelsDir, { recursive: true });
}

// Fields for index.json (lightweight, for lists and filters)
const indexFields = [
  'id', 'name', 'provider', 'description', 'modalities',
  'context_window', 'strengths', 'best_for', 'cost_tier',
  'open_weight', 'links', 'pricing'
];

// Fields for details.json (heavy content, lazy loaded)
const detailFields = [
  'id', 'consider_if', 'limitations', 'tasks', 'industries',
  'release_date', 'rating', 'detailed_description', 'use_cases_detail',
  'pricing_detail', 'developer_info', 'category', 'tags', 'rating_detail'
];

// Create index.json with base model data
const indexData = modelsData.map(model => {
  const base = {};
  indexFields.forEach(field => {
    if (model[field] !== undefined) {
      base[field] = model[field];
    }
  });
  return base;
});

fs.writeFileSync(
  path.join(modelsDir, 'index.json'),
  JSON.stringify(indexData, null, 2)
);

console.log('✅ Created models/index.json');

// Create individual detail files for each model
modelsData.forEach(model => {
  const modelDir = path.join(modelsDir, model.id);
  if (!fs.existsSync(modelDir)) {
    fs.mkdirSync(modelDir, { recursive: true });
  }

  const details = {};
  detailFields.forEach(field => {
    if (model[field] !== undefined) {
      details[field] = model[field];
    }
  });

  fs.writeFileSync(
    path.join(modelDir, 'details.json'),
    JSON.stringify(details, null, 2)
  );

  console.log(`✅ Created models/${model.id}/details.json`);
});

console.log('\n🎉 Restructuring complete!');
console.log(`📁 Created ${modelsData.length} model directories`);
console.log('📄 Created 1 index.json + ' + modelsData.length + ' details.json files');
