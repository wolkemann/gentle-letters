import { Conversation } from "@/types/conversations";

export const getArchiveStatus = (conversation: Conversation) => {
  if (conversation.type === "letter" && conversation.sticker) {
    return "Conversation with " + conversation.helperInteraction.author;
  }

  if (conversation.type === "reply" && conversation.sticker) {
    return "Conversation with " + conversation.author;
  }

  if (conversation.type === "letter" && conversation.helperInteraction.author) {
    return conversation.helperInteraction.author + " is waiting a sticker";
  }

  if (conversation.type === "reply" && conversation.helperInteraction.author) {
    return "Waiting a sticker from " + conversation.author;
  }

  if (
    conversation.type === "letter" &&
    !conversation.helperInteraction.author
  ) {
    return "Waiting for a reply";
  }

  if (conversation.type === "reply" && !conversation.helperInteraction.author) {
    return conversation.author + " is waiting for a reply";
  }

  return "";
};
