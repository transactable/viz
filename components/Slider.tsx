'use client';
import { useState, useRef, ReactElement, ChangeEvent } from 'react';
import styles from '@styles/Slider.module.css';

type SliderFormItem = {
  id: number,
  key: string,
  label: string,
  topLabel: string,
  bottomLabel: string,
  step: number,
  value: number,
  min: number,
  max: number,
  weight: number
}

type SliderProps = {
  slider: SliderFormItem,
  updateScore: (e: ChangeEvent<HTMLInputElement>) => void
}

const Slider = ( props: SliderProps): ReactElement => {

  const { slider, updateScore } = props
  const { id, topLabel, bottomLabel, step, value, min, max, weight } = slider

  const valueIndicatorRef = useRef<HTMLDivElement | null>(null)
  const [rangeValue, setRangeValue] = useState<number>(value)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setRangeValue(value)

    if (valueIndicatorRef.current) {
      valueIndicatorRef.current.style.fontWeight = '900'
      valueIndicatorRef.current.style.height = value < 25 ? '25px' : `${value}%`

      if (value < 25) {
        valueIndicatorRef.current.style.color = 'rgb(239 68 68)'
      } else if (value < 75) {
        valueIndicatorRef.current.style.color = 'orange'
      } else {
        valueIndicatorRef.current.style.color = 'green'
      }
    }
    updateScore(e)
  }
  
  return (
    <div className="range-slider flex flex-col items-center my-2">
      <div className='w-100 h-8 flex flex-col justify-center items-center text-center font-extra-bold text-md'>
        {topLabel}
      </div>
      <div className='h-100 flex'>
        <input 
          id={`slider-${id}`} 
          className={styles.Slider} 
          // ref={inputRef} 
          type="range" 
          step={step} 
          value={rangeValue} 
          min={min} 
          max={max} 
          onChange={handleOnChange} 
        />
        <div className='mb-2 flex flex-col h-100 justify-end'>
          <div ref={valueIndicatorRef} className='-ml-12 text-red-500 font-extrabold'>
            {rangeValue}
          </div>
        </div>
      </div>
      <span className='mt-1'>{bottomLabel}</span>
    </div> 
  )
}

export default Slider;