import React from 'react'

const Liste = ({liste,setListe}) => {

    const handleDelete=(element)=>{
        setListe([liste.filter(e=>e!==element)])
    }

    return <div>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h3> Liste des bookmarks ajoutés</h3>
        {liste?.length>0 && liste.map(element=><div style={{display:'flex',flexDirection:'row',justifyItems:"space-around"}}><span key={element}>{element}</span><input type="button" value={"supprimer"} onClick={()=>handleDelete(element)}/></div>)}
        </div>
    </div>
}

export default Liste