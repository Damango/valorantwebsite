import React from 'react';
import MainBody from "./components/MainBody/MainBody";
import Card from "./components/Card/Card"
import './App.css';
import { useState } from 'react'
import Arsenal from "./components/Arsenal/Arsenal"
function App() {

  const [appView, setAppView] = useState(0)


  function viewHandler(childData) {


    if (childData === 0) {
      setAppView(0)
    }
    else if (childData === 1) {
      setAppView(1)

    }
    else if (childData === 2) {
      setAppView(2)

    }
    else if (childData === 3) {
      setAppView(3)
    }
  }


  function renderView() {

    if (appView === 0) {
      return (<MainBody>


        <Card cardID={1} changeView={viewHandler} />
        <Card cardID={2} changeView={viewHandler} />
        <Card cardID={3} changeView={viewHandler} />

      </MainBody>)
    }
    else if (appView === 1) {
      return <Arsenal closeWindow={viewHandler} />
    }

    else if (appView === 2) {
      return <Arsenal closeWindow={viewHandler} />
    }

  }


  return (
    <div className="App">
      {renderView()}

    </div>
  );
}

export default App;
