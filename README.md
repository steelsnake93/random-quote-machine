# Random Quote Machine

 This is a simple web application that displays a random quote and author each time the "New Quote" button is clicked. The user can also click the "Tweet Quote" button to share the current quote on Twitter.

## Links

- [Repo](https://github.com/steelsnake93/random-quote-machine "<random-quote-machine> Repo")

- [Live](https://steelsnake93.github.io/random-quote-machine/ "<[Homepage url]> Live View")

## Technologies Used

This project was built using HTML, CSS, and JavaScript. The following libraries and APIs were used:

- Font Awesome: for icons
- jQuery: for DOM manipulation
- Quotes API: for fetching random quotes

## User Stories

This project fulfills the following user stories:

- As a user, I can see a wrapper element with a corresponding id="quote-box".
- As a user, within #quote-box, I can see an element with a corresponding id="text".
- As a user, within #quote-box, I can see an element with a corresponding id="author".
- As a user, within #quote-box, I can see a clickable element with a corresponding id="new-quote".
- As a user, within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".
- As a user, on first load, my quote machine displays a random quote in the element with id="text".
- As a user, on first load, my quote machine displays the random quote's author in the element with id="author".
- As a user, when the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.
- As a user, my quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.
- As a user, I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.
- As a user, the #quote-box wrapper element should be horizontally centered.

## Installation

To install this application, you'll need to have Node.js and npm installed on your computer. Once you have those installed, follow these steps:

### 1. Clone the repo

### - `git clone https://github.com/steelsnake93/random-quote-machine.git`,

### 2. Navigate to the project directory using

### - `cd random-quote-machine`,

### 3. Install the required dependencies using

### - `npm install`,

## Usage

    To run the application, use the command npm start. This will start the development server and open the application in your default browser at http://localhost:3000/.

    To generate a new random quote, simply click the "New Quote" button. To share the current quote on Twitter, click the "Tweet" button.

Alternatively, you can view a live demo of the project [here](https://steelsnake93.github.io/random-quote-machine/) 

## Contributing

Contributions to this project are welcome! If you find a bug or have a suggestion for an improvement, please open an issue or submit a pull request.

Before submitting a pull request, please make sure that your code adheres to the project's coding standards and passes all tests.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
