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

// Filter out modular models from models.json
const modelsFromJson = (modelsJson as AIModel[]).filter(m => !['gpt-5', 'grok-4'].includes(m.id));

// Combine all models: modular models from folders + rest from JSON
export const models: AIModel[] = [
  gpt5Model,
  grok4Model,
  ...modelsFromJson
];

export default models;
