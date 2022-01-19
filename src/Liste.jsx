import React from 'react'

const Liste = ({liste,setListe}) => {

    const handleDelete=(element)=>{
        setListe([liste.filter(e=>e!==element)])
    }

    return <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h3> Liste des bookmarks ajoutés</h3>
        <div style={{display:'flex',flexDirection:'column',justifyItems:"space-between",alignItems:'flex-start',flexWrap:'wrap'}}>
        {liste?.length>0 && liste.map(element=><><span key={element}>{element}</span><input type="button" value={"supprimer"} onClick={()=>handleDelete(element)}/></>)}
        </div>
        </div>
    
}

export default Liste