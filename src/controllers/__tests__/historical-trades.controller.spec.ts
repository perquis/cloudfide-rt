import { historicalTradesController } from "@/controllers/historical-trades.controller";

import express from "express";
import "express-async-errors";
import request from "supertest";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/historical-trades", historicalTradesController);

describe("GET /historical-trades", () => {
  it("should return json that it has 500 trades list", async () => {
    const response = await request(app).get("/historical-trades/BTCUSDT").set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.body.length).toBe(500);
  });

  it("should return json when symbol is with lower case", async () => {
    const response = await request(app).get("/historical-trades/ethusdt").set("Accept", "application/json");
    expect(response.status).toBe(200);
  });

  it("should return error when symbol is invalidated", async () => {
    const response = await request(app).get("/historical-trades/not-existing-symbol").set("Accept", "application/json");
    expect(response.status).toBe(500);

    // TODO: Add specific error with determined message.
  });
});
