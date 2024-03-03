"use client";

import { useChat } from "ai/react";
import { BotMessageSquare } from "lucide-react";
import { User } from "lucide-react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, data } = useChat();

  return (
    <div className="mt-6 p-4">
      <header className="text-center">
        <h1 className="text-xl">Chat Example</h1>
      </header>
      <div className="stretch mx-auto flex w-full max-w-md flex-col justify-between">
        <div className="flex-grow overflow-y-auto">
          {messages.map((m) => (
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === "user" ? (
                <div className="mt-4 space-y-4">
                  <div className="flex justify-end">
                    <div className="max-w-xs rounded-lg bg-blue-100 p-3">
                      <User className="flex h-8 w-8 justify-end text-blue-300" />
                      <p className="pt-2 text-sm text-blue-800">{m.content}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-4 flex justify-start">
                  <div className="max-w-xs rounded-lg bg-green-100 p-3">
                    <BotMessageSquare className="flex h-8 w-8 justify-start text-purple-300" />
                    <p className="pt-2 text-sm text-green-800">{m.content}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="mt-6 w-full rounded-md border-gray-300 p-3 shadow-sm"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
      <footer className="mt-4 text-center text-sm text-gray-500">
        © 2024 Created by Glen Miracle. All rights reserved.
      </footer>
    </div>
  );
}
