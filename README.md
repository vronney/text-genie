# Text Genie

Text Genie is a web application that allows you to generate text based on your prompts. It utilizes [Vite](https://vitejs.dev/) for fast development and [React](https://reactjs.org/) for the frontend. The app is deployed on [Vercel](https://vercel.com).

## PaLM API

This project uses the [PaLM API](https://developers.generativeai.google/guide/palm_api_overview) for generating text. The PaLM API is a powerful language model API by Google Generative AI that can be used to generate high-quality content based on prompts.

### API Key Setup

To use this project, you'll need to get your own API key from [Google Generative AI](https://developers.generativeai.google/tutorials/setup).

1. Visit the [API setup tutorial](https://developers.generativeai.google/tutorials/setup) and follow the instructions to obtain your API key.
   
2. Once you have the API key, create a `.env` file in the root directory of the project and add the following:

    ```
    API_KEY=<Your Key Here>
    ```

Replace `<Your Key Here>` with your actual API key.

## Live Demo

Check out the live demo [here](https://text-genie.vercel.app/).

## Technologies Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)

## Features

- Generate text based on user prompts.
- Serverless backend.
- Markdown and HTML sanitization.

## Local Development

### Prerequisites

- Node.js
- npm

### Setup

1. Clone the repository.
    ```bash
    git clone https://github.com/vronney/text-genie
    ```

2. Install dependencies.
    ```bash
    npm install
    ```

3. Run the development server.
    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Deployment

The project is deployed on Vercel. You can deploy your own version by clicking the deploy button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
