import Image from "next/image";
import bg from "../../public/image.png"
import "./page.css";
import { Routes, Route } from 'react-router-dom';


export default function Page() {
  return (
    <div
      className="bg-image"
    >
      <div className="gif">

      </div>
      <div>
        <a className="b" href="/effyou">
            Click me!!! 🥰🥰
        </a>
      </div>
    </div>
  );
}
