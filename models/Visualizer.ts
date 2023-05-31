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

import React from 'react'

const calculateScore = (props: Visualizer) => {
  let Factor1 = 0;
  let Factor1_Weight = 0.40;
  let SubFactor1_Purpose = 0;
  let SubFactor1_Use = 0;
  let SubFactor1_Transform = 0;

  let Factor2 = 0;
  let Factor2_Weight = 0.15;

  let Factor3 = 0;
  let Factor3_Weight = 0.15;
  let SubFactor3_Taken = 0;
  let SubFactor3_Quality = 0;
  let SubFactor3_Ratio = 0;

  let Factor4 = 0;
  let Factor4_Weight = 0.30;
  let SubFactor4_Original = 0;
  let SubFactor4_Derivative = 0;

  let Factor5 = 0;
  let Factor5_Weight = 0.1;

  let myScore = 0;

  //---------------------------------------------------------
  // Factor 1 - Purpose and Character of Use
  //----------------------------------------------------------
  // Factor 1 -Purpose
  SubFactor1_Purpose = parseInt(document.forms[0].MainContent_tbUse.value);
  if (RadioButton.value) {
      SubFactor1_Purpose = .33;
  }
  // Factor 1 - Use
  SubFactor1_Use = Slider.value);

  // Factor 1 -Transform
  SubFactor1_Transform = Slider.value);

  Factor1 = (SubFactor1_Purpose + SubFactor1_Use + SubFactor1_Transform) / 3;


  //----------------------------------------------------------
  // Factor 2 - Nature of Copyrighted Works (Worthiness)
  //----------------------------------------------------------
  Factor2 = (Slider).value);


  //----------------------------------------------------------
  // Factor 3 - Amount and Substantiality of Use
  //----------------------------------------------------------
  SubFactor3_Taken = (Slider.value);
  SubFactor3_Quality = (Slider.value);
  SubFactor3_Ratio = (Slider.value);
  // Normalize Factor3
  if (SubFactor1_Transform > 50) {
      SubFactor3_Taken += 1;
      SubFactor3_Ratio += 1;
      SubFactor3_Taken *= 2;
      SubFactor3_Ratio *= 2;
      if (SubFactor3_Taken > 100) {
          SubFactor3_Taken = 100;
      }
      if (SubFactor3_Ratio > 100) {
          SubFactor3_Ratio = 100;
      }
  }
  Factor3 = (SubFactor3_Taken + SubFactor3_Quality + SubFactor3_Ratio) / 3;


  //----------------------------------------------------------
  // Factor 4 - The Effect of the Use upon the Potential Market for or Value of the Copyrighted Work
  //----------------------------------------------------------
  SubFactor4_Original = (Slider.value);
  SubFactor4_Derivative = (Slider.value);
  // Normalize Factor4
  Factor4 = (SubFactor4_Original + SubFactor4_Derivative) / 2;


  //----------------------------------------------------------
  // Factor 5 - Bonus Points for Good Faith
  //----------------------------------------------------------
  Factor5 = (Slider.value);
  // run the Transformation transformation
  if (SubFactor1_Transform > 50) {
      if (SubFactor1_Transform > 90) {
          SubFactor1_Transform = 90;
      }
      Factor1_Weight += (SubFactor1_Transform - 50) / 100;
      Factor2_Weight -= ((SubFactor1_Transform - 50) / 100) / 3;
      Factor3_Weight -= ((SubFactor1_Transform - 50) / 100) / 3;
      Factor4_Weight -= ((SubFactor1_Transform - 50) / 100) / 3;
  }


  //----------------------------------------------------------
  // Total Score
  //----------------------------------------------------------	
  myScore = (Factor1 * Factor1_Weight) +
                  (Factor2 * Factor2_Weight) +
                  (Factor3 * Factor3_Weight) +
                  (Factor4 * Factor4_Weight) +
                  (Factor5 * Factor5_Weight);
  myScore = Math.round(myScore);
}