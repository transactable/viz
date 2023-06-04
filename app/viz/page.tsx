'use client'
import React, { useState, useRef, useEffect, FormEvent } from 'react';
import visualizer, { Visualizer } from '@models/Visualizer'
import classnames from '../../functions/classnames'
import styles from '@styles/FairUse.module.css'
import VertSlider from './components/VertSlider'

const { 
    visualizerArray, sliderWeightValues,
    initialData, initialWeightValues 
} = visualizer

export default function FairUse (): React.ReactElement {
    const [data, setData] = useState<Visualizer>(initialData as Visualizer);
    const [weights, setWeights] = useState<Visualizer>(initialWeightValues as Visualizer);
    const [sliderWeights, setSliderWeights] = useState<Visualizer>(sliderWeightValues as Visualizer);
    const [score, setScore] = useState(0)
    const progressBarRef = useRef<HTMLDivElement>(null)
    const [radioBtnIsSelected, setRadioBtnIsSelected] = useState<string>('');
    const [otherRadioBtnIsSelected, setOtherRadioBtnIsSelected] = useState<boolean>(false);

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

    useEffect(() => {
        function calculateScore () {
            let score = 0.00000
            if (radioBtnIsSelected && !otherRadioBtnIsSelected) {
                console.log('count radio button')
            }
            // Normalize factor3
            let workingSubFactor3Taken = 0
            let workingSubFactor3Ratio = 0
            if (data.subFactor1Transform > 50) {
                workingSubFactor3Taken = data.subFactor3Taken + 1;
                workingSubFactor3Ratio = data.subFactor3Ratio + 1;
                workingSubFactor3Taken *= 2;
                workingSubFactor3Ratio *= 2;
                if (workingSubFactor3Taken > 100) {
                    workingSubFactor3Taken = 100;
                }
                if (workingSubFactor3Ratio > 100) {
                    workingSubFactor3Ratio = 100;
                }
            }
            // run the Transformation transformation
            let workingSubFactor1Transform = 0
            let workingFactor1Weight = 0
            let workingFactor2Weight = 0
            let workingFactor3Weight = 0
            let workingFactor4Weight = 0
            if (data.subFactor1Transform > 50) {
                if (data.subFactor1Transform > 90) {
                    workingSubFactor1Transform = 90;
                }
                workingFactor1Weight = weights.factor1Weight + (workingSubFactor1Transform - 50) / 100;
                workingFactor2Weight = weights.factor2Weight - ((workingSubFactor1Transform - 50) / 100) / 3;
                workingFactor3Weight = weights.factor3Weight - ((workingSubFactor1Transform - 50) / 100) / 3;
                workingFactor4Weight = weights.factor4Weight - ((workingSubFactor1Transform - 50) / 100) / 3;
            }
            // console.log('transform ', data.subFactor1Transform)
            for (const [key, value] of Object.entries(data)) {
                const localWeightKey = `${key}Weight`
                if (sliderWeights.hasOwnProperty(localWeightKey)) {
                    const digitCharArray = key.match(/\d/);
                    if (digitCharArray) {
                        const factorId = digitCharArray[0]
                        const factorWeightArray = Object.entries(weights).filter(([key, value]) => key.includes(factorId));
                        const factorWeight = factorWeightArray[0][1]
                        const localWeight =sliderWeights[localWeightKey as keyof Visualizer]
                        const denominator = Object.values(weights).reduce((acc, curr) => acc + curr, 0)
                        score += value*localWeight*factorWeight/denominator
                    }
                }
            }
            return Math.trunc(score)
        }
        setScore(calculateScore())
    }, [data, radioBtnIsSelected, otherRadioBtnIsSelected, sliderWeights, weights])

    function updateFields(fields: Partial<Visualizer>) {
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
            setOtherRadioBtnIsSelected(true)
            updateFields({subFactor1Use: 0})
        } else {
            setOtherRadioBtnIsSelected(false)
            updateFields({subFactor1Use: 100})
        }
        setRadioBtnIsSelected(e.target.value);
    };

    function handleFactorWeightChange (key: any, value: any) {
        setWeights((prevValues) => ({
            ...prevValues,
            [key]: value,
        }));
        if (sliderWeights.hasOwnProperty(key)) {
            setSliderWeights((prevValues) => ({
                ...prevValues,
                [key]: value,
            }));
        }
    }

    return (
        <div>
            {JSON.stringify(weights)}
            <h2 className="font-semibold leading-6 text-gray-900 mt-16 mb-8 text-3xl text-center">Fair Use Visualizer</h2>
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
                <div className="lg:grid lg:grid-cols-10 lg:gap-x-1 mt-8 mb-3">
                    {visualizerArray.map((step, stepIdx) => (
                        <div key={step.title}  className={classnames
                            (
                                'space-y-6 sm:px-1 bg-white p-3 h-full',
                                step.items.length==1 ? 'lg:col-span-1' : step.items.length==2 ? 'lg:col-span-2' : 'lg:col-span-3'
                            )}
                        >
                            <h3 className="text-lg font-bold leading-6 text-gray-900 my-1">
                                {step.title}
                            </h3>
                            <div className={classnames
                                (
                                    'sm:px-1 grid',
                                    step.items.length==1 ? 'grid-cols-1' : step.items.length==2 ? 'grid-cols-2' : 'grid-cols-3'
                                )}
                            >
                                {step.items.map((item, itemIdx) => (
                                    <div key={5*stepIdx+itemIdx} className='col-span-1 flex flex-col text-sm justify-between h-full'>
                                        {item.type=='radio' ? (
                                                item.subItems.map((subItem, subItemIdx)=> (
                                                    <div key={subItemIdx} className="flex items-start">                         
                                                    <div >
                                                        <label>
                                                            <input
                                                            type="radio"
                                                            name="options"
                                                            value={subItem.label.toLowerCase()}
                                                            checked={radioBtnIsSelected === subItem.label.toLowerCase()}
                                                            onChange={handleOptionChange}
                                                            />
                                                        </label>
                                                    </div>
                                                    <div className="ml-1 text-sm">
                                                        <p className="font-medium text-gray-700">{subItem.label}</p>
                                                    </div>
                                                </div>
                                                ))                                       
                                            ) : (
                                                item.subItems.map((subItem, subItemIdx)=> (
                                                    <div key={subItemIdx}>
                                                        <VertSlider
                                                            // key={subItemIdx}
                                                            dataKeyName={item.name ? item.name : step.name}
                                                            item={subItem}
                                                            data={data}
                                                            id={subItemIdx} // Use subItemIdx as the unique key
                                                            handleField={handleField}
                                                        />
                                                    </div>
                                                ))
                                            )
                                        }
                                    </div>
                                ))}
                            </div>
                            <div className='mt-2 bg-white mb-8 lg:mb-0 flex flex-col p-2'>
                                <span>Weight</span>
                                <input
                                    type="number"
                                    step="0.1"
                                    className='w-[60px] px-2 py-1'
                                    value={Object.entries(weights)[stepIdx][1] || ""}
                                    min={0}
                                    onChange={(e) => {
                                        const inputValue = e.target.value;
                                        const parsedValue = parseFloat(inputValue);
                                        const newValue = isNaN(parsedValue) ? 0 : parsedValue;
                                        handleFactorWeightChange(Object.entries(weights)[stepIdx][0], newValue)
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
