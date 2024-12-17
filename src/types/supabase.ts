export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contents: {
        Row: {
          id: string
          title: string
          description: string
          category: string
          location: Json | null
          contact_info: Json | null
          created_by: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          category: string
          location?: Json | null
          contact_info?: Json | null
          created_by: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          category?: string
          location?: Json | null
          contact_info?: Json | null
          created_by?: string
          created_at?: string
          updated_at?: string
        }
      }
      roles: {
        Row: {
          id: string
          name: string
          permissions: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          permissions: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          permissions?: string[]
          created_at?: string
          updated_at?: string
        }
      }
      users: {
        Row: {
          id: string
          email: string
          name: string
          role_id: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          role_id: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          role_id?: string
          created_at?: string
          updated_at?: string
        }
      }
      app_info: {
        Row: {
          id: string
          title: string
          content: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}