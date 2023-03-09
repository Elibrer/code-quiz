# Online Code Quiz
An interactive online code quiz to test your skills.

![Languages Badge](https://img.shields.io/badge/Languages-3-blue)
![JS Badge](https://img.shields.io/badge/JavaScript-57.4%25-yellow)
![CSS Badge](https://img.shields.io/badge/CSS-27.7%25-blueviolet)
![HTML Badge](https://img.shields.io/badge/HTML-14.9%25-red)


## Deployment link

https://elibrer.github.io/code-quiz/

## Description

This repository contains the code base for an online code quiz, that contains various questions directed towards users who want to test their coding knowledge. The questions are relatively basic, however wrong answers will incur a time penalty - reducing the final score. Once all the quetsions are answered or the timer hits 0, the quiz is over and the user can input their initials and score into the highscores table. 

This project has displayed a further increased knowledge in Javascript, including the use of local storage features so that the highscores table stays filled even when the user refreshes their page. It also utilises for loops and if statements to append elements to existing elements in the HTML (such as the quiz choice buttons and highscore table).

## Table of Contents (Optional)

- [Features](#features)
- [Usage](#usage)
- [Languages Used](#languages-used)
- [Password Generator Preview](#full-preview)
- [Credits](#credits)

## Features

- When the user loads the page, they are presented with an intro screen explaining the quiz.
- Once the user presses the 'start' button the quiz begins.
- Once the quiz begins a new page is displayed, which includes the first question and answers in button form cascading underneath.
- Once a choice is selected, either:
    a) the answer is correct and the next question + choices loads, or 
    b) the answer is incorrect and time is deducted, reducing the users score. Then the next question + choices is displayed.
- Once the quiz is over or the timer hits zero, the submit highscores screen appears, which lets the user enter their initials & score to submit into the highscores table.
- Once the score is submitted using the button, the users initials and score will appear in the highscores tab. All scores are sorted into descending order.
- When the submit button is pressed, the user is directed to a page which allows them to either clear the existing scores on the highscores table, or restart the quiz from the introduction page. 

## Usage

This online quiz is for programmers and programming students to test their knowledge on an array of basic coding questions. These questions are simple for those who have been in the industry for a small amount of time, however beginners might struggle with some of the answers.

## Languages Used
- ### **HTML**
- ### **CSS**
- ### **JavaScript**

## Password Generator Preview

![Image of the code quiz's introduction page, with the timer, start button, quiz description, and highscore table displayed.](./assets/images/Screenshot%202023-03-09%20at%208.41.59%20pm.png "Code Quiz preview")


## Credits

### *Resources utilised from various websites:*

[Button click on enter press](https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp)

[Sort object by number](https://stackoverflow.com/questions/1069666/sorting-object-property-by-values)

[setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)

[Stopping intervals](https://code.mu/en/javascript/book/prime/timers/timer-stopping/#:~:text=To%20stop%20the%20timer%2C%20use,the%20timer%20to%20be%20stopped.&text=Let%20a%20variable%20be%20given,this%20value%20to%20the%20console.)

[Object within Array](https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/)

[Glossary of Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)

[Best practices for creating quality meta descriptions](https://developers.google.com/search/docs/appearance/snippet)


[Input tags](https://www.w3schools.com/tags/tag_label.asp)

[Telephone input type](https://www.w3schools.com/tags/att_input_type_tel.asp)

[Creating links in a README.md file](https://docs.readme.com/main/docs/linking-to-pages)

[Badge generator](https://shields.io/)



