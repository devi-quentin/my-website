import { useState } from "react"
import Card from "./components/card/card"
import CardType from "./components/card/cardType"
import "./styles/App.sass"

function App() {
  return (
    <div className="App">
      <h1>Quentin Devillers</h1>

      {/* MES PROJETS */}
      <h2>Mes projets</h2>
      <Card
        data={{
          title: "Nom du projet",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
          image: "https://loremflickr.com/640/360",
          tags: ["Javascript", "React", "SASS"],
          href: "#",
          activated: true,
        }}
      />

      <Card
        data={{
          title: "Nom du projet",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
          image: "https://loremflickr.com/640/360",
          tags: ["Javascript", "React", "SASS"],
          href: "#",
          activated: true,
        }}
      />

      {/* MES COMPETENCES */}
      <h2>MES COMPETENCES</h2>

      {/* FOOTER */}
      <footer className="App__footer"></footer>
    </div>
  )
}

export default App
