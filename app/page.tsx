import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MainPage() {
  return (
    <>
      <div className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href="/"
            className="bg-muted rounded-2xl px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow me on Twitter
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            I was just bored on a weekend and decided to make this.
          </h1>
          <p className="text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
            I like building web apps with Next.js 14 and open sourcing
            everything. Except my .env file 😎 <br />
            Follow along as we figure this out together.
          </p>
          <Link href="/conversation">
            <Button className="font-Medium mt-6 text-xl" size="lg">
              Where is this Chat-bot?
            </Button>
          </Link>
        </div>
        <footer className="bottom-0 mb-2 mt-6 text-center text-sm text-purple-500">
          ©2024 Created by Glen Miracle. All rights reserved.
        </footer>
      </div>
    </>
  );
}
