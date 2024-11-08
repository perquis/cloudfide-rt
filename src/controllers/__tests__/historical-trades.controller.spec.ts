import { historicalTradesController } from "@/controllers/historical-trades.controller";

import express from "express";
import "express-async-errors";
import request from "supertest";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/historical-trades", historicalTradesController);

describe("GET /historical-trades", () => {
  it("responds with json in RawTrade[] type", async () => {
    const response = await request(app).get("/historical-trades/btcusdt").set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(500);
  });
});
