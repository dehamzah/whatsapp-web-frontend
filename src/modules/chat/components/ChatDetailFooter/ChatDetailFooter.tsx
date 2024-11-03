import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MicIcon, SmileIcon, Plus as PlusIcon } from "lucide-react";

// todo: move out the absolute position

export const ChatDetailFooter = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-14">
      <div className="flex bg-slate-100 p-2">
        <Button variant="link" className="px-3 py-2">
          <SmileIcon />
        </Button>
        <Button variant="link" className="px-3 py-2">
          <PlusIcon />
        </Button>
        <Input className="grow" type="text" placeholder="Type a message" />
        <Button variant="link" className="px-3 py-2">
          <MicIcon />
        </Button>
      </div>
    </div>
  );
};
