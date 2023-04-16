export class Transaction {
  constructor(
    public id: number,
    public description: string,
    public date: string,
    public montant: bigint,
    public categoryId: number
  ) {}
}
