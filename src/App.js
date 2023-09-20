import './App.css';
import {useState, useEffect} from "react";

function GithubUser( {name, location} ){
  return (
    <div>
      <h1>{name}</h1>
      <h3>{location}</h3>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/mumtazakhtar`
      ).then((response)=> response.json())
       .then(setData);
  },[]);
  if (data)
    return(
      <GithubUser
        name={data.name}
        location={data.location}
      />
    );
  return <h1>data</h1>
}

export default App;
