import React from "react";
import { EllipsisVertical, SearchIcon, VideoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// todo: move out the absolute positioning

export const ChatDetailHeader = () => {
  return (
    <div className="absolute left-0 right-0 top-0 z-10 flex items-center bg-slate-100 p-4">
      <img
        className="h-9 w-9 rounded-full"
        src="https://avatar.iran.liara.run/public"
        alt="profile picture"
      />
      <h2 className="text-md grow pl-3">Fahmi Syahida</h2>
      <div>
        <Button variant="link">
          <VideoIcon />
        </Button>
        <Button variant="link">
          <SearchIcon />
        </Button>
        <Button variant="link">
          <EllipsisVertical />
        </Button>
      </div>
    </div>
  );
};
