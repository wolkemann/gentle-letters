import {
  MessageSquareReply,
  PencilLine,
  Sticker,
  Archive,
  Heart,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { useMemo } from "react";

export async function BentoDemo() {
  const features = useMemo(
    () => [
      {
        Icon: PencilLine,
        name: "Write a Letter",
        description:
          "Share your thoughts with another user and wait for a reply!",
        href: "/dashboard/write",
        cta: "Start",
        background: "",
        className:
          "border border-button-border-color box-shadow bg-window-innerbg-color lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-2",
      },
      {
        Icon: MessageSquareReply,
        name: "Write a Reply letter",
        description:
          "Did you received a Letter? Then it's time to write a beautiful reply!",
        href: "/dashboard/inbox",
        cta: "Go to your Inbox",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className:
          "border border-button-border-color bg-window-innerbg-color lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
      },
      {
        Icon: Sticker,
        name: "Stickers collection",
        description: "Check how many rewards did you gained.",
        href: "/",
        cta: "Learn more",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className:
          "border border-button-border-color bg-window-innerbg-color lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
      },
      {
        Icon: Archive,
        name: "Check your archive",
        description:
          "Check your past correspondance. Look at your previous Letters, Replies and the reward that you earned or gave from that discussion.",
        href: "/",
        cta: "Go to your archive",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className:
          "border border-button-border-color bg-window-innerbg-color lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
      },
      {
        Icon: Heart,
        name: "Donate",
        description:
          "If you like this project, please consider a donation to help with the its costs.",
        href: "/",
        cta: "Go to the donation page",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className:
          "border border-button-border-color bg-window-innerbg-color lg:row-start-3 lg:row-end-3 lg:col-start-1 lg:col-end-2",
      },
    ],
    [],
  );

  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
