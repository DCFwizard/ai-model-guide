import { LucideIcon } from "lucide-react";
export type Modality = "text" | "vision" | "speech";
export type ContextWindow = "small" | "medium" | "long" | "very long";
export type CostTier = "$" | "$$" | "$$$" | "$-$$$";
export interface AIModel {
  id: string;
  name: string;
  provider: string;
  description: string;
  modalities: Modality[];
  context_window: ContextWindow;
  strengths: string[];
  best_for: string[];
  consider_if: string;
  limitations: string;
  cost_tier: CostTier;
  open_weight: boolean;
  links: {
    site: string;
    docs: string;
    pricing: string;
  };
  // SEO-friendly fields (optional)
  pricing?: string;
  tasks?: string[];
  industries?: string[];
  release_date?: string;
  rating?: {
    speed: number;
    quality: number;
    cost: number;
  };
  // Detailed content sections (optional)
  detailed_description?: string;
  use_cases_detail?: {
    sections: Array<{
      title: string;
      content: string;
    }>;
    summary?: string;
  };
  pricing_detail?: {
    tiers: Array<{
      name: string;
      price: string;
      description: string;
    }>;
    summary?: string;
  };
  developer_info?: string;
  category?: string;
  tags?: string[];
  rating_detail?: {
    speed_explanation?: string;
    quality_explanation?: string;
    cost_explanation?: string;
  };
}
export interface UseCaseRecommendation {
  model_id: string;
  reason: string;
}
export interface UseCaseEvaluationCriterion {
  title: string;
  description: string;
}
export interface UseCaseFAQ {
  question: string;
  answer: string;
}
export interface UseCase {
  slug: string;
  title: string;
  description: string;
  icon: keyof typeof import("lucide-react");
  overview: string;
  recommendations: {
    premium: UseCaseRecommendation;
    balanced: UseCaseRecommendation;
    budget: UseCaseRecommendation;
  };
  evaluation_criteria: UseCaseEvaluationCriterion[];
  faq: UseCaseFAQ[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  featured: boolean;
  readTime: number;
}