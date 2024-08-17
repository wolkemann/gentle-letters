import { ReactNode } from "react";

type LandingPageCardProps = {
  title: string;
  backgroundColor: string;
  children: ReactNode;
};

export default function LandingPageCard({
  title,
  backgroundColor,
  children,
}: LandingPageCardProps) {
  return (
    <div
      key={title}
      className={`flex flex-col items-center justify-center flex-wrap p-5 text-sm w-full h-screen border ${backgroundColor} border-window-border-color lg:text-base`}
    >
      <h2 className="font-bold mb-5">{title}</h2>
      {children}
    </div>
  );
}
