import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  await openai.responses
    .create({
      model: model,
      input: prompt,
    })
    .then((response) => {
      console.log(response.output_text);
      console.log("Full response object:", response);
      return response.output_text;
    })
    .catch((error) => {
      console.error("Error querying OpenAI:", error);
      throw error;
    });
};

export default query;
