"use client";

import Chat from "@/components/chat";
const Conversation = () => {
  return (
    <>
      <div className="">
        <div className="flex h-full flex-col items-center justify-center bg-slate-50 p-4">
          <div className="space-y-1">
            <h1 className="relative z-20 bg-gradient-to-r from-green-400 to-purple-300 bg-clip-text py-4 font-bold text-transparent sm:text-2xl md:text-6xl">
              Start Chatting with AI
            </h1>
            <p className="flex items-center justify-start p-2 text-xl text-gray-500 dark:text-gray-400">
              Online
              <span className="ml-2 inline-block h-2 w-2 rounded-full bg-green-500" />
            </p>
          </div>
          <div className="">
            <div className="ax-w-4xl mx-auto my-8 mb-4 overflow-y-auto rounded-lg bg-white p-6 shadow-md">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversation;
