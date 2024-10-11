import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";

import { ChatBubble } from "./ChatBubble";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Chat/ChatBubble",
  component: ChatBubble,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  //     argTypes: {

  //     backgroundColor: { control: "variant" },
  //   },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //   args: { onClick: fn() },
} satisfies Meta<typeof ChatBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Sender: Story = {
  args: {
    variant: "sender",
    messageText: "Hello!",
    messageSentAt: new Date().toISOString(),
  },
};

export const Receiver: Story = {
  args: {
    variant: "receiver",
    messageText: "Hi!",
    messageSentAt: new Date().toISOString(),
  },
};
