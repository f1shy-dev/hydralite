import { Request, Response } from "express";

export default interface ContextType {
  req: Request;
  res: Response;
}
