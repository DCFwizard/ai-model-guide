import { LucideIcon } from "lucide-react";
export type Modality = "text" | "vision" | "speech";
export type ContextWindow = "small" | "medium" | "long";
export type CostTier = "$" | "$$" | "$$$";
export interface AIModel {
  id: string;
  name: string;
  provider: string;
  description: string;
  modalities: Modality[];
  context_window: ContextWindow;
  strengths: string[];
  best_for: string[];
  cost_tier: CostTier;
  open_weight: boolean;
  links: {
    site: string;
    docs: string;
    pricing: string;
  };
}
export interface UseCase {
  slug: string;
  title: string;
  description: string;
  icon: keyof typeof import("lucide-react");
}