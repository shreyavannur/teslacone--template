import React from 'react'
import Shreex from './shreex'
import Shreey from './shreey'
import Shreez from './shreez'
import styledComponents from 'styled-components'

function Home() {
  return (
      <HiIamContainer>
    <Shreex
    title="module X"
    description="test"
    backgroundImg="model-x.jpg"
    />
  
    <Shreey
    title="module Y"
    description="test"
    backgroundImg="model-y.jpg"
    />
    
    <Shreez
    title="module z"
    description="test"
    backgroundImg="model-s.jpg"
    />
    
    </HiIamContainer>
  )
}

export default Home
const HiIamContainer=styledComponents.div``