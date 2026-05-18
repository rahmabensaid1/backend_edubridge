import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user.entity";
import { Event } from "../entities/event.entity";
import { Formation } from "../entities/formation.entity";
import { Institution } from "../entities/institution.entity";
import { Dossier } from "../entities/dossier.entity";

export const getDashboardStats = async (_req: Request, res: Response) => {
  const userRepo = AppDataSource.getRepository(User);
  const eventRepo = AppDataSource.getRepository(Event);
  const formationRepo = AppDataSource.getRepository(Formation);
  const institutionRepo = AppDataSource.getRepository(Institution);
  const dossierRepo = AppDataSource.getRepository(Dossier);

  const [
    totalUsers,
    totalEvents,
    totalFormations,
    totalInstitutions,
    totalDossiers
  ] = await Promise.all([
    userRepo.count(),
    eventRepo.count(),
    formationRepo.count(),
    institutionRepo.count(),
    dossierRepo.count()
  ]);

  res.json({
    totalUsers,
    totalEvents,
    totalFormations,
    totalInstitutions,
    totalDossiers
  });
};

export const getEventsByType = async (_req: Request, res: Response) => {
  const rows = await AppDataSource.getRepository(Event)
    .createQueryBuilder("event")
    .select("event.type", "type")
    .addSelect("COUNT(event.id)", "count")
    .groupBy("event.type")
    .getRawMany();

  res.json(rows.map(row => ({
    type: row.type || "Event",
    count: Number(row.count)
  })));
};

export const getDossiersByStatus = async (_req: Request, res: Response) => {
  const rows = await AppDataSource.getRepository(Dossier)
    .createQueryBuilder("dossier")
    .select("dossier.status", "status")
    .addSelect("COUNT(dossier.id)", "count")
    .groupBy("dossier.status")
    .getRawMany();

  res.json(rows.map(row => ({
    status: row.status || "PENDING",
    count: Number(row.count)
  })));
};
