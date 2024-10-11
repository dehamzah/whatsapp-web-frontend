import * as React from "react";
import { cva } from "class-variance-authority";
import { toCalendarTime } from "@/modules/core/utils/time";
import { cn } from "@/lib/utils";
// import clsx from "clsx";

const chatBubbleVariants = cva(
  "rounded-md border bg-white px-2 py-1 shadow-sm max-w-xs grow-0",
  {
    variants: {
      variant: {
        sender: "bg-green-200 self-end",
        receiver: "bg-white self-start",
      },
    },
    defaultVariants: {
      variant: "sender",
    },
  },
);

export type ChatBubbleProps = {
  /** bubble style for sender and receiver */
  variant: "sender" | "receiver";
  /** display caret in bubble for first message sent by the user */
  displayCaret?: boolean;
  /** the sender name used to display on top of the message bubble */
  senderName?: string;
  /** the sender phone number for fallback if sender name is not available */
  senderPhoneNumber?: string;
  /** the sender profile picture url image if any */
  senderProfilePicture?: string;
  /** the message text content  */
  messageText: string;
  /**  when the message sent in utc string timestamp format */
  messageSentAt: string;
} & React.HTMLAttributes<HTMLDivElement>;
// & VariantProps<typeof chatBubbleVariants>; // note: even though this will add the props of variants, but we can't annotate the props description for storybook.

// Chat Bubble UI used in chat conversation
export const ChatBubble = ({
  variant = "sender",
  senderName,
  messageText,
  messageSentAt,
  className,
}: ChatBubbleProps) => {
  // other example of using clsx only, without cva
  // const classes = clsx(
  //   "rounded-md border bg-white px-2 py-1 shadow-sm max-w-xs grow-0",
  //   {
  //     "bg-green-200 self-end": variant === "sender",
  //     "bg-white self-start": variant === "receiver",
  //   },
  //   className,
  // );
  // console.log(`additional class ${variant}:`, classes);

  return (
    <div className={cn(chatBubbleVariants({ variant, className }))}>
      <div className="flex flex-row">
        {senderName && <h6>{senderName}</h6>}
        <span className="text-sm">{messageText}</span>

        {messageSentAt && (
          <span className="mt-2 self-end pl-2 text-[10px] text-slate-500">
            {toCalendarTime(messageSentAt)}
          </span>
        )}
      </div>
    </div>
  );
};
