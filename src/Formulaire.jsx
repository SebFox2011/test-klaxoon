import React,{useEffect,useState} from "react";
import useFetch from "./useFetch";

const Formulaire = ({liste,setData,setListe}) => {
    const API = 'https://noembed.com/embed?url=';
    const regexConst = new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/);
    const [{ data, isLoading, isError }, setUrl] = useFetch(API+URL,[])
    const [text,setText] = useState('')

    useEffect(()=>{
        setData(data)
    },[data])

const handleSaveUrl =() => {
    const isUrl = (regexConst.test(text) && text.includes('vimeo')) || (regexConst.test(text) && text.includes('flick'))
    setListe(isUrl ?[...liste,text] : [...liste])
}

  const handleSubmt = (e) => {
    e.preventDefault();
    setUrl(API+text)
    setText('')
  };

  return (
    <div>
        {isLoading?'chargement':null}
        {isError?'Une erreur est survenue':null}
      Formulaire 
      <form onSubmit={handleSubmt}>
        <input type="text"  value={text} onChange={e=>setText(e.target.value)}/>
        <input type="submit" value="Envoi" onClick={handleSaveUrl} />
      </form>
    </div>
  );
};

export default Formulaire;
