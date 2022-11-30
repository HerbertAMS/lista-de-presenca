import React, {useState, useEffect} from 'react';
import {Card} from '../../components/Card'

import './style.css'


export function Home() {
  const [studentName, setStudentName] = useState()
  const [students, setStudents] = useState([])

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br",{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })

    };

    
    setStudents(prevState => [...prevState, newStudent]) 
  }

  return (
    <div className='container'>
      <header>
          <h1>Lista de presença</h1>
        <div>
          <strong>Herbert Severino</strong>
          <img src="https://github.com/HerbertAMS.png" alt="Foto de perfil" />
        </div>
      </header>
      <input 
        type="text" 
        placeholder="Digite o seu nome..." 
        onChange={e =>  setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>
      
      {
        students.map(student => 
        <Card 
        key={student.time}
        name={student.name} 
        time={student.time}
        />)
      }

    </div>
  )
}

