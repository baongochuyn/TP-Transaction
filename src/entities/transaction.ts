export class Transaction {
  constructor(
    public id: number,
    public description: string,
    public date: Date,
    public amount: bigint,
    public category: string
  ) {}
}
