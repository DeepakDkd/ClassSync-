export interface IUser {
  id: string;
  email: string;
  password: string;
  // userName?:string;
  firstName?: string;
  lastName?: string;
  classRoomId?: string;
  refreshToken?: string;
  createdAt?: Date;
  updatedAt?: Date;
  role?: string; // e.g., 'student', 'admin','teacher'
  lastLoginAt?: Date;
  isActive?: boolean;
  profilePictureUrl?: string;
  bio?: string;
  preferences?: Record<string, any>; // User-specific preferences or settings
  socialLinks?: Record<string, string>;
}
