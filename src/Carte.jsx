import React from 'react'

const Carte = ({datas,provider}) =>{

    const vimeoTab =['url','title','author_name',"upload_date"]
    const flickrTab=['url','title','author_name','width','height']

    return <div style={{display:'flex',flexDirection:'column',margin:'15px',alignItems:'center'}}>
        <h3>{`Type de document:  ${provider?provider:'pas de document chargé'}`}</h3>
        {datas?.thumbnail_url?<img src={datas.thumbnail_url} alt="Description " width={datas.thumbnail_width} height={datas.thumbnail_height} />:"Pas d'image"}
        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}> 
            {provider==='Vimeo'? vimeoTab.map(element=><span>{`${element}: ${datas[element]}`}</span>):provider==='Flickr'?flickrTab.map(element=><span>{`${element}: ${datas[element]}`}</span>):null}
        </div>
    </div>
}

export default Carte
