import React from 'react'
import styledComponents from 'styled-components'


function Shreex({backgroundImg,title,description}) {
  return (
    <Wrap bgImage={backgroundImg}>
    <TeslaTitle>
        <h1>
            {title}
        </h1>
        <p1>
            {description}
        </p1>
    </TeslaTitle>
    </Wrap>    

  )
}

export default Shreex
const Wrap=styledComponents.div`
width:50%;
height:50vh;
float:left;
background-size:cover;
background-position:center;
background-repeat:no-repeat;s
display:flex;
flexdirection:'row';
justify-content:center;  
align-item:center;
background-image: ${props=>`url("/images/${props.bgImage}")`}
`

const TeslaTitle=styledComponents.div`
paddingTop:15vh;
text-align:center;
`