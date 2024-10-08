import {
  MessageSquareReply,
  PencilLine,
  Sticker,
  Archive,
  Heart,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { useMemo } from "react";

export async function DashboardPanel() {
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
        background: "",
        className:
          "border border-button-border-color bg-window-innerbg-color lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
      },
      {
        Icon: Sticker,
        name: "Stickers collection",
        description: "Check how many rewards did you gained.",
        href: "/dashboard/stickers",
        cta: "Go to your stickers",
        background: "",
        className:
          "border border-button-border-color bg-window-innerbg-color lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
      },
      {
        Icon: Archive,
        name: "Check your archive",
        description:
          "Check your past correspondance and the reward that you earned from that discussion. You can also see the status of your pending conversations.",
        href: "/dashboard/archive",
        cta: "Go to your archive",
        background: "",
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
        background: "",
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
