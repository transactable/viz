export type SliderFormData = {
    criticism?: boolean,
    comment?: boolean,	
    reporting?: boolean,
    teaching?: boolean,
    scholarship?: boolean,	
    research?: boolean,
    parody?: boolean,
    other?: boolean,	
    commercial?: number,	
    supplants?: number,	
    extremely?: number,	
    all1?: number,	
    substantial?: number,	
    all2?: number,	
    extreme1?: number,	
    extreme2?: number,	
    duplicitous?: number,	
  }


export type CheckboxSubItem = {
    id: number;
    type: 'checkbox';
    key: string;
    label: string;
    initValue: boolean;
    weight: number;
};
  
export type SliderSubItem = {
    id: number;
    type: 'slider';
    key: string;
    topLabel: string;
    bottomLabel: string;
    initValue: string;
    min: string;
    max: string;
    weight: number;
};

export type SubItem = CheckboxSubItem | SliderSubItem;

export type SliderItem = {
id: number;
    title: string;
    subtitle: string;
    items: {
        subItems: SubItem[];
    }[];
};

const slidersArray: SliderItem[] = [
    {
        id: 0,
        title: 'Purpose of Use',
        subtitle: "",
        items: [
            { subItems: 
                [
                    {
                        id: 0,
                        type: 'checkbox',
                        key: 'criticism',
                        label: 'Criticism',
                        initValue: false,
                        weight: 5
                    },
                    {
                        id: 1,
                        type: 'checkbox',
                        key: 'comment',
                        label: 'Comment',
                        initValue: false,
                        weight: 1
                    },
                    {
                        id: 2,
                        key: 'reporting',
                        type: 'checkbox',
                        label: 'Reporting',
                        initValue: false,
                        weight: 1,
                    },
                    {
                        id: 3,
                        type: 'checkbox',
                        key: 'teaching',
                        label: 'Teaching',
                        initValue: false,
                        weight: 1
                    },
                    {
                        id: 4,
                        type: 'checkbox',
                        key: 'scholarship',
                        label: 'Scholarship',
                        initValue: false,
                        weight: 1
                    },
                    {
                        id: 5,
                        type: 'checkbox',
                        key: 'research',
                        label: 'Research',
                        initValue: false,
                        weight: 1
                    },
                    {
                        id: 6,
                        type: 'checkbox',
                        key: 'parody',
                        label: 'Parody',
                        initValue: false,
                        weight: 1
                    },
                    {
                        id: 7,
                        type: 'checkbox',
                        key: 'other',
                        label: 'Other',
                        initValue: false,
                        weight: 1
                    }
                ]
            },
            { subItems: 
                [
                    {
                        id: 8,
                        type: 'slider',
                        key: 'commercial',
                        topLabel: 'Commercial',
                        bottomLabel: 'Non-Commercial',
                        initValue: "0",
                        min: "0",
                        max: "100",
                        weight: 1
                    }
                ]
            },
            { subItems: 
                [
                    {
                        id: 9,
                        type: 'slider',
                        key: 'supplants',
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
        title: 'Nature',
        subtitle: "",
        items: [
            { subItems: 
                [
                    {
                        id: 10,
                        type: 'slider',
                        key: 'extremely',
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
        title: 'Relative Amount',
        subtitle: "",
        items: [
            { subItems: 
                [
                    {
                        id: 11,
                        type: 'slider',
                        key: 'all1',
                        topLabel: 'All',
                        bottomLabel: 'Very Little',
                        initValue: "0",
                        min: "0",
                        max: "100",
                        weight: 1,
                    },
                ]
            },
            { subItems: 
                [
       
                    {
                        id: 12,
                        type: 'slider',
                        key: 'substantial',
                        topLabel: 'Substantial',
                        bottomLabel: 'Incidental',
                        initValue: "0",
                        min: "0",
                        max: "100",
                        weight: 1,
                    },
                ]
            },
            { subItems: 
                [
                    {
                        id: 13,
                        type: 'slider',
                        key: 'all2',
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
        title: 'Market Effect',
        subtitle: "",
        items: [
            { subItems: 
                [
                    {
                        id: 14,
                        type: 'slider',
                        key: 'extreme1',
                        topLabel: 'Extreme',
                        bottomLabel: 'None',
                        initValue: "0",
                        min: "0",
                        max: "100",
                        weight: 1,
                    },
                ]
            },
            { subItems: 
                [
                    {
                        id: 15,
                        type: 'slider',
                        key: 'extreme2',
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
        title: 'Bonus',
        subtitle: "",
        items: [
            { subItems: 
                [
                    {
                        id: 16,
                        type: 'slider',
                        key: 'duplicitous',
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

export interface SliderData {
    criticism?: boolean,
    comment?: boolean,	
    reporting?: boolean,
    teaching?: boolean,
    scholarship?: boolean,	
    research?: boolean,
    parody?: boolean,
    other?: boolean,	
    commercial?: number,	
    supplants?: number,	
    extremely?: number,	
    all1?: number,	
    substantial?: number,	
    all2?: number,	
    extreme1?: number,	
    extreme2?: number,	
    duplicitous?: number,	
}

const getSlidersData = () => {
    const workingObjInitData: SliderData = {
        criticism: false,
        comment: false,
        reporting: false,
        teaching: false,
        scholarship: false,
        research: false,
        parody: false,
        other: false,
        commercial: 0,
        supplants: 0,
        extremely: 0,
        all1: 0,
        substantial: 0,
        all2: 0,
        extreme1: 0,
        extreme2: 0,
        duplicitous: 0,
      };
    const workingObjWeight: { [key: string]: number } = {};
    
    let slidersWeightDenominator = 0
    slidersArray.map((slider) => {
        slider.items.map((item) => {
            item.subItems.map((subItem) => {
                slidersWeightDenominator += subItem.weight;
                workingObjWeight[subItem.key] = subItem.weight;
              });
        })
    })
    return [workingObjInitData, slidersWeightDenominator, workingObjWeight]
} 

// 👇️ assign to variable
const sliders = {
    slidersArray,
    getSlidersData
};
    
export default sliders;

