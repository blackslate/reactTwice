# reactTwice

## Overview
A barebones React app that shows that the main React class is instantiated twice, and that `render()` method of the App instance is called twice although neither its  `state` nor its `props` change between renders.

## Structure
This project was created using:
```
npx create-react-app reactTwice
cd reactTwice
```
Yor details, see: [Create React App](https://github.com/facebook/create-react-app).

The initial app was stripped of all inessential code and assets, then the index.js and App.js scripts were modified to log key events in the Console.

## Output in Console

Here is the output in the Console, formatted for readability. The numbers in parentheses indicate which instance of the App class is logging the output. The numbers after that indicate the number of milliseconds since that instance was created. For output from the `render` method, these numbers are followed by two objects: this.state and this.props.

As you can see, the App class is instantiated twice, and the `render()` method is called twice, with no changes in either `state` or `props`.

You can also see that when `setState` is called inside a `componentDidMount` event, the `render` method is called *after* the `componentDidMount` method completes. Conversely, when `setState` is called inside a custom method (such as `runTimeOutMethod`), the `render` method is called *during* the custom method, interrupting the flow of the custom method.


        index.js:5 ReactDOM.render() about to be called

          App.js:14 App constructor ( 1 ) 0
          App.js:14 App constructor ( 2 ) 0

          App.js:36 render called ( 2 ) 1 {} {}
          App.js:36 render called ( 2 ) 2 {} {}

          App.js:52 componentDidMount started ( 2 ) 24
          App.js:55 componentDidMount complete ( 2 ) 26
          App.js:36 render called ( 2 ) 29 {mounted: true} {}
          App.js:36 render called ( 2 ) 29 {mounted: true} {}

        index.js:14 ReactDOM.render() was called

        App.js:31 DOM element added ( 2 ) 46

        App.js:24 runTimeOutMethod started ( 2 ) 47
        App.js:36 render called ( 2 ) 48 {mounted: true, time: true} {}
        App.js:36 render called ( 2 ) 48 {mounted: true, time: true} {}
        App.js:26 runTimeOutMethod complete ( 2 ) 49

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

