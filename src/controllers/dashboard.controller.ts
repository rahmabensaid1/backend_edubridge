import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/user.entity";
import { Event } from "../entities/event.entity";
import { Formation } from "../entities/formation.entity";
import { Institution } from "../entities/institution.entity";
import { Dossier } from "../entities/dossier.entity";

const applyYearFilter = (query: any, alias: string, year?: string) => {
  if (!year || year === "All") return query;

  const start = new Date(`${year}-01-01T00:00:00.000Z`);
  const end = new Date(`${Number(year) + 1}-01-01T00:00:00.000Z`);

  return query.where(`${alias}.createdAt >= :start AND ${alias}.createdAt < :end`, {
    start,
    end
  });
};

export const getDashboardStats = async (req: Request, res: Response) => {
  const year = req.query.year as string | undefined;
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
    applyYearFilter(userRepo.createQueryBuilder("user"), "user", year).getCount(),
    applyYearFilter(eventRepo.createQueryBuilder("event"), "event", year).getCount(),
    applyYearFilter(formationRepo.createQueryBuilder("formation"), "formation", year).getCount(),
    applyYearFilter(institutionRepo.createQueryBuilder("institution"), "institution", year).getCount(),
    applyYearFilter(dossierRepo.createQueryBuilder("dossier"), "dossier", year).getCount()
  ]);

  res.json({
    totalUsers,
    totalEvents,
    totalFormations,
    totalInstitutions,
    totalDossiers
  });
};

export const getEventsByType = async (req: Request, res: Response) => {
  const year = req.query.year as string | undefined;
  let query = AppDataSource.getRepository(Event)
    .createQueryBuilder("event")
    .select("event.type", "type")
    .addSelect("COUNT(event.id)", "count");

  query = applyYearFilter(query, "event", year).groupBy("event.type");
  const rows = await query.getRawMany();

  res.json(rows.map(row => ({
    type: row.type || "Event",
    count: Number(row.count)
  })));
};

export const getDossiersByStatus = async (req: Request, res: Response) => {
  const year = req.query.year as string | undefined;
  let query = AppDataSource.getRepository(Dossier)
    .createQueryBuilder("dossier")
    .select("dossier.status", "status")
    .addSelect("COUNT(dossier.id)", "count");

  query = applyYearFilter(query, "dossier", year).groupBy("dossier.status");
  const rows = await query.getRawMany();

  res.json(rows.map(row => ({
    status: row.status || "PENDING",
    count: Number(row.count)
  })));
};
