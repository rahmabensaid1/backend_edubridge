export interface IFormation {
  id: number;
  titre: string;
  description: string;
  niveauRequis: string;
  fraisInscription: number;
  duree: string;
  langue: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateFormation extends Omit<IFormation, "id" | "createdAt" | "updatedAt"> {}