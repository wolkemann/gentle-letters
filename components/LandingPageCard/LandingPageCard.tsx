type LandingPageCardProps = {
  title: string;
  backgroundColor: string;
  children: JSX.Element[];
};

export default function LandingPageCard({
  title,
  backgroundColor,
  children,
}: LandingPageCardProps) {
  return (
    <div
      className={`p-5 text-sm w-full border rounded bg-${backgroundColor} border-window-border-color lg:text-base`}
    >
      <h2 className="font-bold mb-5">{title}</h2>
      {children}
    </div>
  );
}
