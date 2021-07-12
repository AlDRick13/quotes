import { useState } from 'react';
import './App.css';
import QuoteBox from './components/quoteBox';

function App() {
  const getRandomQuote = () => {
    return Math.floor(Math.random() * 102)
}
  const [randomNumber, setRandomNumber] = useState(getRandomQuote(0,101))

  const changeBgColor = () => {
  return '#' + Math.random().toString(16).slice(2,8);
}
  const [randomColor, setRandomColor] = useState(changeBgColor())

  return (
    <div className="App">
      <header className="App-header" style={{
        backgroundColor: randomColor,
        color: randomColor
        
        
      }}>
       
        <QuoteBox randomNumber={randomNumber}/>
        <button className="btn" onClick={()=>{
            const numb = getRandomQuote
            const colorNum = changeBgColor
            setRandomNumber(numb)
            setRandomColor (colorNum)
                }}>New Quote</button>
        
      </header>
    </div>
  );
}

export default App;
