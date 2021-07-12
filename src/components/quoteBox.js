import Data from '../quotes.json'

const QuoteBox = ({randomNumber}) => {
return (
    <div className="quoteBox">
        <p>{Data.quotes[randomNumber].quote} </p>
        <p>- {Data.quotes[randomNumber].author}</p>
    </div>
)}

export default QuoteBox