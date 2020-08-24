import React, {useState} from 'react'
import Board from '../Components/Board/Board'
import Appa from '../Assets/Images/Appa.png'
import Katara from '../Assets/Images/Katara.jpeg'
import PrinceZuko from '../Assets/Images/Prince_Zuko.jpg'
import Sokka from '../Assets/Images/Sokka.png'
import Toph from '../Assets/Images/Toph.jpg'
import Aang from '../Assets/Images/Aang.jpg'
import backImg from '../Assets/Images/Logo.jpg'


function Main() {
  const cards = buildCards()
  return (
    <div className="App">
      <Board cards={cards} />
    </div>
  )
}

export default Main

function buildCards() {
  let id = 0
  const images = {Aang, Appa, Katara, PrinceZuko, Sokka, Toph}
  const cards = Object.keys(images).reduce((result, item) => {
    const getCard = () => ({
      id: id++,
      type: item,
      backImg,
      frontImg: images[item],
      flipped: false,
    })
    return [...result, getCard(), getCard()]
  }, [])
  return suffle(cards)
}

function suffle(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let randomIdx = Math.floor(Math.random() * len)
    let copyCurrent = {...arr[i]}
    let copyRandom = {...arr[randomIdx]}
    arr[i] = copyRandom
    arr[randomIdx] = copyCurrent
  }
  return arr
}