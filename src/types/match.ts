export interface Match {
  id: string;
  teamAId: string; // ID of Team A
  teamBId: string; // ID of Team B
  date: string; // ISO date string
  officialId: string; // User ID of the official overseeing the match
  result: 'teamA' | 'teamB' | 'draw'; // Match result
}