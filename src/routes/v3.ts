import { historicalTradesController } from "@/controllers/historical-trades.controller";

import { Router } from "express";

export const v3 = Router();

v3.use("/historical-trades", historicalTradesController);