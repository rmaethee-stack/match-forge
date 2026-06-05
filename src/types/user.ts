export type UserType = 'player' | 'official' | 'coach';

export interface User {
  id: string;
  name: string;
  age: string;
  type: UserType;
}