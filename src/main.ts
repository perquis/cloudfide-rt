import dotenv from "dotenv";
import express from "express";
import "express-async-errors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
Etap planowania

1. Wyświetlenie danych w jakimś widoku
    - endpoint GET /api/historical-trades ---> TradeResult[]
    - zainstalowanie modułu supertest ---> testowanie kontrolera ---> GET /api/historical-trades
    - nastepnie przygotować widok, który umożliwi wyświetlenie wyników na jakimś wykresie po stronie frontendu (REACT, react-charts, react-query od TanStack)
        - utworzyć serwer proxy po stronie frontendu, aby nie było potrzeby konfiguracji polityki CORS
*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
