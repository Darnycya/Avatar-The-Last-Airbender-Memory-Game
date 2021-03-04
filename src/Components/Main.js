import React from 'react'
import Board from '../Components/Board/Board'
import Appa from '../Assets/Images/Appa.png'
import Katara from '../Assets/Images/Katara.jpeg'
import PrinceZuko from '../Assets/Images/Prince_Zuko.jpg'
import Sokka from '../Assets/Images/Sokka.png'
import Toph from '../Assets/Images/Toph.jpg'
import Aang from '../Assets/Images/Aang.jpg'
import backImg from '../Assets/Images/Logo.jpg'
import Iroh_smiling from '../Assets/Images/Iroh_smiling.png'
import Mai from '../Assets/Images/Mai.png'
import momo from '../Assets/Images/momo.jpg'
import Tylee from '../Assets/Images/Tylee.png'
import Azulaa from '../Assets/Images/Azulaa.png'
import Bumi from '../Assets/Images/Bumi.jpeg'


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
  const images = {Aang, Appa, Katara, PrinceZuko, Sokka, Toph, Iroh_smiling, Mai, momo, Tylee, Azulaa, Bumi }
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
  return shuffle(cards)
}

function shuffle(arr) {
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