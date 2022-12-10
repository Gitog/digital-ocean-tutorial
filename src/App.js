import './App.css';

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
    </div>
  
  )
}

export default App;
