import { useEffect, useState } from "react"
//import { v1 as uuidv1 } from "uuid"
import { getAllLaunches, getLaunchById,getRockets } from './service'

const Launches = ({ name, avatar, date , rocket}) => {
  return (
      <div onClick={()=>{
         <p>{rocket}</p>
         console.log(rocket)
      }}> 
          <img src={avatar} alt={`${name}'s avatar`} />
          <p>{name}</p>
          <p>{date}</p>
          <hr />
      </div>
  )
}
// const Launch = ({ name, avatar, date }) => {
//   return (
//       <div>
//           <img src={avatar} alt={`${name}'s avatar`} />
//           <p>{name}</p>
//           <p>{date}</p>
//           <hr />
//       </div>
//   )
// }

const App = () => {
console.log('pocetak')
const [launches, setLaunches] = useState([])

const [ rockets, setRockets] = useState([]);
    const [ select, setSelect ] = useState(0)

useEffect(() => {
    getAllLaunches().then(res => {
      setLaunches(res.data)
      setSelect(res.data.length)
    }) 
    getRockets().then(res => {
      setRockets(res.data);
  })
    
  }, [])


  return (
    <div className="App">
      <h1>pocetak</h1>
      <select onChange={(e) => {
            setSelect(e.target.value)
        }} >
            <option value={launches.length}>All</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
        </select>
  {/* {launches.map(launch => <img src={launch.links.patch.small}/> )}
        <p>{launch.name}</p> */}
        
        {launches.map(launch => <Launches key={launch.id
        } name={launch.name} 
        avatar={launch.links.patch.small} 
        date={launch.static_fire_date_unix}
       rocket={launch.rocket}/>)}

        <button onClick={() => {
                getLaunchById(launches[0].id).then(res =>{
                  
                  console.log(res.data)
            setLaunches([res.data])
                                      
                })
                
            }}>Dohvati prvog</button>
    </div>
    
  );
}

export default App;
