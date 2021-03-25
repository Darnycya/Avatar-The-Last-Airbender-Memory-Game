# Avatar: The Last Airbender Memory Game

<p align="center">
<img src="https://media.giphy.com/media/l3U8DiMY7FmTFNpZdN/giphy.gif"></p>
        
Avatar: The Last Airbender Memory Game is a replica of the classic memory card game using Nickelodeon's Avatar The Last Airbender characters' images, ReactJS, HTML and CSS.



## Link to Play:
<a href="https://avatar-memory-game.netlify.app/">Click Here</a>



## Objective of the Game:

The objective of the game is to click on one card to flip it over and click on another to find it's match. The user does this until all of the cards on the board are matched and flipped over.



## Benefits of the Game:

Playing memory games can improve other brain functions, such as attention, concentration, and focus. Memory games give space to critical thinking and that helps children nurture their attention to detail. Memory games also can improve visual recognition.



## Timer:

<p align="center">
<img src="https://res.cloudinary.com/darnycya/image/upload/v1616696807/timer_sohd5q.png"></img>

I also installed a timer in the game so the user can keep track of how quickly they can win. 

<a href="https://www.npmjs.com/package/react-timer-hook">``react-timer-hook``</a>



## Modal:

<p align="center">
<img width="500" height="300" src="https://res.cloudinary.com/darnycya/image/upload/v1616697471/Modal_uxn143.png"></img>

There is also a Modal that pops up at the end of the game when the user wins. 

In an ``onClick()`` function I included an if statement: 

``if (completed.length >= 11) {
        resetCompletedAfter(4000)
        toggle();
      }``
      
 That checks to see if all of the characters are in the completed array and if they are the ``resetCompletedAfter()`` function that flipped all of the cards over and the Modal's ``toogle()`` function will be implemented: 
 
 ``function resetCompletedAfter(time) {
      setTimeout(() => {
     setCompleted([])
   }, time)
    }``
    
   