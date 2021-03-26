export interface IStudent {
  id?: number;
  ime?: string;
}

export class Student implements IStudent {
  constructor(public id?: number, public ime?: string) {}
}
