export interface Team {
  id: string;
  name: string;
  coachId: string; // User ID of the coach
  members: string[]; // Array of user IDs
}