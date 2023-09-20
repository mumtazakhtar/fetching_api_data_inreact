import './App.css';
import {useState, useEffect} from "react";

function GithubUser( {name, location} ) {
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


//working with render props
// import './App.css';

// const books = [
//   {name: "get ready", rating: 4.3},
//   {name: "to the success", rating: 4.5},
//   {name: "Back to form", rating: 4.8}
// ];

// function List({data, renderItem, renderEmpty}) {
//   return !data.length ? (renderEmpty) : (
//     <ul>
//       {data.map((item) => (
//         <li key={item.name}>
//           {renderItem(item)}
//         </li>
//        ))
//       }
//     </ul>
//   )
// }

// function App() {
//   return (
//     <List
//       data={books}
//       renderEmpty={<p> Empty books list</p>}
//       renderItem={(item) => (
//         <>
//           {item.name} - {item.rating}
//         </>
//       )
//       }
//     />
//   );
// }
