import './App.css'
import Card from "./components/Card/"

const pokemons = [
  {
    name: "Squirtle",
    imageUrl: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png",
  },
  {
    name: "Charmander",
    imageUrl: "https://www.pngmart.com/files/13/Pokemon-Charmander-PNG-Pic.png",
  },
  {
    name: "Bulbasaur",
    imageUrl: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  }
]

function App() {

  return (
    <>
      <h1>Pokemons</h1>
      <div className='cards'>
      {pokemons.map((item) => {
          return <Card item={item} />;
        })}
      </div>
    </>
  )
}

export default App
