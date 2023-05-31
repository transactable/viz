'use client'
import React, { useState, useRef, useEffect, FormEvent } from 'react';
import viz, { VizData } from '@models/Viz'
import classnames from '../../functions/classnames'
import styles from '@styles/FairUse.module.css'
import VertSlider from './components/VertSlider'

const [initData, slidersWeightDenominator, slidersWeightObj] = viz.getVizData()
const slidersWeight = slidersWeightObj

export default function FairUse (): React.ReactElement {
    const [data, setData] = useState<VizData>(initData as VizData);
    const [score, setScore] = useState(0)
    const progressBarRef = useRef<HTMLDivElement>(null)

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
        const cumulatedScore: number = Object.keys(data).reduce((score, key) => {
            const dataValue = (data as { [key: string]: string | boolean | number })[key];
            const weightValue = (slidersWeight as { [key: string]: number })[key];
            if (typeof dataValue === "boolean" && dataValue) {
                const multiplier = typeof weightValue === "number" ? weightValue : 1;
                return score + (100 * multiplier);
            }
            if (typeof dataValue === "string") {
                const intDataValue = parseInt(dataValue, 10);
                const intWeightValue = typeof weightValue === "number" ? weightValue : 1;
                if (!isNaN(intDataValue)) {
                return score + (intDataValue * intWeightValue);
                }
            }
            return score;
            }, 0);
        setScore(cumulatedScore/(slidersWeightDenominator as number))
    }, [data]);

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

    function handleCheckbox (checked: boolean, name: string) {
        const obj = {
            [name]: checked,
        }
        updateFields(obj)
    }

    return (
        <div>
            <div className='p-4 md:p-8'>
            <h2 className="font-semibold leading-6 text-gray-900 mb-16 text-3xl text-center">Fair Use Visualizer</h2>
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
            <div className="lg:grid lg:grid-cols-10 lg:gap-x-1 my-16">
                {viz.slidersArray.map((step, stepIdx) => (
                    <div key={stepIdx}  className={classnames
                        (
                            'space-y-6 sm:px-1',
                            step.items.length==1 ? 'lg:col-span-1' : step.items.length==2 ? 'lg:col-span-2' : 'lg:col-span-3'
                        )}
                    >
                        <div  className="shadow sm:overflow-hidden sm:rounded-md">
                            <div className="space-y-6 bg-white pb-8 px-4 sm:p-6 h-full">
                                <h3 className="text-lg font-bold leading-6 text-gray-900 mb-8">
                                    {step.title}
                                </h3>
                                <div className={classnames
                                    (
                                        'sm:px-1 grid',
                                        step.items.length==1 ? 'grid-cols-1' : step.items.length==2 ? 'grid-cols-2' : 'grid-cols-3'
                                    )}
                                >
                                    {step.items.map((item, itemIdx) => (
                                        <div key={5*stepIdx+itemIdx} className='col-span-1 flex flex-col'>
                                            {item.subItems.map((subItem, subItemIdx) => (
                                                subItem.type == 'checkbox' ? (
                                                    <div key={subItemIdx} className="mt-4 space-y-4 flex flex-col">               
                                                        <div  className="flex items-start">
                                                            <div className="flex h-5 items-center">
                                                                <input
                                                                    type="checkbox"
                                                                    name={subItem.key}
                                                                    checked={data[subItem.key as keyof VizData] as boolean}
                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                    onChange={e => {
                                                                        handleCheckbox(e.target.checked, subItem.key)
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="ml-3 text-sm">
                                                            <p className="font-medium text-gray-700">
                                                                {(subItem as { label: string }).label}
                                                            </p>
                                                            </div>
                                                        </div>                                    
                                                    </div>
                                                ) : (
                                                    <VertSlider key={subItemIdx} item={subItem} data={data} id={itemIdx} handleField={handleField} />
                                                )
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
