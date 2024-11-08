import { errorMiddleware } from "@/middlewares/error";
import { v3 } from "@/routes/v3";

import dotenv from "dotenv";
import express from "express";
import "express-async-errors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v3", v3);

// @ts-ignore
app.use(errorMiddleware);

/*
Etap planowania

1. Wyświetlenie danych w jakimś widoku
    - nastepnie przygotować widok, który umożliwi wyświetlenie wyników na jakimś wykresie po stronie frontendu (REACT, react-charts, react-query od TanStack)
*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
