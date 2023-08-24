import { Request, Response } from "express"
import { v4 as uuidV4 } from "uuid"

export const createRoom = (req: Request, res: Response) => {
  res.status(200).json({ roomID: uuidV4() })
}