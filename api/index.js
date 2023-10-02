import { config } from "dotenv";
config();

import express from "express";
const app = express();

import process from "process";

import pkg from "body-parser";
const { json } = pkg;

app.use(json());

import { v1beta2 } from "@google-ai/generativelanguage";
const { TextServiceClient } = v1beta2;

import { GoogleAuth } from "google-auth-library";

const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.API_KEY;

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

let answer = null;

let prompt = null;

app.post("/api", (req, res) => {
  prompt = req.body.prompt;

  client
    .generateText({
      model: MODEL_NAME,
      prompt: {
        text: prompt,
      },
    })
    .then((result) => {
      answer = result[0].candidates[0].output;
      res.json(answer);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

export default app;
