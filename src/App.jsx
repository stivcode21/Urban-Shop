import React from 'react'
import { FlexContent, Hero, Sales, Slider } from './components'
import { heroapi, popularsales, toprateslaes, sneaker, highlight } from './data/data'


const App = () => {
  return (
    <>
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales data={popularsales} ifExists />
        <FlexContent data={sneaker} />
        <Sales data={toprateslaes} />
        <FlexContent data={highlight} ifExists />
        <Slider />
      </main>
    </>
  )
}

export default App