import { Result, AvaibleFilter } from '.';

export interface Response {
  results: Result[];
  available_filters: AvaibleFilter[];
}
