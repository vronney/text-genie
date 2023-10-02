import { v1beta2 } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";
import { config } from "dotenv";
import process from "process";

config();

const { TextServiceClient } = v1beta2;

const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.API_KEY;

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

export default async (req, res) => {
  if (req.method === "POST") {
    const prompt = req.body.prompt;

    try {
      const result = await client.generateText({
        model: MODEL_NAME,
        prompt: {
          text: prompt,
        },
      });
      const answer = result[0].candidates[0].output;
      res.status(200).json(answer);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
};
