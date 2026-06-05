export interface Tournament {
    id: string;
    teamIds: string[]; // Array of team IDs participating in the tournament
    matchIds: string[]; // Array of match IDs in the tournament
}