/*

Etap planowania

1. Pobranie danych w celu zidentyfikowania zmian cen kryptowalut, czy kwota została zwiększona, bądź zmniejszona
    - cron do pobierania danych co jeden dzień i wysyłanie tych informacji do bazy danych MongoDb
2. Wyświetlenie danych w jakimś widoku
    - endpoint GET /api/historical-trades ---> TradeResult[]
    - zainstalowanie modułu supertest ---> testowanie kontrolera ---> GET /api/historical-trades
    - nastepnie przygotować widok, który umożliwi wyświetlenie wyników na jakimś wykresie po stronie frontendu (REACT, react-charts, react-query od TanStack)
*/
