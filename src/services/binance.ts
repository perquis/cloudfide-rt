import { MainClient } from "binance";
import dotenv from "dotenv";

dotenv.config();

export const binance = new MainClient({
  api_key: process.env.BINANCE_API_KEY,
  api_secret: process.env.BINANCE_API_SECRET,
  baseUrl: process.env.BINANCE_API_URL,
});
