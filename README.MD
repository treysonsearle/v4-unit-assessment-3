<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Devmountain Web - Skills Check 3

## Project Summary
Welcome to skills check 3! This skills check will have JavaScript sections similar to skills checks 1 & 2 as well as a React portion which is similar to afternoon projects that you have done. Remember to use past code, lecture notes & slides, and reference websites to help you as you complete this skills check.

For full time students, you should be able to finish this skills check in an 8 hour day. 
For part time students this means it should take two days. On the first day, you should aim to complete [classes](##Classes) and [closures](##Closures) as well as begin the [react](#React) section. On the second day, you should aim to complete the react section. 

This skills check will cover topics from these lectures:

- [JavaScript 6](https://github.com/DevMountain/web-curriculum-v3/tree/master/11-javascript-6)
- [React 1](https://github.com/DevMountain/web-curriculum-v3/tree/master/12-react-1)
- [React 2](https://github.com/DevMountain/web-curriculum-v3/tree/master/13-react-2)
- [React 3](https://github.com/DevMountain/web-curriculum-v3/tree/master/14-react-3)

## Setup

- `Fork` this repository.
- `Clone` down to your computer.
- Start coding!

# JavaScript

## Instructions
The sections for classes and closures will each consist of following the same series of instructions, but with different javascript files and spec runnner files for each folder.

## Classes

- Open `practice-classes.js` with your code editor.
- Open `SpecRunner-classes.html` with your browser.
- Complete the problems in `practice-classes.js` and check your progress using the spec runner
- Remember that you can use the Chrome Dev Tools (inspect)

## Closures

- Open `practice-closures.js` with your code editor.
- Open `SpecRunner-closures.html` with your browser.
- Complete the problems in `practice-closures.js` and check your progress using the spec runner
- Remember that you can use the Chrome Dev Tools (inspect)



# React
## Project Summary

You are going to create an app from the ground up to practice what we have covered so far about React. The app is going to display a collection of books and users can make a list of titles from the collection. You can see a quick run through of that functionality below. There is also a higher quality [mockup](react/bookist-mockup.png) in the react folder of this repo and a deeper explanation later in these directions.

This app is supposed to challenge you and stretch your skills! Work hard at it and remember that you can reference whatever notes and code you need to. There won't be any solutions but the directions should provide a good amount of guidance.

<img src="react/bookist.gif" width="600" id='gif'>
<label for='gif'>preview of the app (search feature is advanced)</label>

### Planning
In the react folder of this repo, there is an example [wireframe](react/bookist-wireframe.png) that shows a possible setup for your components (the dark gray box around the book list and shelf just indicates a container element). Feel free to jot down notes or sketches that will help you plan this app while you read through this section. Any planning will help you as you get into coding.

The app needs to have the following features:

- display a list of book covers, titles, and authors (from data.js)
- if a book cover is clicked, its title should be added to the shelf
- clear all the titles from the shelf

Think about what kind of handler functions you'll need for these features and what JSX elements they'll be connected to. What state will be needed in the different components? Which components could be functional? It's okay if things change as you code, but it's nice to have ideas going in.

Note: this app isn't about your CSS skills, so save fancy styling for the end. Feel free to throw in any functional style you'd like along the way though (changing image sizes, etc.)

## Setup 

You are going to need to create your own react app. You will also need to intialize a remote repository on GitHub. Follow the directions below to create both of those now so we can connect our app to the repo and push changes as we go. We'll also get the bare bones set up of our app done and open it in the browser to make sure everything's working.

1. in your terminal, navigate to the folder where you want to store your new app (not this folder)
2. run ```npx create-react-app APP_NAME```
3. in GitHub, create a new repository
4. name the repo 'bookist'
5. you do not need to provide a description, the repo should be public, and do NOT check the readme box (create-react-app will already have created the necessary files)
6. back in your terminal, make sure you are in your new app's directory and run ```git remote add origin YOUR_REPO_URL``` and ```git push -u origin master```
7. refresh GitHub and your boilerplate React app should be there
8. copy the `data.js` file from this repo into the `/src` folder of your new react app 
9. create a `Components` folder inside your `src` folder
10. in App.js, delete the `<header>` tag and everything inside it, in its place, put an `<h1>` tag containing 'bookist'
11. run `npm start` and you should see 'bookist' in your browser

## DIY Option

If you would prefer to attempt this app without guidance, feel free to do so. You can just go off of what you've read so far. The more detailed instructions below can still act as an outline or support, but keep in mind that they probably won't match what you do exactly, which is okay. There are a bunch of different ways to code! 

## Instructions

### Step 1: Create and display a header component

#### Header.js
- in your `Components` folder, create a new component called `Header.js`
- the component should display the name of the app

#### App.js
- delete the `<h1>` tag that we added earlier
- import the `Header` component
- render `Header` as a child of `App`

### Step 2: Create and display book list and shelf components

#### BookList.js
- in your `Components` folder, create a new component called `BookList.js`
- the component should display the test string 'book list'

#### Shelf.js
- in your `Components` folder, create a new component called `Shelf.js`
- the component should display the test string 'shelf'

#### App.js
- import both `BookList` and `Shelf` into `App`
- render `BookList` and `Shelf` as children of app
- optional: add in some CSS so that `BookList` and `Shelf` are side by side instead of stacked

### Step 3: Bring data into the app

#### App.js
- import the book data from `data.js` (which you should have copied over from this repo)
- convert `App.js` into a class component
- in `App`'s state, initialize a property called 'books' whose value is the data you imported

### Step 4: Pass the book data to BookList where it will be displayed

#### App.js
- pass the book data from state down to `BookList` as a prop named 'books'

#### BookList.js
- map over the books array passed down on props and store the result in a variable called mappedBooks
- remember the callback passed to that map function should return JSX for each book in the array -- it should show the image, title, and author
- make sure you're rendering your mappedBooks

### Step 5: Write a function to add titles to the shelf and display them

#### App.js
- create a new property on state called 'shelf' and set it to an empty array
- write a function called `addToShelf` that will be able to add a book's title into the shelf array on state (hint: it could accept a parameter)
- make sure your function is bound to `App`
- pass the `addToShelf` function down to `BookList` as a prop
- pass the shelf array from state down to the `Shelf` component as prop

#### BookList.js
- assign the `addToShelf` function to the `onClick` property of the book cover images (remember you have access to all the properties of each book object inside your map callback)

#### Shelf.js
- map over the shelf array passed down on props and store the result in a variable called mappedTitles
- the callback of the map function should return JSX for each title
- make sure to render your mappedTitles

### Step 6: Write a function to clear the shelf

#### App.js
- write a function called `clearShelf` that will reset the shelf array on state to empty
- make sure your function is bound to `App`
- pass the `clearShelf` function down to the `Shelf` component as a prop

#### Shelf.js
- make a button with the text 'clear shelf' on it
- set an `onClick` property on the button that fires the `clearShelf` function that was passed down as a prop

## Congrats! You have a functioning app!

You are now done with the core part of this skills check. If you still have time (or want extra practice outside of class), here are some suggestions:

- add styling into this app, you can make it look like the mockup or do your own thing
- make a searchBar component
    - start out with searching by title
    - add in searching by author too (from the same input field)
    - add a 'clear search' button that will set the BookList back to the original and clear the input field
