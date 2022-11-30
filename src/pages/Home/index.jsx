import React, {useState} from 'react';
import {Card} from '../../components/Card'

import './style.css'


export function Home() {
  const [studentName, setStudentName] = useState()

  return (
    <div className='container'>
      <h1>Nome: {studentName}</h1>
      <input 
        type="text" 
        placeholder="Digite o seu nome..." 
        onChange={e =>  setStudentName(e.target.value)}
      />
      <button type="button">Adicionar</button>
      
      <Card name="Herbert Severino" time="11:34:02"/>
      <Card name="Geise Severino" time="12:05:59"/>
      <Card name="Margarida Moreira" time="12:09:05"/>
    </div>
  )
}

