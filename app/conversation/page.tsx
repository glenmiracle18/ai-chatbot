import { PromptForm } from "@/components/prompt-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const Conversation = () => {
  const handleSubmit = () => {};
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center p-4">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold leading-none">
            Start Chatting with AI
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400">
            Online
            <span className="ml-2 inline-block h-2 w-2 rounded-full bg-green-500" />
          </p>
        </div>
        <div className="rounder-md m-6 flex w-[400px] flex-col justify-end rounded border border-gray-200 p-4 p-8">
          <div className="flex justify-start">Hello there</div>
          <div className="flex justify-end">Hello Boy</div>
        </div>

        <div className="mt-4 flex w-[400px] items-center space-x-4">
          <PromptForm />
        </div>
      </div>
    </>
  );
};

export default Conversation;
