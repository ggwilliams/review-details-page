import React from 'react';
import './App.scss';
import ReviewCardModal, { ReviewCardModalProps } from './components/ReviewCardModal/ReviewCardModal';

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3004/reviews', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      setData(myJson)
    });
  }, []);

  return (
    <div className='app-container' data-testid='app-container'>
      <div className='app-header'>Reviews</div>
      <div className='review-list' data-testid='review-list'>
        {data.map(review => {
          const {
            id,
            author,
            place,
            rating,
            content,
            comment, 
            published_at
          } = review;

          const reviewProps: ReviewCardModalProps = {
            id,
            author,
            place,
            rating,
            content,
            comment,
            publishedAt: published_at
          }
          
          return (
            <ReviewCardModal key={id} {...reviewProps} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
