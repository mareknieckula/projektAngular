export interface Zadanie {
  _id?: {$oid: string};
  name: string;
  created: string;
  end?: string;
  isDone: boolean;
}
