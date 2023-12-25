
import { useState } from 'react'
import './App.css'
import BarChart from './components/BarChart'
import {UserData} from "./Data"
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import DoughnutChart from './components/DoughnutChart'

function App() {

  const [userData, setUserData] = useState({
    labels:UserData.map((data)=>data.year),
    datasets:[{
      label:"Users Gained",
      data: UserData.map((data)=>data.userGain),
      backgroundColor:[
        "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
      ],
      borderColor:["black"],
      borderWidth:2
    }]
  })

  return (
    <div className='App' style={{display:"flex", flexWrap: 'wrap'}}>
      <div style={{width:"500px", height:"300px"}}>
        <BarChart chartData={userData}/>
      </div>
      <div style={{width:"500px", height:"300px"}}>
        <LineChart chartData={userData}/>
      </div>
      <div style={{width:"500px" ,height:"300px"}}>
        <PieChart chartData={userData}/>
      </div>
       <div style={{width:"500px" ,height:"300px"}}>
        <DoughnutChart chartData={userData}/>
      </div>

      

      
    </div>
  )
}

export default App
