import { useState } from "react"
import Card from "./components/card/card"
import CardType from "./components/card/cardType"
import Competences from "./components/competences/Competences"
import "./styles/App.sass"

function App() {
  return (
    <div className="App">
      <h1>Quentin Devillers</h1>

      {/* MES PROJETS */}
      <section>
        <h2>Mes projets</h2>
        <Card
          data={{
            title: "Overlore",
            description: "Site regroupant héros, histoires et skins du jeu vidéo Overwatch. API php. 2ème développeur Astoryon",
            image: "./images/projets/overlore.jpg",
            tags: ["Typescript", "React", "Api PHP"],
            href: "https://overlore.netlify.app",
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
      </section>

      {/* MES COMPETENCES */}
      <section>
        <h2>Mes compétences</h2>
        <Competences />
      </section>

      {/* FOOTER */}
      <footer className="App__footer"></footer>
    </div>
  )
}

export default App
