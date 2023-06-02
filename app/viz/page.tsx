'use client'
import React, { useState, useRef, useEffect, FormEvent } from 'react';
import viz, { VizData, VizWeight, FactorWeight } from '@models/Viz'
import classnames from '../../functions/classnames'
import styles from '@styles/FairUse.module.css'
import VertSlider from './components/VertSlider'

const [initData, slidersWeightDenominator, slidersWeightObj, factorWeight] = viz.getVizData()

export default function FairUse (): React.ReactElement {
    const [data, setData] = useState<VizData>(initData as VizData);
    const [score, setScore] = useState(0)
    const progressBarRef = useRef<HTMLDivElement>(null)
    const [slidersWeight, setSlidersWeight] = useState<VizWeight>(slidersWeightObj as VizWeight)
    const [factorsWeight, setFactorsWeight] = useState<FactorWeight>(factorWeight as FactorWeight)

    const [selectedOption, setSelectedOption] = useState<string>('');
    const [otherOptionIsSelected, setOtherOptionIsSelected] = useState<boolean>(false);

    useEffect(() => {
        if (progressBarRef && progressBarRef.current) {
            progressBarRef.current.style.width = score + '%'
            if (score < 25) {
                progressBarRef.current.style.background = 'red'
            } else if (score < 75) {
                progressBarRef.current.style.background = 'orange'
            } else {
                progressBarRef.current.style.background = 'green'
            }
        }
    }, [score]);

    // The folowing code iterates over each key in the data object and retrieves the corresponding value. 
    // It also retrieves the weight value from the slidersWeight object using the same key. 
    // Based on the type of the data value, it performs different calculations:
    // If the data value is a boolean and true, it multiplies 100 by the weight value 
    // (or 1 if weight value is not a number) and adds it to the score.
    // If the data value is a string, it attempts to parse it as an integer. 
    // If successful, it multiplies the parsed integer value by the weight value 
    // (or 1 if weight value is not a number) and adds it to the score.
    // At the end of the reduction, the accumulated score is stored in the cumulatedScore variable.
    useEffect(() => {
        const cumulatedScore: number = Object.keys(data).reduce((score, key) => {
            const dataValue = (data as { [key: string]: string | boolean | number })[key];
            const weightValue = (slidersWeight as { [key: string]: number })[key];
            // Check if the data value is a boolean and true
            if (typeof dataValue === "boolean" && dataValue) {
                const multiplier = typeof weightValue === "number" ? weightValue : 1;
                return score + (100 * multiplier);
            }
            // Check if the data value is a string
            if (typeof dataValue === "string") {
                const intDataValue = parseInt(dataValue, 10);
                const intWeightValue = typeof weightValue === "number" ? weightValue : 1;
                // Check if the data value can be parsed as an integer
                if (!isNaN(intDataValue)) {
                return score + (intDataValue * intWeightValue); // Add the parsed integer value multiplied by the weight to the score
                }
            }
            return score; // Return the score accumulator
        }, 0);
        setScore(cumulatedScore/(slidersWeightDenominator as number))
    }, [data, slidersWeight]);

    function updateFields(fields: Partial<VizData>) {
        setData(prev => {
        if (typeof prev === 'object' && !Array.isArray(prev)) {
            return { ...prev, ...fields };
        }
        return prev;
        });
    }
    
    function handleField (value: string, name: string) {
        const obj = {
            [name]: value,
        }
        updateFields(obj)
    }

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === 'other') {
            setOtherOptionIsSelected(true)
            updateFields({radio: 0})
        } else {
            setOtherOptionIsSelected(false)
            updateFields({radio: 1})
        }
        setSelectedOption(e.target.value);
    };

    function handleWeightChange (key: any, value: any) {
        // console.log('in handle weight change')
        setSlidersWeight((prevValues) => ({
            ...prevValues,
            [key]: value,
          }));
    }

    function handleFactorWeightChange (key: any, value: any) {
        // console.log('in handle factor weight change ', value)
        setFactorsWeight((prevValues) => ({
            ...prevValues,
            [key]: value,
          }));
    }

    return (
        <div>
            <div className='p-4 md:p-8'>
                <div className='mb-8'>
                    {/* Factor weight  {JSON.stringify(factorsWeight)} <br />
                {JSON.stringify(slidersWeight)} <br />
                {JSON.stringify(data)} <br />
                {selectedOption ? 'radio selected' : 'radio not selected'} <br />
                    {otherOptionIsSelected ? 'other selected' : 'other not selected'} */}
                    {/* <h2 className='text-xl font-semibold mb-2'>User-input Weightings</h2>
                    <div className='grid grid-cols-12 gap-2'>
                      
                            {Object.entries(slidersWeight).map(([key, value]) => (
                                <div key={key} className='col-span-6 md:col-span-2 border-blue-600 border-2 rounded-md p-2 flex flex-col'>
                                <label htmlFor={key}>{key}</label>
                                <input
                                    type="number"
                                    id={key}
                                    className='w-[60px]'
                                    value={value || ""}
                                    min={0}
                                    onChange={(e) => {
                                        const inputValue = e.target.value;
                                        const parsedValue = parseInt(inputValue, 10);
                                        const newValue = isNaN(parsedValue) ? 0 : parsedValue;
                                        handleWeightChange(key, newValue)
                                    }}
                                />
                                </div>
                            ))}
              
                    </div> */}
                </div>
              
                <h2 className="font-semibold leading-6 text-gray-900 mt-16 text-3xl text-center">Fair Use Visualizer</h2>
           
            </div>
            <div className='border-2 border-blue-600 rounded-lg px-1 py-2'>
                <div className='mt-5 mb-8 px-4'>
                <div className='w-100 flex justify-between items-center'>
                    <div className={classnames('text-2xl font-bold', score >= 50 ? 'text-green-700 font-extra-bold' : '' )}>
                        Fair use score: {Math.trunc(score)}
                    </div>
                    { score >= 50 && (
                        <div>✅</div>
                    )}
                </div>
                <div className="bg-gray-200 rounded-full">
                    <div ref={progressBarRef} className={`${styles.sliderBar} text-white rounded-full py-1 px-6 text-right font-extrabold text-xl`}>
                        <span className='-ml-1'>{Math.trunc(score)}</span>
                    </div>
                </div>
                </div>
            <div className="lg:grid lg:grid-cols-10 lg:gap-x-1">
                {viz.slidersArray.map((step, stepIdx) => (
                    <div key={step.title}  className={classnames
                        (
                            'space-y-6 sm:px-1',
                            step.items.length==1 ? 'lg:col-span-1' : step.items.length==2 ? 'lg:col-span-2' : 'lg:col-span-3'
                        )}
                    >
                        <div  className="shadow sm:overflow-hidden sm:rounded-md">
                            <div className="bg-white p-3 h-full">
                                <h3 className="text-lg font-bold leading-6 text-gray-900 mb-1">
                                    {step.title}
                                </h3>
                                <div className={classnames
                                    (
                                        'sm:px-1 grid',
                                        step.items.length==1 ? 'grid-cols-1' : step.items.length==2 ? 'grid-cols-2' : 'grid-cols-3'
                                    )}
                                >
                                    {step.items.map((item, itemIdx) => (
                                        <div key={5*stepIdx+itemIdx} className='col-span-1 flex flex-col text-sm justify-between'>
                                            {item.subItems.map((subItem, subItemIdx) => {
                                                const itemKey = itemIdx;
                                                const sliderKey = `${itemKey}-${subItemIdx}`; // Generate a unique key for the VertSlider component
                                                return (
                                                    <div key={sliderKey} className="mt-4 space-y-4 flex flex-col">
                                                    {subItem.type === 'checkbox' ? (
                                                        <div className="flex items-start">                         
                                                            <div >
                                                                <label>
                                                                    <input
                                                                    type="radio"
                                                                    name="options"
                                                                    value={subItem.key}
                                                                    checked={selectedOption === subItem.key}
                                                                    onChange={handleOptionChange}
                                                                    />
                                                                    {/* {subItem.key} */}
                                                                </label>
                                                            </div>
                                                            <div className="ml-1 text-sm">
                                                                <p className="font-medium text-gray-700">{subItem.label}</p>
                                                            </div>
                                                        </div>
                                                        ) : (
                                                        <VertSlider
                                                            key={sliderKey}
                                                            item={subItem}
                                                            data={data}
                                                            id={subItemIdx} // Use subItemIdx as the unique key
                                                            handleField={handleField}
                                                            />
                                                        )}
                                                    </div>
                                                    );
                                                })}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='mt-2 bg-white mb-8 lg:mb-0 flex flex-col p-2'>
                                    <span>Weight</span>
                                    <input
                                        type="number"
                                        step="0.1"
                                        className='w-[60px] px-2 py-1'
                                        value={Object.entries(factorsWeight)[stepIdx][1] || ""}
                                        min={0}
                                        onChange={(e) => {
                                            const inputValue = e.target.value;
                                            const parsedValue = parseFloat(inputValue);
                                            const newValue = isNaN(parsedValue) ? 0 : parsedValue;
                                            handleFactorWeightChange(Object.entries(factorsWeight)[stepIdx][0], newValue)
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> 
        </div>
    )
}
