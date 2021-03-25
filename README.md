# Avatar: The Last Airbender Memory Game

<p align="center">
<img src="https://gph.is/g/ZP8gV67"></img></br></p>

Avatar: The Last Airbender Memory Game is a replica of the classic memory card game using Nickelodeon's Avatar The Last Airbender character images, ReactJS, HTML and CSS.
</br>
</br>
</br>
## Link to Play:
<a href="https://avatar-memory-game.netlify.app/">Click Here</a>
</br>
</br>
</br>

## Objective of the Game:

The objective of the game is to click on one card to flip it over and click on another to find it's match. You do this until all of the cards on the board are matched and flipped over.

</br>
</br>
</br>


## Benefits of the Game:

Playing memory games can improve other brain functions, such as attention, concentration, and focus. Memory games give space to critical thinking and that helps children nurture their attention to detail. Memory games also can improve visual recognition.

</br>
</br>
</br>


## Timer:

<p align="center">
<img src="https://res.cloudinary.com/darnycya/image/upload/v1616696807/timer_sohd5q.png"></img>

I also install a timer in the game so the user can keep track of how quickly they can win. 

<a href="https://www.npmjs.com/package/react-timer-hook">``react-timer-hook``</a>

</br>
</br>
</br>


## Modal:

<p align="center">
<img src="https://res.cloudinary.com/darnycya/image/upload/v1616697471/Modal_uxn143.png"></img>

There is also a Modal that pops up at the end of the game when the user wins. 

In an onClick function I included an if statement: 

``      if (completed.length >= 11) {
        resetCompletedAfter(4000)
        toggle();
      }
    
    

    function resetCompletedAfter(time) {
      setTimeout(() => {
     setCompleted([])
   }, time)
    }``