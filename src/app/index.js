"use client";

import Image from "next/image";
import bg from "../../public/image.png"
import "./page.css";
import { Routes, Route } from 'react-router-dom';
import {H} from './main.js'
import Fu from './eff/effyou.js'

import { BrowserRouter } from 'react-router-dom';



export default function Home() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<H />}></Route>
    <Route path='/a' element={<Fu />}></Route>
    </Routes>
    </BrowserRouter>
  );
}
