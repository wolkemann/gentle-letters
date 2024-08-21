export interface Letters {
  authorId: string | null;
  created_at: string;
  id: number;
  recipientId: string | null;
  replied: boolean | null;
  text: string | null;
  updated_at: string | null;
  was_read: boolean;
}
