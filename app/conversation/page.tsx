"use client"

import Chat from "@/components/chat";
const Conversation = () => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center p-4 bg-slate-100">
        <div className="space-y-1">
          <h1 className="relative z-20 bg-gradient-to-r from-green-400 to-purple-300 bg-clip-text py-8 font-bold text-transparent sm:text-2xl md:text-4xl">
            Start Chatting with AI
          </h1>
          <p className="flex justify-start p-2 text-xl text-gray-500 dark:text-gray-400">
            Online
            <span className="ml-2 inline-block h-2 w-2 rounded-full bg-green-500" />
          </p>
        </div>
        <div className="">
          <div className="ax-w-4xl mx-auto my-8 mb-4 rounded-lg bg-white p-6 shadow-md">
            {/* <PromptForm /> */}
            <Chat />
            {/* <ChatInput /> */}
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Conversation;
