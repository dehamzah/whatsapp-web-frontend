import ChatListItem from "../ChatListItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatListHeader from "../ChatListHeader";

const chats = Array.from(Array(45).keys());

export const ChatListContainer = () => {
  return (
    <div className="relative flex flex-col">
      <ChatListHeader />

      {/* note: h-[calc(100vh-6rem)] -> minus 6rem is from:
      WindowContainer padding top 1rem + WindowContainer padding bottom 1rem 
      + ChatListHeader height 4rem.
      The ScrollArea height need to defined fixed height.
      todo: find out later to not calculate the height manually. */}
      <ScrollArea className="mt-16 h-[calc(100vh-6rem)]">
        {chats.map((_) => {
          return <ChatListItem />;
        })}
      </ScrollArea>
    </div>
  );
};
