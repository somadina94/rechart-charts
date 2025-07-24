import AreaChartCard from "@/components/charts/area-chart";
import MyBarChart from "@/components/charts/bar-chart";
import ComposedChartCard from "@/components/charts/composed-chart";
import LineChartCard from "@/components/charts/line-chart";
import PieChartCard from "@/components/charts/pie-chart";
import RadarChartCard from "@/components/charts/radar-chart";
import RadialBarChartCard from "@/components/charts/radial-bar-chart";
import ScatterChartCard from "@/components/charts/scatter-chart";
import TreemapCard from "@/components/charts/tree-map";
import { LightDarkToggle } from "@/components/ui/light-dark-toggle";

export default function Home() {
  return (
    <div className="p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MyBarChart />
      <LineChartCard />
      <AreaChartCard />
      <RadarChartCard />
      <RadialBarChartCard />
      <PieChartCard />
      <ScatterChartCard />
      <TreemapCard />
      <ComposedChartCard />
      <div id="fixed-parent" className="fixed top-16 right-12 z-50">
        <LightDarkToggle />
      </div>
    </div>
  );
}
