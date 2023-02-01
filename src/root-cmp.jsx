import React from "react";
import {Routes, Route} from 'react-router'
import { HomePage } from "./pages/home-page";

export function RootCmp() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/explore" element={<HomePage />}/>
        </Routes>
      </main>
    </div>
  );
}

