import * as React from "react";

type WindowContainerProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const WindowContainer = ({ children }: WindowContainerProps) => {
  return (
    <div className="relative h-screen bg-slate-300">
      <div className="h-28 bg-emerald-600"></div>
      <div className="absolute bottom-4 left-4 right-4 top-4 shadow-sm">
        {children}
      </div>
    </div>
  );
};
