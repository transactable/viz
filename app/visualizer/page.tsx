import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { Visualizer } from '@models/Visualizer'
import Slider from '@components/Slider'
import Link from 'next/link'
import Image from 'next/image'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Visualizer() {
  return (

    <div className="flex h-screen flex-col items-center justify-between p-24">

      <Link
        href="/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/assets/images/logo.png"
          alt="Copyright Website Logo"
          width={370}
          height={85}
          priority
        />
      </Link>

      <h3 className="text-base font-semibold leading-6 text-gray-900">Fair Use Visualizer</h3>
      <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-5 md:divide-x md:divide-y-0">
        
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-base font-normal text-gray-900">Factor 1</dt>
          <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div>
              <Slider 
                id={1}
                label= 'SubFactor 1 - Use'
                topLabel= 'Non-Commercial'
                bottomLabel= 'Commercial'
                step={5}
                value={0}
                min={0}
                max={100}
                weight={1}
              />
            </div>
            <div>
            <Slider 
                id={2}
                label= 'SubFactor 1 - Transform'
                topLabel= 'Adds To'
                bottomLabel= 'Supplants'
                step={5}
                value={0}
                min={0}
                max={100}
                weight={1}
              />
            </div>
          </dd>
        </div>

        <div className="px-4 py-5 sm:p-6">
          <dt className="text-base font-normal text-gray-900">Factor 2</dt>
          <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div>
            <Slider 
                id={3}
                label= 'Factor 2 - Nature'
                topLabel= 'Not So Much'
                bottomLabel= 'Extremely'
                step={5}
                value={0}
                min={0}
                max={100}
                weight={1}
              />           
            </div>
          </dd>
        </div>

        <div className="px-4 py-5 sm:p-6">
          <dt className="text-base font-normal text-gray-900">Factor 3</dt>
          <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div>
            <Slider 
                id={4}
                label= 'SubFactor 3 - Taken'
                topLabel= '0%'
                bottomLabel= '100%'
                step={5}
                value={0}
                min={0}
                max={100}
                weight={1}
              /> 
             <Slider 
                id={5}
                label= 'SubFactor 3 - Quality'
                topLabel= 'Insubstantial'
                bottomLabel= 'Substantial'
                step={5}
                value={0}
                min={0}
                max={100}
                weight={1}
              /> 
            <Slider 
                id={6}
                label= 'SubFactor 3 - Ratio'
                topLabel= '0%'
                bottomLabel= '100%'
                step={5}
                value={0}
                min={0}
                max={100}
                weight={1}
              /> 
            </div>
          </dd>
        </div>

        <div className="px-4 py-5 sm:p-6">
          <dt className="text-base font-normal text-gray-900">Factor 4 - Market Effect</dt>
          <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div>
            <Slider 
                id={7}
                label= 'SubFactor 4 - Original'
                topLabel= 'Insignificant'
                bottomLabel= 'Extreme'
                step={5}
                value={0}
                min={0}
                max={100}
                weight={1}
              /> 1
            <Slider 
                id={8}
                label= 'SubFactor 4 - Derivative'
                topLabel= 'In'
                bottomLabel= 'Extreme'
                step={5}
                value={0}
                min={0}
                max={100}
                weight={1}
              /> 
            </div>
          </dd>
        </div>

        <div className="px-4 py-5 sm:p-6">
          <dt className="text-base font-normal text-gray-900">Factor 5 - Bonus</dt>
          <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
            <div>
            <Slider 
                id={9}
                label= 'Factor 5 - Bonus'
                topLabel= 'Good Faith'
                bottomLabel= 'Duplicitous'
                step={5}
                value={0}
                min={0}
                max={100}
                weight={1}
              />              
            </div>
          </dd>
        </div>    

      </dl>
    </div>
  )
}
