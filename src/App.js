import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import ProfilList from './compo/profilList';
import ProfilHeader from './compo/ProfilHeader';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function App() {
  const [data, setData] = useState([]); // where to store the returned data
  const [error, setError] = useState(null); 
  const [serch, setsecrch]=useState("")
  useEffect(() => {
    function fetchData() {
      axios.get("https://jsonplaceholder.typicode.com/users") 
        .then(res => setData(res.data))
        .catch(err => setError(err)); 
    }
 
    fetchData();
  }, []);
  const handleSerch=(e)=>{
    let value=e.target.value;
    value.length<2?(setsecrch("")):setsecrch(value)
};
  return (
    <>
    <ProfilHeader/><div style={{textAlign:'center'}}>
    <h4 style={{color:'rgb(209, 103, 121)', fontSize:'30px'}}>serch by name</h4>
    <Form  style={{ marginTop:'-40px'}}>
    <Form.Control 
               
                className="mb-2"
                id="inlineFormInput"
                placeholder='serch by name'
                onChange={handleSerch}
              />
    </Form></div>
    <div className="flex-container">
      {data.filter((y)=>{
    return y.name.toLowerCase().includes(serch.toLowerCase())

}).map(profil =>{return <ProfilList 
      key={profil.id} 
      username={profil.username} 
      name={profil.name} 
      street={profil.address.street}
      sweet={profil.address.sweet}
      city={profil.address.city}
      mail={profil.email}
      phone={profil.phone}/>})}
  </div></>
  );
 };

export default App;
