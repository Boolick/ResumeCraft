import React from "react";

export default function Main(props: {
  children?: React.ReactNode;
  className: string;
}) {
  const { children } = props;
  return <main className="flex-1">{children}</main>;
}
