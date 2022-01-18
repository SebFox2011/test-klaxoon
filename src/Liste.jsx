import React from 'react'

const Liste = ({liste}) => {

    return <div>
        <ul style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        {liste?.length>0 && liste.map(element=><div style={{display:'flex',flexDirection:'row',justifyItems:"space-around"}}><li key={element}>{element}</li><input type="button"/></div>)}
        </ul>
    </div>
}

export default Liste