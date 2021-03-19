import { IEntry } from '../types';

// types for model Place

export interface IPlaceEntry extends IEntry {
  name: string;
  description: string;
  owner: string;
}
