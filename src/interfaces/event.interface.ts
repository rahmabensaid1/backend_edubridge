export interface IEvent {
  id: number;
  title: string;
  description: string;
  location: string;
  date: Date;
  type: string;
  capaciteMax: number;
  createdAt: Date;
}

export interface CreateEvent extends Omit<IEvent, "id" | "createdAt"> {}