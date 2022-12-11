import './App.css';
import AnimalCard from './pages/AnimalCard';
import Data from './components/Data';
import Instructions from './components/Instructions';

function App() {
  const greetings = "Hello, World"
  const displayAction = true;
  function showAlert(event){
    alert(event.target.id)
  }

  const emojis = [
    {
      emoji: "😃",
      name: "grinning face"
    },
    {
      emoji: "🥳",
      name: "party popper"
    },
    {
      emoji: "👩‍🎤",
      name: "woman dancing"
    }
  ]
  return (
    <div className='container'>
    <h1>{greetings}</h1>
   {displayAction && <p>I'm writing JSX</p> }

   <Instructions />

    <ul>
      {
        emojis.map(emoji => (
          <li key={emoji.name}>
            <button onClick={showAlert}>
              <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
            </button>
          </li>
        ))
      }
     </ul>
     <h1>Animals</h1>
     {Data.map(animal=>(
      <AnimalCard 
      key={animal.name}
      name= {animal.name}
      scientificName={animal.scientificName}
      size={animal.size}
      />
     ))}
    </div>
  
  )
}

export default App;
