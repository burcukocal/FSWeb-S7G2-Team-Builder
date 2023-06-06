import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import { useState } from 'react';

function App() {
  
const [ekipUyeleri, setEkipUyeleri] = useState([]);
const [editId, setEditId] = useState(null);

const editHandler = (id) => {
 setEditId(id);
};

  return (
    <div className="App">
      <h1>Ekip Üyeleri</h1>
      <Form setEkipUyeleri={setEkipUyeleri} editId={editId} ekipUyeleri={ekipUyeleri}/>
      {ekipUyeleri.map(uye => (
        <div key = {uye.id}>
          <span>{uye.firstName + " " + uye.surname}</span>
          <span>
            <button onClick={() => editHandler(uye.id)}>Düzelt</button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default App;
