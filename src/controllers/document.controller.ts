import { Request, Response } from "express";
import { DocumentService } from "../services/document.service";
import { UserService } from "../services/user.service";
import { ValidateDocumentSchema } from "./document.schema";

const documentService = new DocumentService();
const userService = new UserService();

export const createDocument = async (req: any, res: Response) => {
  const result = ValidateDocumentSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ message: result.error.issues[0].message });
  }

  const user = req.user?.id ? await userService.getUserByIdService(req.user.id) : undefined;
  const document = await documentService.createDocumentService(result.data, user || undefined);
  return res.status(201).json({ message: "Document created successfully", document });
};

export const getDocuments = async (_req: Request, res: Response) => {
  const documents = await documentService.getDocumentsService();
  res.json(documents);
};

export const getMyDocuments = async (req: any, res: Response) => {
  const documents = await documentService.getMyDocumentsService(req.user.id);
  res.json(documents);
};

export const updateDocument = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updated = await documentService.updateDocumentService(id, req.body);

  if (!updated) {
    return res.status(404).json({ message: "Document not found" });
  }

  res.json({ message: "Document updated", updated });
};

export const deleteDocument = async (req: Request, res: Response) => {
  const deleted = await documentService.deleteDocumentService(Number(req.params.id));

  if (!deleted) {
    return res.status(404).json({ message: "Document not found" });
  }

  res.json({ message: "Document deleted" });
};
