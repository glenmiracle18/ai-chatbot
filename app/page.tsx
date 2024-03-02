import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MainPage() {
  return (
    <>
      <div className="m-4 flex h-full h-screen w-full items-center justify-center bg-white">
        <Link href="/conversation">
          <Button className="font-Medium text-xl" size="lg">
            Where is this Chat-bot?
          </Button>
        </Link>
      </div>
    </>
  );
}
