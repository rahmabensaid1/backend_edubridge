export interface IDossier {
  id: number;
  nom: string;
  description: string;
  dateDepot: Date;
  dateRecu?: Date;
  priorite: string;
  status: string;
  motif: string;
  fullName?: string;
  phone?: string;
  nationality?: string;
  lastDiploma?: string;
  motivation?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateDossier extends Omit<IDossier, "id" | "createdAt" | "updatedAt"> {}
