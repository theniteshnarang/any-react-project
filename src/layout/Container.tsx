import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return <div className="container mx-auto py-4 h-screen">{children}</div>;
};

export default Container;
