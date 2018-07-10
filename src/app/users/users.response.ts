import { User } from './user';

export interface GetUserResponse extends User {

}

export interface CreateUserResponse extends User {

}

export interface UpdateUserResponse extends User {

}

export interface DestroyUserRequest {
  success: boolean;
}
