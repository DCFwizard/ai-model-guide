# AI Model Guide

A fast, simple, and SEO-optimized guide to help you choose the right AI model for any task, featuring comparisons, use cases, and an interactive model picker.

[cloudflarebutton]

## About The Project

AI Model Guide is a visually stunning, minimalist, and SEO-optimized static website designed to help developers, researchers, and product managers choose the most suitable AI model for their specific tasks. The application provides a clear, vendor-neutral comparison of popular AI models like GPT-4, Claude 3, Llama 3, and others.

The entire experience is built to be extremely fast, fully responsive, and accessible, prioritizing a clean user interface and high-quality, practical information. The site's content is driven by structured JSON data, making it easy to update and expand.

### Key Features

*   **Interactive Model Picker:** Get quick, tailored model recommendations based on your task requirements.
*   **Comprehensive Model Database:** A filterable gallery of AI models with key information at a glance.
*   **Detailed Use-Case Guides:** In-depth pages for specific tasks like summarization, code generation, and RAG.
*   **Side-by-Side Comparisons:** Easily compare the strengths, weaknesses, and specifications of different models.
*   **SEO Optimized:** Built with best practices, including dynamic metadata and JSON-LD schemas for rich search results.
*   **Minimalist & Responsive Design:** A clean, fast, and beautiful interface that works flawlessly on any device.
*   **Data-Driven Content:** Easily update and expand the site's content by editing simple JSON files.

## Technology Stack

This project is built with a modern, performance-focused tech stack:

*   **Framework:** [React](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Routing:** [React Router](https://reactrouter.com/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Schema Validation:** [Zod](https://zod.dev/)
*   **Deployment:** [Cloudflare Workers](https://workers.cloudflare.com/)

## Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

You need to have [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/ai-model-guide.git
    cd ai-model-guide
    ```

2.  **Install dependencies:**
    ```sh
    bun install
    ```

3.  **Run the development server:**
    ```sh
    bun run dev
    ```

The application will be available at `http://localhost:3000`.

## Usage

The application is designed to be intuitive. Navigate through the header to explore models and use cases. The homepage features an interactive "Model Picker" to guide your selection process.

### Adding Content

This project is designed to be easily extensible. To add or update content, simply edit the JSON files in the `/src/data` directory.

*   **To add a new model:** Add a new JSON object to `src/data/models.json`.
*   **To add a new use case:** Add a new JSON object to `src/data/use-cases.json`.

The application will automatically generate the necessary pages and update the UI based on your changes.

## Available Scripts

In the project directory, you can run:

*   `bun run dev`: Runs the app in development mode.
*   `bun run build`: Builds the app for production.
*   `bun run lint`: Lints the codebase using ESLint.
*   `bun run deploy`: Builds and deploys the application to Cloudflare.

## Deployment

This project is optimized for deployment on the Cloudflare network.

To deploy your own version, you can use the "Deploy with Cloudflare" button or run the deploy script.

[cloudflarebutton]

### Manual Deployment

1.  **Build the project:**
    ```sh
    bun run build
    ```

2.  **Deploy using Wrangler:**
    Ensure you have [Wrangler](https://developers.cloudflare.com/workers/wrangler/get-started/) installed and configured.
    ```sh
    bun run deploy
    ```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.