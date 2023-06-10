import React from 'react'
// import ReactDOM from 'react'
import {createRoot} from 'react-dom/client'
import EmployeeList from './EmployeeList.jsx'


const root = createRoot(document.getElementById('content'))
root.render(
    <React.StrictMode>
        <EmployeeList />
    </React.StrictMode>, 
    document.getElementById('content'))