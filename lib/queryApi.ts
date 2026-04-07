import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const response = await openai.chat.completions
    .create({
      model: model,
      messages: [{ role: "user", content: prompt }],
    })
    .then((res) => res.choices[0].message.content)
    .catch((error) => {
      console.error("ChatGPT was unable to answer to that query:", error);
      throw error;
    });
  return response;
};

export default query;
