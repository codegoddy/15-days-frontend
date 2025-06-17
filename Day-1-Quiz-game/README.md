# Quiz Game

A simple, interactive quiz application built with HTML, CSS, and JavaScript.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [File Structure](#file-structure)
- [Browser Support](#browser-support)
- [License](#license)

## Features

✔ Multiple-choice questions about world capitals  
✔ Real-time progress tracking  
✔ Instant scoring and feedback  
✔ Responsive design for all devices  
✔ Visual indicators for correct/incorrect answers  
✔ Restart functionality

## Installation

1. Clone the repository or download the files
2. Open `index.html` in any modern web browser

No additional dependencies or server required!

## Usage

1. Click "Start Quiz" button
2. Select your answer for each question
3. Immediate feedback will show correct answers
4. View your final score and performance message
5. Option to restart the quiz

## Customization

### Modify Questions:

Edit the `quizQuestions` array in `script.js`:

```javascript
{
    question: "Your question here",
    answers: [
        {text: "Option 1", correct: true},
        {text: "Option 2", correct: false},
        ...
    ]
}
````
### Customization
Change Styling:
Edit colors, fonts, and layout in style.css

Adjust Scoring:
Modify thresholds in the showResults() function:

javascript
if (percentage === 100) {
    resultMessage.textContent = "Perfect!";
}
### File Structure
```text
quiz-game/
├── index.html        # Main application structure
├── style.css         # All styling rules
└── script.js         # Quiz logic and functionality
```

### Browser Support
Chrome	✓ Yes
Firefox	✓ Yes
Safari	✓ Yes
Edge	✓ Yes


### License

This project is open-source under the MIT License. Feel free to use and modify as needed.
