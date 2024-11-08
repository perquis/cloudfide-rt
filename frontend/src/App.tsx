import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

import "./App.css";
import { HistoricalTradesMarketChart } from "./components/historical-trades-market-chart";

/*
Plany są następujące:
1. tworzymy "hydrację" i robimy inicjalizację przez react-query (nie będzie to pełna hydracja, poniewać będzie renderowane CSR, a nie SSR, więc dane początkowe będą undefined lub zależne od initialValue)
2. wykorzystujemy react-charts do graficznej prezentacji danych
  - konieczne będzie dodanie logiki biznesowej, która wypluje dane, możliwe do poprawnego wyświetlenia po stronie frontendu.
*/

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback={<div>Something went wrong...</div>}>
        <HistoricalTradesMarketChart />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
