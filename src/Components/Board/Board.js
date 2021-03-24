import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './Board.css';
import MyTimer from '../MyTimer/MyStopwatch';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';

const Board = props => {
  const [cards, setCards] = useState(props.cards)
  const [checkers, setCheckers] = useState([])
  const [completed, setCompleted] = useState([])


  const {isShowing, toggle} = useModal();

  

  const onCardClick = card => () => {
    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card))
      return
    const newCheckers = [...checkers, card]
    setCheckers(newCheckers)
    const cardsInCheckersMatched = validateCheckers(newCheckers)
    
    if (cardsInCheckersMatched) {
      setCompleted([...completed, newCheckers[0].type])
      
    }

    if (checkersFull(newCheckers)) {
      resetCheckersAfter(1000)
    }
 
    
      if (completed.length >= 11) {
        resetCompletedAfter(4000)
        toggle();
      }
    
    

    function resetCompletedAfter(time) {
      setTimeout(() => {
     setCompleted([])
   }, time)
    }
    
   

    function validateCheckers(checkers){
      return checkers.length === 2 &&
      checkers[0].type === checkers[1].type
    }

    function cardAlreadyInCheckers(checkers, card){
      return checkers.length === 1 && checkers[0].id === card.id
    }

    function checkersFull(checkers){
      return checkers.length === 2
    }

    function resetCheckersAfter(time) {
      setTimeout(() => {
        setCheckers([])
      }, time)
    }
  }

  

  useEffect(() => {
    const newCards = cards.map(card => ({
      ...card,
      flipped:
        checkers.find(c => c.id === card.id) ||
        completed.includes(card.type),
    }))
    setCards(newCards)
  }, [checkers, completed])

  
  




  return (
    <>
      <MyTimer />
      
    <div className="Board">
      {cards.map(card => (
        <Card {...card} onClick={onCardClick(card)} key={card.id} />
      ))}
      </div>

      <div className="App">
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
      </div>
      
      </>
  )
}

export default Board