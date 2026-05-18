export interface IParcours {
  id: number;
  diplome: string;
  typeDiplome: string;
  description: string;
  field: string;
  startDate: Date;
  endDate: Date;
  moyenne: number;
  langue: string;
  createdAt: Date;
  updatedAt: Date;

}

export interface CreateParcours extends Omit<IParcours, "id" | "createdAt" | "updatedAt"> {}