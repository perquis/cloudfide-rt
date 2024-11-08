import { ITrade } from "../../interfaces/trade";
import { backend } from "../../lib/db/backend";

export const getHistoricalTrades = async (symbol: string): Promise<ITrade[]> => {
  const { data } = await backend.get<ITrade[]>(`/historical-trades/${symbol}`);
  return data;
};
