import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import LoggedIn from './components/LoggedIn'
import './index.css'
import {ChakraProvider} from "@chakra-ui/react";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path='/user' element={<LoggedIn/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>,
)
