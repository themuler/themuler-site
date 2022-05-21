import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Header from "./Header/Header";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";

function App() {
    return (
        <div className="grid grid-cols-side-nav">
            <Header/>
            <main className="ml-2 text-center">
               <Routes>
                   <Route path="/" element={<Home/>}/>
                   <Route path="/projects" element={<Projects/>}/>
               </Routes>
            </main>
        </div>
    );
}

export default App;
