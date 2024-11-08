import { useQuery } from "@tanstack/react-query";
import { Chart } from "react-charts";

import { getHistoricalTrades } from "../server/actions/get-historical-trades";

export function HistoricalTradesMarketChart() {
  const { data, isLoading } = useQuery({
    queryKey: ["historical-trades"],
    queryFn: () => getHistoricalTrades("btcusdt"),
  });

  if (isLoading) return <div>Loading...</div>;

  // W tej sytuacji logikę biznesową do mapowania tablicy pozostawiłbym po stronie serwera
  // Następnie wyrendował ten widok tutaj

  // https://react-charts.tanstack.com/docs/api
  // const chartData = useMemo(() => {
  //   const newData = [...data!];
  // }, []);

  return (
    <Chart
      options={{
        data,
        primaryAxis,
        secondaryAxes,
      }}
    />
  );
}
