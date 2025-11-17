import { AIModel } from '@/types';
import modelsJson from './models.json';

// Import GPT-5 data from separate files
import gpt5Index from './models/gpt-5/index.json';
import gpt5Description from './models/gpt-5/description.md?raw';
import gpt5UseCases from './models/gpt-5/use-cases.json';
import gpt5Pricing from './models/gpt-5/pricing.json';
import gpt5Rating from './models/gpt-5/rating.json';
import gpt5Developer from './models/gpt-5/developer.md?raw';

// Combine GPT-5 data from separate files
const gpt5Model: AIModel = {
  ...gpt5Index,
  detailed_description: gpt5Description.trim(),
  use_cases_detail: gpt5UseCases,
  pricing_detail: gpt5Pricing,
  rating_detail: gpt5Rating,
  developer_info: gpt5Developer.trim(),
} as AIModel;

// Filter out GPT-5 from models.json (if it exists) and add the modular version
const modelsFromJson = (modelsJson as AIModel[]).filter(m => m.id !== 'gpt-5');

// Combine all models: GPT-5 from folder + rest from JSON
export const models: AIModel[] = [
  gpt5Model,
  ...modelsFromJson
];

export default models;
