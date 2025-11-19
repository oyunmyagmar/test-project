import { Footer } from "./Footer";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex flex-col">
        {children}
        <Footer />
      </div>
    </>
  );
}
