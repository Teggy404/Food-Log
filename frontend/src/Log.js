import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import MacroPanel from './components/Macros';
import LogTable from './components/LogTable'

function Log(){
    return(
        <div>
            <Navigation />
            <MacroPanel />
            <LogTable />
        </div>
    );
}

export default Log;