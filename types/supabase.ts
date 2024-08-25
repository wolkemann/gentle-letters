export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      letters: {
        Row: {
          authorId: string;
          created_at: string;
          id: number;
          recipientId: string | null;
          replied: boolean;
          replyId: string | null;
          text: string | null;
          updated_at: string | null;
          was_read: boolean;
        };
        Insert: {
          authorId?: string;
          created_at?: string;
          id?: number;
          recipientId?: string | null;
          replied?: boolean;
          replyId?: string | null;
          text?: string | null;
          updated_at?: string | null;
          was_read?: boolean;
        };
        Update: {
          authorId?: string;
          created_at?: string;
          id?: number;
          recipientId?: string | null;
          replied?: boolean;
          replyId?: string | null;
          text?: string | null;
          updated_at?: string | null;
          was_read?: boolean;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          created_at: string;
          email: string | null;
          id: string;
          nickname: string | null;
        };
        Insert: {
          created_at?: string;
          email?: string | null;
          id?: string;
          nickname?: string | null;
        };
        Update: {
          created_at?: string;
          email?: string | null;
          id?: string;
          nickname?: string | null;
        };
        Relationships: [];
      };
      replies: {
        Row: {
          authorId: string | null;
          created_at: string;
          id: number;
          letterRepliedId: string;
          recipientId: string | null;
          sticker_sent: boolean | null;
          text: string | null;
          updated_at: string | null;
          was_read: boolean | null;
        };
        Insert: {
          authorId?: string | null;
          created_at?: string;
          id?: number;
          letterRepliedId: string;
          recipientId?: string | null;
          sticker_sent?: boolean | null;
          text?: string | null;
          updated_at?: string | null;
          was_read?: boolean | null;
        };
        Update: {
          authorId?: string | null;
          created_at?: string;
          id?: number;
          letterRepliedId?: string;
          recipientId?: string | null;
          sticker_sent?: boolean | null;
          text?: string | null;
          updated_at?: string | null;
          was_read?: boolean | null;
        };
        Relationships: [];
      };
      user_stickers: {
        Row: {
          created_at: string;
          given_by: string;
          id: number;
          obtained_by: string | null;
          reply_id: string | null;
          url: string;
        };
        Insert: {
          created_at?: string;
          given_by: string;
          id?: number;
          obtained_by?: string | null;
          reply_id?: string | null;
          url: string;
        };
        Update: {
          created_at?: string;
          given_by?: string;
          id?: number;
          obtained_by?: string | null;
          reply_id?: string | null;
          url?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
