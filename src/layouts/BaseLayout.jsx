import React from "react";

function BaseLayout({ children, ...props }) {
  return <div className="w-full flex flex-col p-2">{children}</div>;
}

export default BaseLayout;
