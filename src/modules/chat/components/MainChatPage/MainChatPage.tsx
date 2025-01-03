import ChatListContainer from "../ChatListContainer";
import ChatDetailContainer from "../ChatDetailContainer";

export const MainChatPage = () => {
  return (
    <div className="relative flex">
      <div className="w-2/6 bg-white">
        <ChatListContainer />
      </div>
      <div className="w-4/6 bg-stone-200">
        <ChatDetailContainer />
      </div>
    </div>
  );
};
