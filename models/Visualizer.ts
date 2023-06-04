export interface Visualizer extends VisualizerFactorWeights {
  factor1: number;
  subFactor1Use: number;
  subFactor1UseWeight: number;
  subFactor1Purpose: number;
  subFactor1PurposeWeight: number;
  subFactor1Transform: number;
  subFactor1TransformWeight: number;

  factor2: number;
  subFactor2: number;
  subFactor2Weight: number;

  factor3: number;
  subFactor3Taken: number;
  subFactor3TakenWeight: number;
  subFactor3Quality: number;
  subFactor3QualityWeight: number;
  subFactor3Ratio: number;
  subFactor3RatioWeight: number;

  factor4: number;
  subFactor4Original: number;
  subFactor4OriginalWeight: number;
  subFactor4Derivative: number;
  subFactor4DerivativeWeight: number;

  factor5: number;
  subFactor5: number;
  subFactor5Weight: number;

  score: number;
}

export interface VisualizerData {
  factor1: number;
  subFactor1Use: number;
  subFactor1UseWeight: number;
  subFactor1Purpose: number;
  subFactor1PurposeWeight: number;
  subFactor1Transform: number;
  subFactor1TransformWeight: number;

  factor2: number;

  factor3: number;
  subFactor3Taken: number;
  subFactor3TakenWeight: number;
  subFactor3Quality: number;
  subFactor3QualityWeight: number;
  subFactor3Ratio: number;
  subFactor3RatioWeight: number;

  factor4: number;
  subFactor4Original: number;
  subFactor4OriginalWeight: number;
  subFactor4Derivative: number;
  subFactor4DerivativeWeight: number;

  factor5: number;

  score: number;
}

export interface VisualizerFactorWeights {
  factor1Weight: number;
  factor2Weight: number;
  factor3Weight: number;
  factor4Weight: number;
  factor5Weight: number;
}

export interface VisualizerRadioSubItem  extends VisualizerSubItem {
  label: string;
}

export interface VisualizerSliderSubItem extends VisualizerSubItem {
  topLabel: string;
  bottomLabel: string;
  min: string;
  max: string;
}

export interface VisualizerSubItem {
  id: number;
  initValue: string | boolean;
  weight: number;
}

export interface VisualizerSliderItem {
  name: 'subFactor1Purpose' | 'subFactor1Transform' | 'subFactor2' |'subFactor3Taken' | 'subFactor3Quality' | 'subFactor3Ratio' | 'subFactor4Original' | 'subFactor4Derivative' | 'subFactor5' | null;
  weight: number;
  type: 'slider';
  subItems: VisualizerSliderSubItem[];
}

interface VisualizerRadioItem {
  name: 'subFactor1Use';
  weight: number;
  type: 'radio';
  subItems: VisualizerRadioSubItem[];
}

export interface VisualizerItem {
  id: number;
  name: 'factor1' | 'factor2' |  'factor3' | 'factor4' |  'factor5';
  weight: number;
  title: string;
  subtitle: string;
  items: (VisualizerSliderItem | VisualizerRadioItem )[];
}

const visualizerArray: VisualizerItem[] = [
  {
      id: 0,
      name: 'factor1',
      weight: 0.40,
      title: 'Purpose of Use',
      subtitle: "",
      items: [
          { 
              name: 'subFactor1Use',
              weight: 0.333,
              type: 'radio',
              subItems: 
              [
                  {
                      id: 0,
                      label: 'Criticism',
                      initValue: false,
                      weight: 1
                  },
                  {
                      id: 1,
                      label: 'Comment',
                      initValue: false,
                      weight: 1
                  },
                  {
                      id: 2,
                      label: 'Reporting',
                      initValue: false,
                      weight: 1,
                  },
                  {
                      id: 3,
                      label: 'Teaching',
                      initValue: false,
                      weight: 1
                  },
                  {
                      id: 4,
                      label: 'Scholarship',
                      initValue: false,
                      weight: 1
                  },
                  {
                      id: 5,
                      label: 'Research',
                      initValue: false,
                      weight: 1
                  },
                  {
                      id: 6,
                      label: 'Parody',
                      initValue: false,
                      weight: 1
                  },
                  {
                      id: 7,
                      label: 'Other',
                      initValue: false,
                      weight: 1
                  }
              ]
          },
          { 
              name: 'subFactor1Purpose',
              weight: 0.333,
              type: 'slider',
              subItems: 
              [
                  {
                      id: 8,
                      topLabel: 'Commercial',
                      bottomLabel: 'Non-Commercial',
                      initValue: "0",
                      min: "0",
                      max: "100",
                      weight: 1
                  }
              ]
          },
          { 
              name: 'subFactor1Transform',
              weight: 0.333,
              type: 'slider',
              subItems: 
              [
                  {
                      id: 9,
                      topLabel: 'Supplants',
                      bottomLabel: 'Adds To',
                      initValue: "0",
                      min: "0",
                      max: "100",
                      weight: 1,
                  }
              ]
          }
      ]
  },
  {
      id: 1,
      name: 'factor2',
      weight: 0.15,
      title: 'Nature',
      subtitle: "",
      items: [
          { 
              name: 'subFactor2',
              weight: 1.0,
              type: 'slider',
              subItems: 
              [
                  {
                      id: 10,
                      topLabel: 'Extremely',
                      bottomLabel: 'Not So Much',
                      initValue: "0",
                      min: "0",
                      max: "100",
                      weight: 1,
                  }
              ]
          }
      ]
  },
  {
      id: 2,
      name: 'factor3',
      weight: 0.15,
      title: 'Relative Amount',
      subtitle: "",
      items: [
          { 
              name: 'subFactor3Taken',
              weight: 0.333,
              type: 'slider',
              subItems: 
              [
                  {
                      id: 11,
                      topLabel: 'All',
                      bottomLabel: 'Very Little',
                      initValue: "0",
                      min: "0",
                      max: "100",
                      weight: 1,
                  },
              ]
          },
          { 
              name: 'subFactor3Quality',
              weight: 0.333,
              type: 'slider',
              subItems: 
              [
     
                  {
                      id: 12,
                      topLabel: 'Substantial',
                      bottomLabel: 'Incidental',
                      initValue: "0",
                      min: "0",
                      max: "100",
                      weight: 1,
                  },
              ]
          },
          { 
              name: 'subFactor3Ratio',
              weight: 0.333,
              type: 'slider',
              subItems: 
              [
                  {
                      id: 13,
                      topLabel: 'All',
                      bottomLabel: 'Very Little',
                      initValue: "0",
                      min: "0",
                      max: "100",
                      weight: 1,
                  },
              ]
          },
      ]
  },
  {
      id: 3,
      name: 'factor4',
      weight: 0.30,
      title: 'Market Effect',
      subtitle: "",
      items: [
          { 
              name: 'subFactor4Original',
              weight: 0.5,
              type: 'slider',
              subItems: 
              [
                  {
                      id: 14,
                      topLabel: 'Extreme',
                      bottomLabel: 'None',
                      initValue: "0",
                      min: "0",
                      max: "100",
                      weight: 1,
                  },
              ]
          },
          { 
              name: 'subFactor4Derivative',
              weight: 0.5,
              type: 'slider',
              subItems: 
              [
                  {
                      id: 15,
                      topLabel: 'Extreme',
                      bottomLabel: 'None',
                      initValue: "0",
                      min: "0",
                      max: "100",
                      weight: 1,
                  },
              ]
          }
      ]
  },
  {
      id: 4,
      name: 'factor5',
      weight: 0.1,
      title: 'Bonus',
      subtitle: "",
      items: [
          { 
              name: 'subFactor5',
              weight: 1.0,
              type: 'slider',
              subItems: 
              [
                  {
                      id: 16,
                      topLabel: 'Duplicitious',
                      bottomLabel: 'Good Faith',
                      initValue: "0",
                      min: "0",
                      max: "100",
                      weight: 20,
                  }  
              ]
          }
      ]
  }
]

export interface Generic {
  [key: string]: number;
}

function getInitialValues(visualizerArray: VisualizerItem[]): { 
    visualizerArray: VisualizerItem[],
    sliderWeightValues: Partial<Visualizer>,
    initialData: Partial<Visualizer>,
    initialVisualizerValues: Partial<Visualizer>,
    initialRadioValues: Partial<Visualizer>,
    initialWeightValues: Partial<Visualizer>,  
  } {
  let initialData: Partial<Visualizer> = {};
  let sliderWeightValues: Partial<Visualizer> = {};
  let initialVisualizerValues: Partial<Visualizer> = {};
  let initialRadioValues: Generic = {};
  let initialWeightValues: Generic = {};

  for (const item of visualizerArray) {
    initialVisualizerValues[item.name] = 0;
    initialVisualizerValues[`${item.name}Weight`] = item.weight;
    initialWeightValues[`${item.name}Weight`] = item.weight;

    for (const subItem of item.items) {
      if (subItem.name) {
        initialData[subItem.name] = 0;
        initialVisualizerValues[subItem.name] = 0;
        initialVisualizerValues[`${subItem.name}Weight`] = subItem.weight;
        if (subItem.type === 'radio') {
          for (const item of subItem.subItems) {
            initialRadioValues[item.label.toLowerCase()] = 0 
          }
        } 
        sliderWeightValues[`${subItem.name}Weight`] = subItem.weight
      } else {
        initialData[item.name] = 0;
        sliderWeightValues[`${item.name}Weight`] = item.weight
      }
    }
  }

  return { 
    visualizerArray, sliderWeightValues,
    initialData, initialVisualizerValues, 
    initialRadioValues, initialWeightValues 
  };
}

const visualizer= getInitialValues(visualizerArray)

export default visualizer