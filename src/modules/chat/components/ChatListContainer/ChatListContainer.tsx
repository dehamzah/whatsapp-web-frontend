import ChatListItem from "../ChatListItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatListHeader from "../ChatListHeader";

const chats = Array.from(Array(45).keys());

export const ChatListContainer = () => {
  return (
    <div className="relative flex flex-col">
      <ChatListHeader />

      {/* todo: calculate the header height later */}
      <ScrollArea className="h-dvh pt-20">
        {chats.map((_) => {
          return <ChatListItem />;
        })}
      </ScrollArea>
    </div>
  );
};
