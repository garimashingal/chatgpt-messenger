import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const response = await openai.responses
    .create({
      model: model,
      input: prompt,
    })
    .then((response) => response.output_text)
    .catch((error) => {
      console.error("ChatGPT was unable to answer to that query:", error);
      throw error;
    });
  return response;
};

export default query;
