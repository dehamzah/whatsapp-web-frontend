import { ScrollArea } from "@/components/ui/scroll-area";
import ChatBubble from "../ChatBubble";
import ChatDetailHeader from "../ChatDetailHeader";
import ChatDetailFooter from "../ChatDetailFooter";

export const ChatDetailContainer = () => {
  return (
    <div className="relative h-full">
      <ChatDetailHeader />

      <div className="pt-16">
        {/* note: h-[calc(100vh-9.5rem)] -> minus 9.5rem is from:
        WindowContainer padding top 1rem + WindowContainer padding bottom 1rem + 
        ChatDetailHeader 4rem + ChatDetailFooter 3.5rem.
        The ScrollArea height need to defined fixed height.
        todo: find out later to not calculate the height manually.  */}
        <ScrollArea className="h-[calc(100vh-9.5rem)]">
          <div className="flex flex-col gap-1 px-8 pb-6 pt-6">
            <ChatBubble
              variant="receiver"
              messageText="Halo"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="sender"
              messageText="Hai"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="receiver"
              messageText="Apa kabar?"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="sender"
              messageText="baik"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="receiver"
              messageText="Halo"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="sender"
              messageText="Hai"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="receiver"
              messageText="Apa kabar?"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="sender"
              messageText="baik"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="receiver"
              messageText="Halo"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="sender"
              messageText="Hai"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="receiver"
              messageText="Apa kabar?"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="sender"
              messageText="baik"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="receiver"
              messageText="Halo"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="sender"
              messageText="Hai"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="receiver"
              messageText="Apa kabar?"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="sender"
              messageText="baik"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="receiver"
              messageText="Halo"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="sender"
              messageText="Hai"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="receiver"
              messageText="Apa kabar?"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="sender"
              messageText="baik"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="receiver"
              messageText="Halo"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="sender"
              messageText="Hai"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="receiver"
              messageText="Apa kabar?"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="sender"
              messageText="baik"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="receiver"
              messageText="Halo"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="sender"
              messageText="Hai"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="receiver"
              messageText="Apa kabar?"
              messageSentAt={new Date().toISOString()}
            />
            <ChatBubble
              variant="sender"
              messageText="baik"
              messageSentAt={new Date().toISOString()}
            />

            {/* todo: example component for horizontal scroll messages */}
            {/* <div className="max-w-full">
            <div className="flex snap-x snap-mandatory gap-1 overflow-x-auto">
              <div className="w-80 flex-none shrink-0 snap-center"></div>
              <Card className="w-80 flex-none snap-center bg-green-200 px-3 py-2">
                <div>
                  <img
                    className="h-32 w-72"
                    src="https://picsum.photos/300/200"
                    alt="image"
                  />
                  <span className="text-md">Vertical hello</span>
                </div>
                <div className="text-right text-xs">21:20</div>
              </Card>
              <Card className="w-80 flex-none snap-center bg-green-200 px-3 py-2">
                <div>
                  <img
                    className="h-32 w-72"
                    src="https://picsum.photos/300/200"
                    alt="image"
                  />
                  <span className="text-md">Vertical hello</span>
                </div>
                <div className="text-right text-xs">21:20</div>
              </Card>
              <Card className="w-80 flex-none snap-center bg-green-200 px-3 py-2">
                <div>
                  <img
                    className="h-32 w-72"
                    src="https://picsum.photos/300/200"
                    alt="image"
                  />
                  <span className="text-md">Vertical hello</span>
                </div>
                <div className="text-right text-xs">21:20</div>
              </Card>
            </div>
          </div> */}
          </div>
        </ScrollArea>
      </div>

      <ChatDetailFooter />
    </div>
  );
};
