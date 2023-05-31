export interface Visualizer {
  // Purpose and Character of Use
  Factor1: number;
  Factor1_Weight: number;
  SubFactor1_Use: number;
  SubFactor1_Purpose: number;
  SubFactor1_Transform: number;
  // Nature of the Work
  Factor2: number;
  Factor2_Weight: number;
  // Amount and Substantiality of the Portion Used
  Factor3: number;
  Factor3_Weight: number;
  SubFactor3_Taken: number;
  SubFactor3_Quality: number;
  SubFactor3_Ratio: number;
  // Effect on the Market
  Factor4: number;
  Factor4_Weight: number;
  SubFactor4_Original: number;
  SubFactor4_Derivative: number;
  // Bonus Points for Good Faith
  Factor5: number;
  Factor5_Weight: number;
  // Total Score
  Score: number;
}