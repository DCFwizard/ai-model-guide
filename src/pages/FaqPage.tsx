import { SEO } from '@/components/SEO';
import { StaticPageLayout } from './StaticPagesLayout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const faqs = [
  {
    question: "What is an AI model or LLM?",
    answer: "An AI model, specifically a Large Language Model (LLM), is a deep learning algorithm trained on vast amounts of text data. It can understand, generate, summarize, and translate human language, making it useful for a wide range of tasks like writing emails, answering questions, and generating code."
  },
  {
    question: "What is a 'context window'?",
    answer: "The context window is the amount of text (measured in tokens) that a model can consider at one time. A larger context window allows the model to process longer documents, maintain longer conversations, and understand more complex instructions without losing track of the details."
  },
  {
    question: "What does 'open-weight' mean?",
    answer: "An 'open-weight' (often called 'open-source') model is one whose underlying parameters, or 'weights,' are publicly released. This allows anyone to download, modify, and run the model on their own hardware, offering greater control, privacy, and customization compared to closed models accessed via an API."
  },
  {
    question: "What is RAG (Retrieval-Augmented Generation)?",
    answer: "RAG is a technique that combines a pre-trained LLM with an external knowledge base. When a query is made, the system first retrieves relevant information from the knowledge base and then provides it to the LLM as context to generate a more accurate and up-to-date answer. It's a powerful way to reduce hallucinations and use proprietary data."
  },
  {
    question: "How do I choose between a commercial API and a self-hosted open-weight model?",
    answer: "Choose a commercial API (like from OpenAI or Anthropic) for ease of use, scalability, and access to the most powerful models without infrastructure overhead. Choose a self-hosted open-weight model (like Llama 3 or Mistral) for maximum control, data privacy, customization through fine-tuning, and potentially lower long-term costs if you have the technical expertise."
  },
];
export function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return (
    <>
      <SEO
        title="FAQ"
        description="Find answers to common questions about AI models, terminology, and how to use this guide."
      >
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </SEO>
      <StaticPageLayout title="Frequently Asked Questions">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </StaticPageLayout>
    </>
  );
}