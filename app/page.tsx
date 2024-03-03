import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MainPage() {
  return (
    <>
      <div className="m-4 flex h-screen w-full items-center justify-center bg-slate-100">
        <Link href="/conversation">
          <Button className="font-Medium text-xl" size="lg">
            Where is this Chat-bot?
          </Button>
        </Link>
      </div>
    </>
  );
}
