import { NextApiRequest, NextApiResponse } from "next";
import openai from "@/lib/chatgpt";

type Option = {
  value: string;
  label: string;
};

type Data = {
  modelOptions: Option[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { error: string }>
) {
  try {
    const models = await openai.models.list().then((res) => res.data);

    const modelOptions = models.map((model) => ({
      value: model.id,
      label: model.id,
    }));

    res.status(200).json({ modelOptions });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Failed to fetch models";
    console.error("DETAILED ERROR IN getEngines:", error);
    res.status(500).json({ error: errorMessage });
  }
}
