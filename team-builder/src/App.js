import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import MemberList from "./components/MemberList";
import Form from "./components/Form";
import data from "./data";


function App() {
  const [members, setMembers] = useState([])
  useEffect(() => {
    setMembers(data)
  }, [])
  const addTeamMate = mate => {
    setMembers([...members, mate])
  }
  return (
    <div className="App">
      <Form addTeamMate={addTeamMate} />
      {members.map(member => {
        return <MemberList key={member.email} info={member}/>
        
      })}
    </div>
  );
}

export default App;
