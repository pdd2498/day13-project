import React, { useEffect } from 'react'
// import Data from '../Data'
import { useState } from 'react';
import Tems from './Tems';

export default function Employs() {
const emp = require('../Data');
const [tems , setTems] = useState([]);
const [employees , setEmp] = useState(emp.employees);
// console.log(employees[0]);

const [to , setTo] = useState(0);
    const totales = ()=>{
      if(tems.length !== 0){
        let h = tems.reduce((a,e)=> a + e.age, 0 );
        console.log("habhai", h);
        setTo(h/tems.length)
      }
      else setTo(0);
    }

const add = (id)=>{
    const element = document.getElementById(`bata-${id}`);
    if (element) {
      element.style.display = "none";
    }
    const a = [...tems , employees[id-1]]
    
    setTems(a)
    console.log(tems);
}

useEffect(()=>{
  totales()
},[tems])
    
  return (
    <div className='mainDiv'>
        
        <div className='employess'>
        <h1>EMPLOYESS</h1>
            {
                employees.map((e)=>{
                    return(
                        <div key={e.id} id={`bata-${e.id}`} className='items'>
                            <p>{e.first_name} {e.last_name}</p>
                            <p>{e.age}</p>
                            <button onClick={() => add(e.id)} >ADD</button>
                        </div>
                    )
                })
            }
         </div>
        <Tems tems = {tems} setTems = {setTems} to = {to} setTo={setTo}/>
    </div>
  )
}
