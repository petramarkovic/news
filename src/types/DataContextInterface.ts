import { ArticlesInterface } from ".";

export interface DataContextInterface {
  data: ArticlesInterface[];
  setData(value: []): void;
}
