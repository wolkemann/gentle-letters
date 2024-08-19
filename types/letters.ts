export interface Letters {
  id: string;
  text: string;
  authorId: string;
  recipientId: string;
  replied: boolean;
  was_read: boolean;
  created_at: string;
  updated_at: string;
}
