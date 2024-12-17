export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

export interface Role {
  id: string;
  name: string;
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Content {
  id: string;
  title: string;
  description: string;
  category: string;
  location?: {
    address: string;
    latitude: number;
    longitude: number;
  };
  contactInfo?: {
    phone?: string;
    email?: string;
    website?: string;
  };
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AppInfo {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ContentFormData {
  title: string;
  description: string;
  category: string;
  location?: {
    address: string;
    latitude?: number;
    longitude?: number;
  };
  contactInfo?: {
    phone?: string;
    email?: string;
    website?: string;
  };
}

export interface MemberFormData {
  email: string;
  name: string;
  roleId: string;
}

export interface RoleFormData {
  name: string;
  permissions: string[];
}