import React from 'react'
import { useState } from 'react';

export default function Tems({tems , setTems , to , setTo}) {
    


    const remove = (e)=>{
        const element = document.getElementById(`bata-${e}`);
    if (element) {
      element.style.display = "flex";
    }
        
        const a = tems.filter(it => it.id !== e)
        setTems(a);
        alert("remove")
    }
  return (
    <div className='tems'>
        <div style={{
            width:"100%"
        }}>
            <h1>TEAM</h1>
        {
            tems.map((e)=>{
                return(
                    <div key={`*${e.id}`} className='items'>
                        <p>{e.first_name} {e.last_name}</p>
                        <p>{e.age}</p>
                        <button onClick={() => remove(e.id)}>Remove</button>
                    </div>
                )
            })
        }
        </div>
        <div className='total'>
            <h3>average age</h3>
            <h3>{to}</h3>
            </div>
    </div>
  )
}
