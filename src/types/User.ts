export interface UserModelType {
  createdAt: string;
  updatedAt: string;
  user_birthday: null | string | Date;
  user_email: string;
  user_gender: string;
  user_name: string;
  user_surname: string;
  user_type: string;
  user_id: number;
}

export interface UserUpdate {
  user_birthday?: null | string | Date;
  user_email?: string;
  user_gender?: string;
  user_name?: string;
  user_surname?: string;
  user_type?: string;
}

export interface UserData {
  data: UserModelType;
}
