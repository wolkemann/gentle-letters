export type Conversation = {
  id: string;
  type: string | undefined | null;
  author: string | undefined | null;
  text: string | undefined | null;
  sticker: string | null;
  date: string | undefined | null;
  helperInteraction: {
    type: string;
    author: string | undefined | null;
    text: string | undefined | null;
    date: string | undefined | null;
  };
};
