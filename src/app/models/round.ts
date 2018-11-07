export class Round {
  id: number;
  opponentName: string;
  opponentRank: string;
  date: string;
  pointsScored: number;
  result: string;

  constructor(
    id?: number,
    opponentName?: string,
    opponentRank?: string,
    date?: string,
    pointsScored?: number,
    result?: string

  ) {
    this.id = id;
    this.opponentName = opponentName;
    this.opponentRank = opponentRank;
    this.date = date;
    this.pointsScored = pointsScored;
    this.result = result;
  }
}
