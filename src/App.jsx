import Liste from "./Liste";
import "./App.css";
import Formulaire from "./Formulaire";
import Carte from './Carte'
import { useState } from "react";

const App = () => {
  const [liste, setListe] = useState([]);
  const [datas,setData] =useState([])
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="no-margin">Test React Klaxxon</h1>
        <p className="no-margin">Application de gestion de bookmarks</p>
      </header>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:'15px'}}>
        <Formulaire liste={liste} setListe={setListe} setData={setData}/>
        <Carte provider={datas.provider_name} datas={datas} />
        <Liste liste={liste} setListe={setListe} />
        {console.log(datas)}
      </div>
    </div>
  );
};

export default App;
