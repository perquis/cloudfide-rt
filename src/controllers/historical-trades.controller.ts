import { binance } from "@/services/binance";

import { Router } from "express";
import "express-async-errors";

export const historicalTradesController = Router();

historicalTradesController.get("/:symbol", async (req, res) => {
  const { symbol } = req.params;
  const historicalTrades = await binance.getHistoricalTrades({ symbol: symbol.toUpperCase() });

  // TODO: validate symbol with enum
  // TODO: time range for this historical trades

  res.json(historicalTrades);
});
