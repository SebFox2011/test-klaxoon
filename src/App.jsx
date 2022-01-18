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
      <Formulaire liste={liste} setListe={setListe} setData={setData}/>
      <p>{datas?.provider_name}</p>
      <Carte provider={datas.provider_name} datas={datas} />
      {console.log(datas)}
      <Liste liste={liste} />
    </div>
  );
};

export default App;
