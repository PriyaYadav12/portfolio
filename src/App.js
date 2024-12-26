import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; 
import ProjectScreen from './screen/ProjectScreen';
import ResumeScreen from './screen/ResumeScreen';
import TemplateScreen from './screen/TemplateScreen';

// Reusable Grid section component

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/screen/project" element={<ProjectScreen />} />
        <Route path="/screen/resume" element={<ResumeScreen />} />
        <Route path="/screen/template" element={<TemplateScreen />} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
