import { AIModel } from '@/types';
import modelsJson from './models.json';

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

// Filter out modular models from models.json
const modelsFromJson = (modelsJson as AIModel[]).filter(m => !['gpt-5', 'grok-4', 'claude-sonnet-4-5', 'gemini-2-5-pro'].includes(m.id));

// Combine all models: modular models from folders + rest from JSON
export const models: AIModel[] = [
  gpt5Model,
  grok4Model,
  claudeSonnet45Model,
  gemini25ProModel,
  ...modelsFromJson
];

export default models;
