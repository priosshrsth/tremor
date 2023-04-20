import { Color, ValueFormatter } from "../../../lib";
import type { XAxisProps, YAxisProps } from "recharts";

interface BaseChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: any[];
  categories: string[];
  index: string;
  colors?: Color[];
  valueFormatter?: ValueFormatter;
  startEndOnly?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  yAxisWidth?: number;
  showAnimation?: boolean;
  showTooltip?: boolean;
  showGradient?: boolean;
  showLegend?: boolean;
  showGridLines?: boolean;
  autoMinValue?: boolean;
  minValue?: number;
  maxValue?: number;
  yAxisConfig?: Pick<YAxisProps, "allowDecimals">;
  xAxisConfig?: Pick<XAxisProps, "allowDecimals">;
}

export default BaseChartProps;
