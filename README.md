<div align="left" style="display: flex; align-items: center; margin-bottom: 24px;">
  <img src="public/logo-leaf.svg" alt="RationalGPT Logo" width="48" height="48" style="margin: 0;">
  <h1 style="margin: 0; padding: 0; border: 0;">RationalGPT</h1>
</div>

RationalGPT is an AI-powered chat application built with Next.js 15 & the Vercel AI SDK.

## Quick Start

1. Clone the repo

2. Install dependencies : `npm i`

3. Create a `.env.local` file in the root directory and add your OpenAI API key

   - `OPENAI_API_KEY=your_api_key_here`

4. Run the dev server : `npm run dev`

5. Open the app : [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

To change the AI model, update the `model` parameter in `app/api/chat/route.ts`.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.
