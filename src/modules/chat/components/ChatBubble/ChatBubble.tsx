import React from "react";
import { Card } from "@/components/ui/card";

export const ChatBubble = () => {
  return (
    <Card className="max-w-xs self-start px-3 py-2">
      <div>
        <span className="text-md">Halo halo</span>
      </div>
      <div className="text-right text-xs">21:20</div>
    </Card>
  );
};
