import React from 'react'

const Carte = ({datas,provider}) =>{

    return <div style={{display:'flex',flexDirection:'column'}}>
        <h3>{`Type de document: ${provider}`}</h3>
        <img src={datas.thumbnail_url_with_play_button} alt="" width={datas.width} height={datas.height} />
        {['url','title','author_name',"upload_date",'width','height'].map(element=><span>{`${element}: ${datas[element]}`}</span>)}

    </div>
}

export default Carte
