import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = ({ bookData }) => {
  return (
    
    <section>
      <header>
        <h1>React Freeshelf</h1>
      </header>
    {bookData.map((book) => (  
      <div className="book-container">
        <div>
          <h1>{book.title}</h1>
          <h2>{book.author}</h2>
          <p>{book.description}</p>
          <Description
          publisher={book.publisher}
          date={book.publicationDate}
          details={book.detailedDescription}
          url={book.url}/>
        </div>
          <img src={book.coverImage} className="book-cover" alt="cover" />
      </div>
  ))}
    </section>
  )};

  const Description = ({url, publisher, date, details}) => {
    const [display, setDisplay] = useState(false)
    const handleClick = (event) => { setDisplay(!display)} 
    return (
  
      <>
      <button onClick={handleClick} 
        type="button" aria-controls="det" aria-expanded={display ? "true" : "false"}>
        <strong>{display ? 'Less' : 'More'} Info</strong></button>
  
      {display && 
      <div id="det" className="info-box">
        <strong>Link:</strong> <a href={url}>{url}</a>
        <p><strong>Description:</strong><br/>{details}</p>
        <p><strong>Publisher:</strong> {publisher ? <>{publisher}</> : "--"} / <strong>
  
          Publication Date:</strong> {date ? <>{date}</> : "--"}</p>
      </div>}
      </>
  )};
  


export default App;
