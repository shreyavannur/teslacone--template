import React from 'react'
import styledComponents from 'styled-components'


function Shreey({backgroundImg,title,description}) {
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

export default Shreey
const Wrap=styledComponents.div`
width:50%;
float:right;
height:50vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
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