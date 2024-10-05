import React from 'react'
import { FlexContent, Hero, Sales, Slider, AutoScrollSlider } from './components'
import { heroapi, popularsales, toprateslaes, sneaker, highlight, story, slider } from './data/data'

const App = () => {
  return (
    <>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <AutoScrollSlider data={slider} />
        <Sales data={popularsales} ifExists />
        <FlexContent data={sneaker} />
        <Sales data={toprateslaes} />
        <FlexContent data={highlight} ifExists />
        <Slider data={story} />
      </main>
    </>
  )
}

export default App