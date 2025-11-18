import { AIModel } from '@/types';

// Import GPT-5 data from separate files
import gpt5Index from './models/gpt-5/index.json';
import gpt5Description from './models/gpt-5/description.md?raw';
import gpt5UseCases from './models/gpt-5/use-cases.json';
import gpt5Pricing from './models/gpt-5/pricing.json';
import gpt5Rating from './models/gpt-5/rating.json';
import gpt5Developer from './models/gpt-5/developer.md?raw';

// Import Grok 4 data from separate files
import grok4Index from './models/grok-4/index.json';
import grok4Description from './models/grok-4/description.md?raw';
import grok4UseCases from './models/grok-4/use-cases.json';
import grok4Pricing from './models/grok-4/pricing.json';
import grok4Rating from './models/grok-4/rating.json';
import grok4Developer from './models/grok-4/developer.md?raw';

// Import Claude Sonnet 4.5 data from separate files
import claudeSonnet45Index from './models/claude-sonnet-4-5/index.json';
import claudeSonnet45Description from './models/claude-sonnet-4-5/description.md?raw';
import claudeSonnet45UseCases from './models/claude-sonnet-4-5/use-cases.json';
import claudeSonnet45Pricing from './models/claude-sonnet-4-5/pricing.json';
import claudeSonnet45Rating from './models/claude-sonnet-4-5/rating.json';
import claudeSonnet45Developer from './models/claude-sonnet-4-5/developer.md?raw';

// Import Gemini 2.5 Pro data from separate files
import gemini25ProIndex from './models/gemini-2-5-pro/index.json';
import gemini25ProDescription from './models/gemini-2-5-pro/description.md?raw';
import gemini25ProUseCases from './models/gemini-2-5-pro/use-cases.json';
import gemini25ProPricing from './models/gemini-2-5-pro/pricing.json';
import gemini25ProRating from './models/gemini-2-5-pro/rating.json';
import gemini25ProDeveloper from './models/gemini-2-5-pro/developer.md?raw';

// Import Qwen3-Max data from separate files
import qwen3MaxIndex from './models/qwen3-max/index.json';
import qwen3MaxDescription from './models/qwen3-max/description.md?raw';
import qwen3MaxUseCases from './models/qwen3-max/use-cases.json';
import qwen3MaxPricing from './models/qwen3-max/pricing.json';
import qwen3MaxRating from './models/qwen3-max/rating.json';
import qwen3MaxDeveloper from './models/qwen3-max/developer.md?raw';

// Import DeepSeek-V3 data from separate files
import deepseekV3Index from './models/deepseek-v3/index.json';
import deepseekV3Description from './models/deepseek-v3/description.md?raw';
import deepseekV3UseCases from './models/deepseek-v3/use-cases.json';
import deepseekV3Pricing from './models/deepseek-v3/pricing.json';
import deepseekV3Rating from './models/deepseek-v3/rating.json';
import deepseekV3Developer from './models/deepseek-v3/developer.md?raw';

// Import Llama 4 data from separate files
import llama4Index from './models/llama-4/index.json';
import llama4Description from './models/llama-4/description.md?raw';
import llama4UseCases from './models/llama-4/use-cases.json';
import llama4Pricing from './models/llama-4/pricing.json';
import llama4Rating from './models/llama-4/rating.json';
import llama4Developer from './models/llama-4/developer.md?raw';

// Import MiniMax-M2 data from separate files
import minimaxM2Index from './models/minimax-m2/index.json';
import minimaxM2Description from './models/minimax-m2/description.md?raw';
import minimaxM2UseCases from './models/minimax-m2/use-cases.json';
import minimaxM2Pricing from './models/minimax-m2/pricing.json';
import minimaxM2Rating from './models/minimax-m2/rating.json';
import minimaxM2Developer from './models/minimax-m2/developer.md?raw';

// Import Kimi K2 data from separate files
import kimiK2Index from './models/kimi-k2/index.json';
import kimiK2Description from './models/kimi-k2/description.md?raw';
import kimiK2UseCases from './models/kimi-k2/use-cases.json';
import kimiK2Pricing from './models/kimi-k2/pricing.json';
import kimiK2Rating from './models/kimi-k2/rating.json';
import kimiK2Developer from './models/kimi-k2/developer.md?raw';

// Import EXAONE 4.0 data from separate files
import exaone4Index from './models/exaone-4/index.json';
import exaone4Description from './models/exaone-4/description.md?raw';
import exaone4UseCases from './models/exaone-4/use-cases.json';
import exaone4Pricing from './models/exaone-4/pricing.json';
import exaone4Rating from './models/exaone-4/rating.json';
import exaone4Developer from './models/exaone-4/developer.md?raw';

// Import Magistral Medium 1.2 data from separate files
import magistralMedium12Index from './models/magistral-medium-1-2/index.json';
import magistralMedium12Description from './models/magistral-medium-1-2/description.md?raw';
import magistralMedium12UseCases from './models/magistral-medium-1-2/use-cases.json';
import magistralMedium12Pricing from './models/magistral-medium-1-2/pricing.json';
import magistralMedium12Rating from './models/magistral-medium-1-2/rating.json';
import magistralMedium12Developer from './models/magistral-medium-1-2/developer.md?raw';

// Import GLM-4.6 data from separate files
import glm46Index from './models/glm-4-6/index.json';
import glm46Description from './models/glm-4-6/description.md?raw';
import glm46UseCases from './models/glm-4-6/use-cases.json';
import glm46Pricing from './models/glm-4-6/pricing.json';
import glm46Rating from './models/glm-4-6/rating.json';
import glm46Developer from './models/glm-4-6/developer.md?raw';

// Import Apriel 2.0 data from separate files
import apriel20Index from './models/apriel-2-0/index.json';
import apriel20Description from './models/apriel-2-0/description.md?raw';
import apriel20UseCases from './models/apriel-2-0/use-cases.json';
import apriel20Pricing from './models/apriel-2-0/pricing.json';
import apriel20Rating from './models/apriel-2-0/rating.json';
import apriel20Developer from './models/apriel-2-0/developer.md?raw';

// Import Replit AI data from separate files
import replitAiIndex from './models/replit-ai/index.json';
import replitAiDescription from './models/replit-ai/description.md?raw';
import replitAiUseCases from './models/replit-ai/use-cases.json';
import replitAiPricing from './models/replit-ai/pricing.json';
import replitAiRating from './models/replit-ai/rating.json';
import replitAiDeveloper from './models/replit-ai/developer.md?raw';

// Import Manus AI data from separate files
import manusAiIndex from './models/manus-ai/index.json';
import manusAiDescription from './models/manus-ai/description.md?raw';
import manusAiUseCases from './models/manus-ai/use-cases.json';
import manusAiPricing from './models/manus-ai/pricing.json';
import manusAiRating from './models/manus-ai/rating.json';
import manusAiDeveloper from './models/manus-ai/developer.md?raw';

// Import Genspark AI data from separate files
import gensparkAiIndex from './models/genspark-ai/index.json';
import gensparkAiDescription from './models/genspark-ai/description.md?raw';
import gensparkAiUseCases from './models/genspark-ai/use-cases.json';
import gensparkAiPricing from './models/genspark-ai/pricing.json';
import gensparkAiRating from './models/genspark-ai/rating.json';
import gensparkAiDeveloper from './models/genspark-ai/developer.md?raw';

// Combine GPT-5 data from separate files
const gpt5Model: AIModel = {
  ...gpt5Index,
  detailed_description: gpt5Description.trim(),
  use_cases_detail: gpt5UseCases,
  pricing_detail: gpt5Pricing,
  rating_detail: gpt5Rating,
  developer_info: gpt5Developer.trim(),
} as AIModel;

// Combine Grok 4 data from separate files
const grok4Model: AIModel = {
  ...grok4Index,
  detailed_description: grok4Description.trim(),
  use_cases_detail: grok4UseCases,
  pricing_detail: grok4Pricing,
  rating_detail: grok4Rating,
  developer_info: grok4Developer.trim(),
} as AIModel;

// Combine Claude Sonnet 4.5 data from separate files
const claudeSonnet45Model: AIModel = {
  ...claudeSonnet45Index,
  detailed_description: claudeSonnet45Description.trim(),
  use_cases_detail: claudeSonnet45UseCases,
  pricing_detail: claudeSonnet45Pricing,
  rating_detail: claudeSonnet45Rating,
  developer_info: claudeSonnet45Developer.trim(),
} as AIModel;

// Combine Gemini 2.5 Pro data from separate files
const gemini25ProModel: AIModel = {
  ...gemini25ProIndex,
  detailed_description: gemini25ProDescription.trim(),
  use_cases_detail: gemini25ProUseCases,
  pricing_detail: gemini25ProPricing,
  rating_detail: gemini25ProRating,
  developer_info: gemini25ProDeveloper.trim(),
} as AIModel;

// Combine Qwen3-Max data from separate files
const qwen3MaxModel: AIModel = {
  ...qwen3MaxIndex,
  detailed_description: qwen3MaxDescription.trim(),
  use_cases_detail: qwen3MaxUseCases,
  pricing_detail: qwen3MaxPricing,
  rating_detail: qwen3MaxRating,
  developer_info: qwen3MaxDeveloper.trim(),
} as AIModel;

// Combine DeepSeek-V3 data from separate files
const deepseekV3Model: AIModel = {
  ...deepseekV3Index,
  detailed_description: deepseekV3Description.trim(),
  use_cases_detail: deepseekV3UseCases,
  pricing_detail: deepseekV3Pricing,
  rating_detail: deepseekV3Rating,
  developer_info: deepseekV3Developer.trim(),
} as AIModel;

// Combine Llama 4 data from separate files
const llama4Model: AIModel = {
  ...llama4Index,
  detailed_description: llama4Description.trim(),
  use_cases_detail: llama4UseCases,
  pricing_detail: llama4Pricing,
  rating_detail: llama4Rating,
  developer_info: llama4Developer.trim(),
} as AIModel;

// Combine MiniMax-M2 data from separate files
const minimaxM2Model: AIModel = {
  ...minimaxM2Index,
  detailed_description: minimaxM2Description.trim(),
  use_cases_detail: minimaxM2UseCases,
  pricing_detail: minimaxM2Pricing,
  rating_detail: minimaxM2Rating,
  developer_info: minimaxM2Developer.trim(),
} as AIModel;

// Combine Kimi K2 data from separate files
const kimiK2Model: AIModel = {
  ...kimiK2Index,
  detailed_description: kimiK2Description.trim(),
  use_cases_detail: kimiK2UseCases,
  pricing_detail: kimiK2Pricing,
  rating_detail: kimiK2Rating,
  developer_info: kimiK2Developer.trim(),
} as AIModel;

// Combine EXAONE 4.0 data from separate files
const exaone4Model: AIModel = {
  ...exaone4Index,
  detailed_description: exaone4Description.trim(),
  use_cases_detail: exaone4UseCases,
  pricing_detail: exaone4Pricing,
  rating_detail: exaone4Rating,
  developer_info: exaone4Developer.trim(),
} as AIModel;

// Combine Magistral Medium 1.2 data from separate files
const magistralMedium12Model: AIModel = {
  ...magistralMedium12Index,
  detailed_description: magistralMedium12Description.trim(),
  use_cases_detail: magistralMedium12UseCases,
  pricing_detail: magistralMedium12Pricing,
  rating_detail: magistralMedium12Rating,
  developer_info: magistralMedium12Developer.trim(),
} as AIModel;

// Combine GLM-4.6 data from separate files
const glm46Model: AIModel = {
  ...glm46Index,
  detailed_description: glm46Description.trim(),
  use_cases_detail: glm46UseCases,
  pricing_detail: glm46Pricing,
  rating_detail: glm46Rating,
  developer_info: glm46Developer.trim(),
} as AIModel;

// Combine Apriel 2.0 data from separate files
const apriel20Model: AIModel = {
  ...apriel20Index,
  detailed_description: apriel20Description.trim(),
  use_cases_detail: apriel20UseCases,
  pricing_detail: apriel20Pricing,
  rating_detail: apriel20Rating,
  developer_info: apriel20Developer.trim(),
} as AIModel;

// Combine Replit AI data from separate files
const replitAiModel: AIModel = {
  ...replitAiIndex,
  detailed_description: replitAiDescription.trim(),
  use_cases_detail: replitAiUseCases,
  pricing_detail: replitAiPricing,
  rating_detail: replitAiRating,
  developer_info: replitAiDeveloper.trim(),
} as AIModel;

// Combine Manus AI data from separate files
const manusAiModel: AIModel = {
  ...manusAiIndex,
  detailed_description: manusAiDescription.trim(),
  use_cases_detail: manusAiUseCases,
  pricing_detail: manusAiPricing,
  rating_detail: manusAiRating,
  developer_info: manusAiDeveloper.trim(),
} as AIModel;

// Combine Genspark AI data from separate files
const gensparkAiModel: AIModel = {
  ...gensparkAiIndex,
  detailed_description: gensparkAiDescription.trim(),
  use_cases_detail: gensparkAiUseCases,
  pricing_detail: gensparkAiPricing,
  rating_detail: gensparkAiRating,
  developer_info: gensparkAiDeveloper.trim(),
} as AIModel;

// All models are now loaded from modular folders
export const models: AIModel[] = [
  gpt5Model,
  grok4Model,
  claudeSonnet45Model,
  gemini25ProModel,
  qwen3MaxModel,
  deepseekV3Model,
  llama4Model,
  minimaxM2Model,
  kimiK2Model,
  exaone4Model,
  magistralMedium12Model,
  glm46Model,
  apriel20Model,
  replitAiModel,
  manusAiModel,
  gensparkAiModel,
];

export default models;
