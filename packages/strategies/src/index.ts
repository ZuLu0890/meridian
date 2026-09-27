export interface StrategyEngine {
  readonly name: string;
  readonly version: string;
}

export const STRATEGY_ENGINE: StrategyEngine = {
  name: "meridian-strategies",
  version: "0.1.0",
};

export { Decimal, DECIMAL_SCALE, type RoundingMode } from "./decimal";
export {
  annualizeSharpe,
  computeRiskMetrics,
  maxDrawdown,
  sharpeRatio,
  valueAtRisk,
  type RiskMetrics,
  type VarianceMode,
} from "./risk-metrics";
