import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Header from "./Header/Header";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";

function App() {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <Header/>
            <main>
               <Routes>
                   <Route path="/" element={<Home/>}/>
                   <Route path="/projects" element={<Projects/>}/>
               </Routes>
            </main>
        </div>
    );
}

export default App;
