export const ChatListItem = () => {
  return (
    <div className="flex px-4">
      <img
        className="w-11 self-center rounded-full"
        src="https://avatar.iran.liara.run/public"
        alt="person name"
      />
      <div className="ml-4 flex grow border-b py-3">
        <div className="grow">
          <h6 className="font-medium">Fulan Fulana</h6>
          <p className="font-light">Halo apa kabar?</p>
        </div>
        <div className="flex flex-col items-end">
          <span className="mb-1 text-xs">Yesterday</span>
          <span className="rounded-full bg-green-400 px-1 text-xs text-white">
            3
          </span>
        </div>
      </div>
    </div>
  );
};
