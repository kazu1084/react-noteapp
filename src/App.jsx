import './App.css';
import Main from './components/Main.jsx';
import Sidebar from './components/Sidebar.jsx';
import React, { useState, useEffect } from 'react';
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [activeNote,setActiveNote] = useState(false);
  
  useEffect(() => {
    //ローカルストレージにノートのデータを一時的に保存
    localStorage.setItem("notes", JSON.stringify(notes));
  },[notes]);
  
  useEffect(() => {
    //ページを開いときに一番上のnoteを選択した状態にする
    setActiveNote(notes[0].id);
  },[]);
  
  const onAddNote = () => {
     const newNote = {
       id: uuid(),
       title: "新しいノート",
       content:"",
       modDate: Date.now(),
     };
     setNotes([...notes, newNote]);
     console.log(notes);
    };
    
  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };
  
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };
  
  const onUpdateNote = (updatedNote) => {
    // 修正された新しいノートの配列を返す
    const updateNotesArray = notes.map((note) => {
      if(note.id === updatedNote.id ) {
        return updatedNote;
      }else{
        return note;
      }
    });
    setNotes(updateNotesArray);
  };
  
  return (
    <div className = "App">
      <Sidebar onAddNote = {onAddNote} 
        notes = {notes} 
        onDeleteNote = {onDeleteNote}
        activeNote = {activeNote}
        setActiveNote = {setActiveNote}
      />
      <Main activeNote = {getActiveNote()}
        onUpdateNote = {onUpdateNote}
      />
    </div>
  )
}

export default App
