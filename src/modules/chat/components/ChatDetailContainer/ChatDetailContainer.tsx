import React from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import ChatBubble from "../ChatBubble";
import ChatDetailHeader from "../ChatDetailHeader";
import ChatDetailFooter from "../ChatDetailFooter";

export const ChatDetailContainer = () => {
  return (
    <div className="relative">
      <ChatDetailHeader />

      <ScrollArea>
        <div className="flex h-svh flex-col gap-1 px-8 pb-8 pt-20">
          <Card className="max-w-xs self-start px-3 py-2">
            <div>
              <span className="text-md">Halo halo</span>
            </div>
            <div className="text-right text-xs">21:20</div>
          </Card>

          <div className="max-w-full">
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

            <ChatBubble />
            <ChatBubble />
            <ChatBubble />
          </div>
        </div>
      </ScrollArea>

      <ChatDetailFooter />
    </div>
  );
};
