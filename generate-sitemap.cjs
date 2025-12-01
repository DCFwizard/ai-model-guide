// Generate dynamic sitemap.xml from JSON data
const fs = require('fs');
const path = require('path');

// Load all models from individual model folders
function loadModels() {
  // Load GPT-5 from its folder
  const gpt5Index = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/gpt-5/index.json'), 'utf8')
  );
  const gpt5Description = fs.readFileSync(
    path.join(__dirname, 'src/data/models/gpt-5/description.md'), 'utf8'
  ).trim();
  const gpt5UseCases = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/gpt-5/use-cases.json'), 'utf8')
  );
  const gpt5Pricing = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/gpt-5/pricing.json'), 'utf8')
  );
  const gpt5Rating = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/gpt-5/rating.json'), 'utf8')
  );
  const gpt5Developer = fs.readFileSync(
    path.join(__dirname, 'src/data/models/gpt-5/developer.md'), 'utf8'
  ).trim();

  const gpt5Model = {
    ...gpt5Index,
    detailed_description: gpt5Description,
    use_cases_detail: gpt5UseCases,
    pricing_detail: gpt5Pricing,
    rating_detail: gpt5Rating,
    developer_info: gpt5Developer,
  };

  // Load Grok 4 from its folder
  const grok4Index = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/grok-4/index.json'), 'utf8')
  );
  const grok4Description = fs.readFileSync(
    path.join(__dirname, 'src/data/models/grok-4/description.md'), 'utf8'
  ).trim();
  const grok4UseCases = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/grok-4/use-cases.json'), 'utf8')
  );
  const grok4Pricing = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/grok-4/pricing.json'), 'utf8')
  );
  const grok4Rating = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/grok-4/rating.json'), 'utf8')
  );
  const grok4Developer = fs.readFileSync(
    path.join(__dirname, 'src/data/models/grok-4/developer.md'), 'utf8'
  ).trim();

  const grok4Model = {
    ...grok4Index,
    detailed_description: grok4Description,
    use_cases_detail: grok4UseCases,
    pricing_detail: grok4Pricing,
    rating_detail: grok4Rating,
    developer_info: grok4Developer,
  };

  // Load Claude Sonnet 4.5 from its folder
  const claudeSonnet45Index = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/claude-sonnet-4-5/index.json'), 'utf8')
  );
  const claudeSonnet45Description = fs.readFileSync(
    path.join(__dirname, 'src/data/models/claude-sonnet-4-5/description.md'), 'utf8'
  ).trim();
  const claudeSonnet45UseCases = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/claude-sonnet-4-5/use-cases.json'), 'utf8')
  );
  const claudeSonnet45Pricing = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/claude-sonnet-4-5/pricing.json'), 'utf8')
  );
  const claudeSonnet45Rating = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/claude-sonnet-4-5/rating.json'), 'utf8')
  );
  const claudeSonnet45Developer = fs.readFileSync(
    path.join(__dirname, 'src/data/models/claude-sonnet-4-5/developer.md'), 'utf8'
  ).trim();

  const claudeSonnet45Model = {
    ...claudeSonnet45Index,
    detailed_description: claudeSonnet45Description,
    use_cases_detail: claudeSonnet45UseCases,
    pricing_detail: claudeSonnet45Pricing,
    rating_detail: claudeSonnet45Rating,
    developer_info: claudeSonnet45Developer,
  };

  // Load Gemini 2.5 Pro from its folder
  const gemini25ProIndex = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/gemini-2-5-pro/index.json'), 'utf8')
  );
  const gemini25ProDescription = fs.readFileSync(
    path.join(__dirname, 'src/data/models/gemini-2-5-pro/description.md'), 'utf8'
  ).trim();
  const gemini25ProUseCases = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/gemini-2-5-pro/use-cases.json'), 'utf8')
  );
  const gemini25ProPricing = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/gemini-2-5-pro/pricing.json'), 'utf8')
  );
  const gemini25ProRating = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/gemini-2-5-pro/rating.json'), 'utf8')
  );
  const gemini25ProDeveloper = fs.readFileSync(
    path.join(__dirname, 'src/data/models/gemini-2-5-pro/developer.md'), 'utf8'
  ).trim();

  const gemini25ProModel = {
    ...gemini25ProIndex,
    detailed_description: gemini25ProDescription,
    use_cases_detail: gemini25ProUseCases,
    pricing_detail: gemini25ProPricing,
    rating_detail: gemini25ProRating,
    developer_info: gemini25ProDeveloper,
  };

  // Load Qwen3-Max from its folder
  const qwen3MaxIndex = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/qwen3-max/index.json'), 'utf8')
  );
  const qwen3MaxDescription = fs.readFileSync(
    path.join(__dirname, 'src/data/models/qwen3-max/description.md'), 'utf8'
  ).trim();
  const qwen3MaxUseCases = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/qwen3-max/use-cases.json'), 'utf8')
  );
  const qwen3MaxPricing = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/qwen3-max/pricing.json'), 'utf8')
  );
  const qwen3MaxRating = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/qwen3-max/rating.json'), 'utf8')
  );
  const qwen3MaxDeveloper = fs.readFileSync(
    path.join(__dirname, 'src/data/models/qwen3-max/developer.md'), 'utf8'
  ).trim();

  const qwen3MaxModel = {
    ...qwen3MaxIndex,
    detailed_description: qwen3MaxDescription,
    use_cases_detail: qwen3MaxUseCases,
    pricing_detail: qwen3MaxPricing,
    rating_detail: qwen3MaxRating,
    developer_info: qwen3MaxDeveloper,
  };

  // Load DeepSeek-V3 from its folder
  const deepseekV3Index = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/deepseek-v3/index.json'), 'utf8')
  );
  const deepseekV3Description = fs.readFileSync(
    path.join(__dirname, 'src/data/models/deepseek-v3/description.md'), 'utf8'
  ).trim();
  const deepseekV3UseCases = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/deepseek-v3/use-cases.json'), 'utf8')
  );
  const deepseekV3Pricing = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/deepseek-v3/pricing.json'), 'utf8')
  );
  const deepseekV3Rating = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/deepseek-v3/rating.json'), 'utf8')
  );
  const deepseekV3Developer = fs.readFileSync(
    path.join(__dirname, 'src/data/models/deepseek-v3/developer.md'), 'utf8'
  ).trim();

  const deepseekV3Model = {
    ...deepseekV3Index,
    detailed_description: deepseekV3Description,
    use_cases_detail: deepseekV3UseCases,
    pricing_detail: deepseekV3Pricing,
    rating_detail: deepseekV3Rating,
    developer_info: deepseekV3Developer,
  };

  // Load Llama 4 from its folder
  const llama4Index = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/llama-4/index.json'), 'utf8')
  );
  const llama4Description = fs.readFileSync(
    path.join(__dirname, 'src/data/models/llama-4/description.md'), 'utf8'
  ).trim();
  const llama4UseCases = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/llama-4/use-cases.json'), 'utf8')
  );
  const llama4Pricing = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/llama-4/pricing.json'), 'utf8')
  );
  const llama4Rating = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/llama-4/rating.json'), 'utf8')
  );
  const llama4Developer = fs.readFileSync(
    path.join(__dirname, 'src/data/models/llama-4/developer.md'), 'utf8'
  ).trim();

  const llama4Model = {
    ...llama4Index,
    detailed_description: llama4Description,
    use_cases_detail: llama4UseCases,
    pricing_detail: llama4Pricing,
    rating_detail: llama4Rating,
    developer_info: llama4Developer,
  };

  // Load MiniMax-M2 from its folder
  const minimaxM2Index = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/minimax-m2/index.json'), 'utf8')
  );
  const minimaxM2Description = fs.readFileSync(
    path.join(__dirname, 'src/data/models/minimax-m2/description.md'), 'utf8'
  ).trim();
  const minimaxM2UseCases = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/minimax-m2/use-cases.json'), 'utf8')
  );
  const minimaxM2Pricing = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/minimax-m2/pricing.json'), 'utf8')
  );
  const minimaxM2Rating = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/minimax-m2/rating.json'), 'utf8')
  );
  const minimaxM2Developer = fs.readFileSync(
    path.join(__dirname, 'src/data/models/minimax-m2/developer.md'), 'utf8'
  ).trim();

  const minimaxM2Model = {
    ...minimaxM2Index,
    detailed_description: minimaxM2Description,
    use_cases_detail: minimaxM2UseCases,
    pricing_detail: minimaxM2Pricing,
    rating_detail: minimaxM2Rating,
    developer_info: minimaxM2Developer,
  };

  // Load Kimi K2 from its folder
  const kimiK2Index = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/kimi-k2/index.json'), 'utf8')
  );
  const kimiK2Description = fs.readFileSync(
    path.join(__dirname, 'src/data/models/kimi-k2/description.md'), 'utf8'
  ).trim();
  const kimiK2UseCases = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/kimi-k2/use-cases.json'), 'utf8')
  );
  const kimiK2Pricing = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/kimi-k2/pricing.json'), 'utf8')
  );
  const kimiK2Rating = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/kimi-k2/rating.json'), 'utf8')
  );
  const kimiK2Developer = fs.readFileSync(
    path.join(__dirname, 'src/data/models/kimi-k2/developer.md'), 'utf8'
  ).trim();

  const kimiK2Model = {
    ...kimiK2Index,
    detailed_description: kimiK2Description,
    use_cases_detail: kimiK2UseCases,
    pricing_detail: kimiK2Pricing,
    rating_detail: kimiK2Rating,
    developer_info: kimiK2Developer,
  };

  // Load EXAONE 4.0 from its folder
  const exaone4Index = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/exaone-4/index.json'), 'utf8')
  );
  const exaone4Description = fs.readFileSync(
    path.join(__dirname, 'src/data/models/exaone-4/description.md'), 'utf8'
  ).trim();
  const exaone4UseCases = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/exaone-4/use-cases.json'), 'utf8')
  );
  const exaone4Pricing = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/exaone-4/pricing.json'), 'utf8')
  );
  const exaone4Rating = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/exaone-4/rating.json'), 'utf8')
  );
  const exaone4Developer = fs.readFileSync(
    path.join(__dirname, 'src/data/models/exaone-4/developer.md'), 'utf8'
  ).trim();

  const exaone4Model = {
    ...exaone4Index,
    detailed_description: exaone4Description,
    use_cases_detail: exaone4UseCases,
    pricing_detail: exaone4Pricing,
    rating_detail: exaone4Rating,
    developer_info: exaone4Developer,
  };

  // Load Magistral Medium 1.2 from its folder
  const magistralMedium12Index = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/magistral-medium-1-2/index.json'), 'utf8')
  );
  const magistralMedium12Description = fs.readFileSync(
    path.join(__dirname, 'src/data/models/magistral-medium-1-2/description.md'), 'utf8'
  ).trim();
  const magistralMedium12UseCases = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/magistral-medium-1-2/use-cases.json'), 'utf8')
  );
  const magistralMedium12Pricing = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/magistral-medium-1-2/pricing.json'), 'utf8')
  );
  const magistralMedium12Rating = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/magistral-medium-1-2/rating.json'), 'utf8')
  );
  const magistralMedium12Developer = fs.readFileSync(
    path.join(__dirname, 'src/data/models/magistral-medium-1-2/developer.md'), 'utf8'
  ).trim();

  const magistralMedium12Model = {
    ...magistralMedium12Index,
    detailed_description: magistralMedium12Description,
    use_cases_detail: magistralMedium12UseCases,
    pricing_detail: magistralMedium12Pricing,
    rating_detail: magistralMedium12Rating,
    developer_info: magistralMedium12Developer,
  };

  // Load GLM-4.6 from its folder
  const glm46Index = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/glm-4-6/index.json'), 'utf8')
  );
  const glm46Description = fs.readFileSync(
    path.join(__dirname, 'src/data/models/glm-4-6/description.md'), 'utf8'
  ).trim();
  const glm46UseCases = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/glm-4-6/use-cases.json'), 'utf8')
  );
  const glm46Pricing = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/glm-4-6/pricing.json'), 'utf8')
  );
  const glm46Rating = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/glm-4-6/rating.json'), 'utf8')
  );
  const glm46Developer = fs.readFileSync(
    path.join(__dirname, 'src/data/models/glm-4-6/developer.md'), 'utf8'
  ).trim();

  const glm46Model = {
    ...glm46Index,
    detailed_description: glm46Description,
    use_cases_detail: glm46UseCases,
    pricing_detail: glm46Pricing,
    rating_detail: glm46Rating,
    developer_info: glm46Developer,
  };

  // Load Apriel 2.0 from its folder
  const apriel20Index = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/apriel-2-0/index.json'), 'utf8')
  );
  const apriel20Description = fs.readFileSync(
    path.join(__dirname, 'src/data/models/apriel-2-0/description.md'), 'utf8'
  ).trim();
  const apriel20UseCases = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/apriel-2-0/use-cases.json'), 'utf8')
  );
  const apriel20Pricing = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/apriel-2-0/pricing.json'), 'utf8')
  );
  const apriel20Rating = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/apriel-2-0/rating.json'), 'utf8')
  );
  const apriel20Developer = fs.readFileSync(
    path.join(__dirname, 'src/data/models/apriel-2-0/developer.md'), 'utf8'
  ).trim();

  const apriel20Model = {
    ...apriel20Index,
    detailed_description: apriel20Description,
    use_cases_detail: apriel20UseCases,
    pricing_detail: apriel20Pricing,
    rating_detail: apriel20Rating,
    developer_info: apriel20Developer,
  };

  // Load Replit AI from its folder
  const replitAiIndex = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/replit-ai/index.json'), 'utf8')
  );
  const replitAiDescription = fs.readFileSync(
    path.join(__dirname, 'src/data/models/replit-ai/description.md'), 'utf8'
  ).trim();
  const replitAiUseCases = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/replit-ai/use-cases.json'), 'utf8')
  );
  const replitAiPricing = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/replit-ai/pricing.json'), 'utf8')
  );
  const replitAiRating = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/replit-ai/rating.json'), 'utf8')
  );
  const replitAiDeveloper = fs.readFileSync(
    path.join(__dirname, 'src/data/models/replit-ai/developer.md'), 'utf8'
  ).trim();

  const replitAiModel = {
    ...replitAiIndex,
    detailed_description: replitAiDescription,
    use_cases_detail: replitAiUseCases,
    pricing_detail: replitAiPricing,
    rating_detail: replitAiRating,
    developer_info: replitAiDeveloper,
  };

  // Load Manus AI from its folder
  const manusAiIndex = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/manus-ai/index.json'), 'utf8')
  );
  const manusAiDescription = fs.readFileSync(
    path.join(__dirname, 'src/data/models/manus-ai/description.md'), 'utf8'
  ).trim();
  const manusAiUseCases = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/manus-ai/use-cases.json'), 'utf8')
  );
  const manusAiPricing = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/manus-ai/pricing.json'), 'utf8')
  );
  const manusAiRating = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/manus-ai/rating.json'), 'utf8')
  );
  const manusAiDeveloper = fs.readFileSync(
    path.join(__dirname, 'src/data/models/manus-ai/developer.md'), 'utf8'
  ).trim();

  const manusAiModel = {
    ...manusAiIndex,
    detailed_description: manusAiDescription,
    use_cases_detail: manusAiUseCases,
    pricing_detail: manusAiPricing,
    rating_detail: manusAiRating,
    developer_info: manusAiDeveloper,
  };

  // Load Genspark AI from its folder
  const gensparkAiIndex = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/genspark-ai/index.json'), 'utf8')
  );
  const gensparkAiDescription = fs.readFileSync(
    path.join(__dirname, 'src/data/models/genspark-ai/description.md'), 'utf8'
  ).trim();
  const gensparkAiUseCases = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/genspark-ai/use-cases.json'), 'utf8')
  );
  const gensparkAiPricing = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/genspark-ai/pricing.json'), 'utf8')
  );
  const gensparkAiRating = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/genspark-ai/rating.json'), 'utf8')
  );
  const gensparkAiDeveloper = fs.readFileSync(
    path.join(__dirname, 'src/data/models/genspark-ai/developer.md'), 'utf8'
  ).trim();

  const gensparkAiModel = {
    ...gensparkAiIndex,
    detailed_description: gensparkAiDescription,
    use_cases_detail: gensparkAiUseCases,
    pricing_detail: gensparkAiPricing,
    rating_detail: gensparkAiRating,
    developer_info: gensparkAiDeveloper,
  };

  // Load Gemini 3 from its folder
  const gemini3Index = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/gemini-3/index.json'), 'utf8')
  );
  const gemini3Description = fs.readFileSync(
    path.join(__dirname, 'src/data/models/gemini-3/description.md'), 'utf8'
  ).trim();
  const gemini3UseCases = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/gemini-3/use-cases.json'), 'utf8')
  );
  const gemini3Pricing = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/gemini-3/pricing.json'), 'utf8')
  );
  const gemini3Rating = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'src/data/models/gemini-3/rating.json'), 'utf8')
  );
  const gemini3Developer = fs.readFileSync(
    path.join(__dirname, 'src/data/models/gemini-3/developer.md'), 'utf8'
  ).trim();

  const gemini3Model = {
    ...gemini3Index,
    detailed_description: gemini3Description,
    use_cases_detail: gemini3UseCases,
    pricing_detail: gemini3Pricing,
    rating_detail: gemini3Rating,
    developer_info: gemini3Developer,
  };

  return [gpt5Model, grok4Model, claudeSonnet45Model, gemini25ProModel, gemini3Model, qwen3MaxModel, deepseekV3Model, llama4Model, minimaxM2Model, kimiK2Model, exaone4Model, magistralMedium12Model, glm46Model, apriel20Model, replitAiModel, manusAiModel, gensparkAiModel];
}

// Load blog posts from modular structure
function loadBlogPosts() {
  const blogPostSlugs = [
    'gemini-3-pro-benchmark-ai-performance',
    'manus-browser-operator-local-automation',
    'gemini-web-youtube-summarization-workflow',
    'gpt-5-1-chatgpt-smarter-warmer-personalized',
    'kimi-k2-thinking-moonshot-ai-reasoning-powerhouse',
    'monthly-update-ai-models-october-2025'
  ];

  return blogPostSlugs.map(slug => {
    const indexPath = path.join(__dirname, `src/data/blog-posts/${slug}/index.json`);
    const contentPath = path.join(__dirname, `src/data/blog-posts/${slug}/content.md`);

    const indexData = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
    const content = fs.readFileSync(contentPath, 'utf8').trim();

    return {
      ...indexData,
      content
    };
  });
}

// Load use cases from modular structure
function loadUseCases() {
  const useCaseSlugs = [
    'summarization',
    'rag',
    'coding-assistance',
    'text-generation',
    'vision',
    'agents'
  ];

  return useCaseSlugs.map(slug => {
    const indexPath = path.join(__dirname, `src/data/use-cases/${slug}/index.json`);
    const overviewPath = path.join(__dirname, `src/data/use-cases/${slug}/overview.md`);
    const recommendationsPath = path.join(__dirname, `src/data/use-cases/${slug}/recommendations.json`);
    const evaluationCriteriaPath = path.join(__dirname, `src/data/use-cases/${slug}/evaluation-criteria.json`);
    const faqPath = path.join(__dirname, `src/data/use-cases/${slug}/faq.json`);

    const indexData = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
    const overview = fs.readFileSync(overviewPath, 'utf8').trim();
    const recommendations = JSON.parse(fs.readFileSync(recommendationsPath, 'utf8'));
    const evaluationCriteria = JSON.parse(fs.readFileSync(evaluationCriteriaPath, 'utf8'));
    const faq = JSON.parse(fs.readFileSync(faqPath, 'utf8'));

    return {
      ...indexData,
      overview,
      recommendations,
      evaluation_criteria: evaluationCriteria,
      faq
    };
  });
}

const modelsData = loadModels();
const useCasesData = loadUseCases();
const blogPostsData = loadBlogPosts();

const SITE_URL = 'https://whichaimodeltouseforwhat.com';
const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

// Static pages with priorities
const staticPages = [
  { url: '/', priority: '1.00', changefreq: 'weekly' },
  { url: '/models', priority: '0.90', changefreq: 'weekly' },
  { url: '/use-cases', priority: '0.90', changefreq: 'weekly' },
  { url: '/blog', priority: '0.90', changefreq: 'daily' },
  { url: '/comparisons', priority: '0.85', changefreq: 'monthly' },
  { url: '/comparisons/gpt-vs-claude', priority: '0.85', changefreq: 'monthly' },
  { url: '/faq', priority: '0.70', changefreq: 'monthly' },
  { url: '/about', priority: '0.60', changefreq: 'monthly' },
  { url: '/contact', priority: '0.50', changefreq: 'yearly' },
  { url: '/privacy', priority: '0.30', changefreq: 'yearly' },
  { url: '/terms', priority: '0.30', changefreq: 'yearly' },
];

// Generate XML
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add static pages
staticPages.forEach(page => {
  xml += `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
});

// Add model detail pages
modelsData.forEach(model => {
  xml += `  <url>
    <loc>${SITE_URL}/models/${model.id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>
`;
});

// Add use case detail pages
useCasesData.forEach(useCase => {
  xml += `  <url>
    <loc>${SITE_URL}/use-cases/${useCase.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>
`;
});

// Add blog post pages
blogPostsData.forEach(post => {
  xml += `  <url>
    <loc>${SITE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.publishDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>
`;
});

xml += `</urlset>`;

// Write sitemap.xml
fs.writeFileSync(path.join(__dirname, 'public/sitemap.xml'), xml);

console.log('✅ Sitemap generated successfully!');
console.log(`   - ${staticPages.length} static pages`);
console.log(`   - ${modelsData.length} model pages`);
console.log(`   - ${useCasesData.length} use case pages`);
console.log(`   - ${blogPostsData.length} blog posts`);
console.log(`   - Total: ${staticPages.length + modelsData.length + useCasesData.length + blogPostsData.length} URLs`);
