import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import './Board.css';
import Appa from '../../Assets/Images/Appa.png';
import Katara from '../../Assets/Images/Katara.jpeg';
import PrinceZuko from '../../Assets/Images/Prince_Zuko.jpg';
import Sokka from '../../Assets/Images/Sokka.png';
import Toph from '../../Assets/Images/Toph.jpg';
import Aang from '../../Assets/Images/Aang.jpg';
import backImg from '../../Assets/Images/Logo.jpg';
import Iroh_smiling from '../../Assets/Images/Iroh_smiling.png';
import Mai from '../../Assets/Images/Mai.png';
import momo from '../../Assets/Images/momo.jpg';
import Tylee from '../../Assets/Images/Tylee.png';
import Azulaa from '../../Assets/Images/Azulaa.png';
import Bumi from '../../Assets/Images/Bumi.jpeg';

const Board = props => {
  const deck = buildCards();
  const [cards, setCards] = useState(deck);
  const [checkers, setCheckers] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const { isShowing, toggle } = useModal();
  const [isGameCompleted, setIsGameCompleted] = useState(false); // Track game completion

  const onCardClick = card => () => {
    if (!isTimerStarted) {
      setIsTimerStarted(true);
      if (props.startTimer) {
        props.startTimer();
      } else {
        console.error("startTimer is not defined in props");
      }
    }

    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return;

    const newCheckers = [...checkers, card];
    setCheckers(newCheckers);
    const cardsInCheckersMatched = validateCheckers(newCheckers);

    if (cardsInCheckersMatched) {
      setCompleted(prev => [...prev, newCheckers[0].type]);
    }

    if (checkersFull(newCheckers)) {
      resetCheckersAfter(1000);
    }

    if (completed.length === 12 && !isGameCompleted) {
      setIsGameCompleted(true); // Set game completion flag
      openModal(); // Show the modal when all cards are correct
      if (props.stopTimer) {
        props.stopTimer(); // Stop the timer if `stopTimer` is passed as a prop
      }
    }

    function resetCheckersAfter(time) {
      setTimeout(() => {
        setCheckers([]);
      }, time);
    }

    function validateCheckers(checkers) {
      return checkers.length === 2 && checkers[0].type === checkers[1].type;
    }

    function cardAlreadyInCheckers(checkers, card) {
      return checkers.length === 1 && checkers[0].id === card.id;
    }

    function checkersFull(checkers) {
      return checkers.length === 2;
    }
  };

  const openModal = () => {
    toggle(); // Open the modal
  };

  const handleModalClose = () => {
    const resetCards = cards.map(card => ({
      ...card,
      flipped: false,
    }));
    setCards(resetCards);
    setCompleted([]); // Reset completed matches
    setCheckers([]); // Reset checkers
    setIsTimerStarted(false); // Reset timer state
    setIsGameCompleted(false); // Reset game completion flag
    toggle(); // Close the modal
  };

  // Build Cards Function
  function buildCards() {
    let id = 0;
    const images = {
      Aang, Appa, Katara, PrinceZuko,
      Sokka, Toph, Iroh_smiling, Mai, momo, Tylee, Azulaa, Bumi,
    };
    const cards = Object.keys(images).reduce((result, item) => {
      const getCard = () => ({
        id: id++,
        type: item,
        backImg,
        frontImg: images[item],
        flipped: false,
      });
      return [...result, getCard(), getCard()];
    }, []);
    return shuffle(cards);
  }

  // Shuffle Function
  function shuffle(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      let randomIdx = Math.floor(Math.random() * len);
      let copyCurrent = { ...arr[i] };
      let copyRandom = { ...arr[randomIdx] };
      arr[i] = copyRandom;
      arr[randomIdx] = copyCurrent;
    }
    return arr;
  }

  useEffect(() => {
    const newCards = cards.map(card => ({
      ...card,
      flipped: checkers.find(c => c.id === card.id) || completed.includes(card.type),
    }));
    setCards(newCards);

    // eslint-disable-next-line
  }, [checkers, completed]);

  return (
    <>
      <div className="Board">
        {cards.map(card => (
          <Card {...card} onClick={onCardClick(card)} key={card.id} />
        ))}
      </div>

      <div className="App">
        <Modal isShowing={isShowing} hide={handleModalClose} />
      </div>
    </>
  );
};

export default Board;
