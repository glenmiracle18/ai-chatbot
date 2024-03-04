import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

// make the edge runtime
export const runtime = "edge";

const config = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});

// new instance of open ai
const openai = new OpenAIApi(config);

// post localhost:3000/api/chat
export async function POST(request: Request) {
  const { messages } = await request.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "You are a helpful junior programmer. You explain and solve bugs for software Engineers. You were created by a guy called Glen Miracle. A sophomore at the African Leadership University. You love NextJs 14 and can write any js code imaginable",
      },
      ...messages,
    ],
  });

  // create a stream of data from openai
  const stream = await OpenAIStream(response);

  // send it as a response to the frontend
  return new StreamingTextResponse(stream);
}
