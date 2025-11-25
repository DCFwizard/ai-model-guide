import { BlogPost } from '@/types';

// Import Claude Opus 4.5 blog post
import claudeOpus45Index from './blog-posts/claude-opus-4-5-ai-coding-reasoning-autonomy/index.json';
import claudeOpus45Content from './blog-posts/claude-opus-4-5-ai-coding-reasoning-autonomy/content.md?raw';

// Import Gemini 3 Pro blog post
import gemini3ProIndex from './blog-posts/gemini-3-pro-benchmark-ai-performance/index.json';
import gemini3ProContent from './blog-posts/gemini-3-pro-benchmark-ai-performance/content.md?raw';

// Import Manus Browser Operator blog post
import manusBrowserIndex from './blog-posts/manus-browser-operator-local-automation/index.json';
import manusBrowserContent from './blog-posts/manus-browser-operator-local-automation/content.md?raw';

// Import Gemini Web YouTube blog post
import geminiYoutubeIndex from './blog-posts/gemini-web-youtube-summarization-workflow/index.json';
import geminiYoutubeContent from './blog-posts/gemini-web-youtube-summarization-workflow/content.md?raw';

// Import GPT 5.1 blog post
import gpt51Index from './blog-posts/gpt-5-1-chatgpt-smarter-warmer-personalized/index.json';
import gpt51Content from './blog-posts/gpt-5-1-chatgpt-smarter-warmer-personalized/content.md?raw';

// Import Kimi K2 Thinking blog post
import kimiK2Index from './blog-posts/kimi-k2-thinking-moonshot-ai-reasoning-powerhouse/index.json';
import kimiK2Content from './blog-posts/kimi-k2-thinking-moonshot-ai-reasoning-powerhouse/content.md?raw';

// Import Monthly Update blog post
import monthlyUpdateIndex from './blog-posts/monthly-update-ai-models-october-2025/index.json';
import monthlyUpdateContent from './blog-posts/monthly-update-ai-models-october-2025/content.md?raw';

// Combine index.json with content.md for each blog post
const claudeOpus45Post: BlogPost = {
  ...claudeOpus45Index,
  content: claudeOpus45Content.trim(),
} as BlogPost;

const gemini3ProPost: BlogPost = {
  ...gemini3ProIndex,
  content: gemini3ProContent.trim(),
} as BlogPost;

const manusBrowserPost: BlogPost = {
  ...manusBrowserIndex,
  content: manusBrowserContent.trim(),
} as BlogPost;

const geminiYoutubePost: BlogPost = {
  ...geminiYoutubeIndex,
  content: geminiYoutubeContent.trim(),
} as BlogPost;

const gpt51Post: BlogPost = {
  ...gpt51Index,
  content: gpt51Content.trim(),
} as BlogPost;

const kimiK2Post: BlogPost = {
  ...kimiK2Index,
  content: kimiK2Content.trim(),
} as BlogPost;

const monthlyUpdatePost: BlogPost = {
  ...monthlyUpdateIndex,
  content: monthlyUpdateContent.trim(),
} as BlogPost;

// Export all blog posts as an array
export const blogPosts: BlogPost[] = [
  claudeOpus45Post,
  gemini3ProPost,
  manusBrowserPost,
  geminiYoutubePost,
  gpt51Post,
  kimiK2Post,
  monthlyUpdatePost,
];

export default blogPosts;
