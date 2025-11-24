import { UseCase } from '@/types';

// Import Summarization use case
import summarizationIndex from './use-cases/summarization/index.json';
import summarizationOverview from './use-cases/summarization/overview.md?raw';
import summarizationRecommendations from './use-cases/summarization/recommendations.json';
import summarizationEvaluationCriteria from './use-cases/summarization/evaluation-criteria.json';
import summarizationFaq from './use-cases/summarization/faq.json';

// Import RAG use case
import ragIndex from './use-cases/rag/index.json';
import ragOverview from './use-cases/rag/overview.md?raw';
import ragRecommendations from './use-cases/rag/recommendations.json';
import ragEvaluationCriteria from './use-cases/rag/evaluation-criteria.json';
import ragFaq from './use-cases/rag/faq.json';

// Import Coding Assistance use case
import codingAssistanceIndex from './use-cases/coding-assistance/index.json';
import codingAssistanceOverview from './use-cases/coding-assistance/overview.md?raw';
import codingAssistanceRecommendations from './use-cases/coding-assistance/recommendations.json';
import codingAssistanceEvaluationCriteria from './use-cases/coding-assistance/evaluation-criteria.json';
import codingAssistanceFaq from './use-cases/coding-assistance/faq.json';

// Import Text Generation use case
import textGenerationIndex from './use-cases/text-generation/index.json';
import textGenerationOverview from './use-cases/text-generation/overview.md?raw';
import textGenerationRecommendations from './use-cases/text-generation/recommendations.json';
import textGenerationEvaluationCriteria from './use-cases/text-generation/evaluation-criteria.json';
import textGenerationFaq from './use-cases/text-generation/faq.json';

// Import Vision use case
import visionIndex from './use-cases/vision/index.json';
import visionOverview from './use-cases/vision/overview.md?raw';
import visionRecommendations from './use-cases/vision/recommendations.json';
import visionEvaluationCriteria from './use-cases/vision/evaluation-criteria.json';
import visionFaq from './use-cases/vision/faq.json';

// Import Agents use case
import agentsIndex from './use-cases/agents/index.json';
import agentsOverview from './use-cases/agents/overview.md?raw';
import agentsRecommendations from './use-cases/agents/recommendations.json';
import agentsEvaluationCriteria from './use-cases/agents/evaluation-criteria.json';
import agentsFaq from './use-cases/agents/faq.json';

// Combine Summarization data
const summarizationUseCase: UseCase = {
  ...summarizationIndex,
  overview: summarizationOverview.trim(),
  recommendations: summarizationRecommendations,
  evaluation_criteria: summarizationEvaluationCriteria,
  faq: summarizationFaq,
} as UseCase;

// Combine RAG data
const ragUseCase: UseCase = {
  ...ragIndex,
  overview: ragOverview.trim(),
  recommendations: ragRecommendations,
  evaluation_criteria: ragEvaluationCriteria,
  faq: ragFaq,
} as UseCase;

// Combine Coding Assistance data
const codingAssistanceUseCase: UseCase = {
  ...codingAssistanceIndex,
  overview: codingAssistanceOverview.trim(),
  recommendations: codingAssistanceRecommendations,
  evaluation_criteria: codingAssistanceEvaluationCriteria,
  faq: codingAssistanceFaq,
} as UseCase;

// Combine Text Generation data
const textGenerationUseCase: UseCase = {
  ...textGenerationIndex,
  overview: textGenerationOverview.trim(),
  recommendations: textGenerationRecommendations,
  evaluation_criteria: textGenerationEvaluationCriteria,
  faq: textGenerationFaq,
} as UseCase;

// Combine Vision data
const visionUseCase: UseCase = {
  ...visionIndex,
  overview: visionOverview.trim(),
  recommendations: visionRecommendations,
  evaluation_criteria: visionEvaluationCriteria,
  faq: visionFaq,
} as UseCase;

// Combine Agents data
const agentsUseCase: UseCase = {
  ...agentsIndex,
  overview: agentsOverview.trim(),
  recommendations: agentsRecommendations,
  evaluation_criteria: agentsEvaluationCriteria,
  faq: agentsFaq,
} as UseCase;

// Export all use cases as an array
export const useCases: UseCase[] = [
  summarizationUseCase,
  ragUseCase,
  codingAssistanceUseCase,
  textGenerationUseCase,
  visionUseCase,
  agentsUseCase,
];

export default useCases;
