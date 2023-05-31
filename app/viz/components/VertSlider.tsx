import { useState, useRef, useEffect } from 'react';
import styles from '@styles/VertSlider.module.css'

import { SliderData, SliderSubItem } from '../src/sliders'

type VertSliderProps = {
  id: number,
  item: SliderSubItem,
  data: SliderData,
  handleField: (value: any, name: string) => void
}

const WizVertSlider = (props: VertSliderProps): React.ReactElement => {

  const { id, item, data, handleField } = props
  const valueIndicatorRef = useRef<HTMLDivElement>(null)
  const valueInputRef = useRef<HTMLInputElement>(null)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (valueIndicatorRef.current && valueInputRef.current) {
      setRangeValue(valueInputRef.current.value)

      valueIndicatorRef.current.style.fontWeight = '900'
  
      if (parseInt(valueInputRef.current.value) < 25) {
        valueIndicatorRef.current.style.height = '25px'
      } else {
        valueIndicatorRef.current.style.height = parseInt(valueInputRef.current.value) + '%'
      }
  
      if (parseInt(valueInputRef.current.value) < 25) {
        valueIndicatorRef.current.style.color = 'rgb(239 68 68)'
      } else if (parseInt(valueInputRef.current.value) < 75) {
        valueIndicatorRef.current.style.color = 'orange'
      } else {
        valueIndicatorRef.current.style.color = 'green'
      }
    }
  }

  const [rangeValue, setRangeValue] = useState<string>('')

  const handleOnChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (valueIndicatorRef.current && valueInputRef.current) {
      handleOnChange(e)
    }
  }
  
  return (
    <div className="h-full flex flex-col items-center">
      <div className=''>
        {item.topLabel}
      </div>
      <div className='h-full flex'>
        <input 
          id={`slider-${id}`} 
          ref={valueInputRef}
          className={styles.vertSlider} 
          type="range" 
          step={1} 
          value={data[item.key as keyof SliderData] as number}
          min={0} 
          max={100} 
          onChange={e => {
            handleField(e.target.value, item.key)
            handleOnChangeEvent(e)
          }}
        />
        <div className='mb-2 flex flex-col h-100 justify-end'>
          <div ref={valueIndicatorRef} className='-ml-12 text-red-500 font-extrabold'>
            {rangeValue}
          </div>
        </div>
      </div>
      <span className='mt-1 h-[48px] text-center'>{item.bottomLabel}</span>
    </div> 
  )
}

export default WizVertSlider;