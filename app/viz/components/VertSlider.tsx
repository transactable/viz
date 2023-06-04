import { useState, useRef, useEffect } from 'react';
import styles from '@styles/VertSlider.module.css'

// import { VizData, VizSubItem } from '@models/Viz'
import { Visualizer, VisualizerSliderSubItem } from '@models/Visualizer'

type VertSliderProps = {
  id: number,
  dataKeyName: string,
  item: VisualizerSliderSubItem,
  data: Visualizer,
  handleField: (value: any, name: string) => void
}

const WizVertSlider = (props: VertSliderProps): React.ReactElement => {

  const { id, dataKeyName, item, data, handleField } = props
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
      <div className='mb-1'>
        {item.topLabel}
      </div>
      <div className='h-full flex'>
        <input 
          id={`slider-${id}`} 
          ref={valueInputRef}
          className={styles.vertSlider} 
          type="range" 
          step={1} 
          value={data[dataKeyName as keyof Visualizer] as number}
          // value={0}
          min={0} 
          max={100} 
          onChange={e => {
            handleField(e.target.value, dataKeyName)
            handleOnChangeEvent(e)
          }}
        />
        <div className='mb-2 flex flex-col h-100 justify-end'>
          <div ref={valueIndicatorRef} className='-ml-12 text-red-500 font-extrabold'>
            {rangeValue}
          </div>
        </div>
      </div>
      <span className='h-[48px] text-center leading-tight'>{item.bottomLabel}</span>
    </div> 
  )
}

export default WizVertSlider;