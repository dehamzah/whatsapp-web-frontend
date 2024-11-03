import { Button } from "@/components/ui/button";
import { EllipsisVerticalIcon, MessageSquarePlusIcon } from "lucide-react";

// todo: move out the absolute position

export const ChatListHeader = () => {
  return (
    <header className="absolute left-0 right-0 top-0 z-10 flex h-16 bg-white p-4">
      <h1 className="grow self-center text-lg font-bold">Chats</h1>
      <Button variant="link" className="rounded-full">
        <MessageSquarePlusIcon />
      </Button>
      <Button variant="link" className="rounded-full">
        <EllipsisVerticalIcon />
      </Button>
    </header>
  );
};
