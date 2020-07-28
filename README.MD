<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Devmountain Web - Skills Check 3

## Project Summary
Welcome to skills check 3! This skills check will have JavaScript sections similar to skills checks 1 & 2 as well as a React portion which is similar to afternoon projects that you have done. Remember to use past code, lecture notes & slides, and reference websites to help you as you complete this skills check.

You should be able to finish this skills check in an 8 hour day. For part time programs this means it should take two days. On the first day, you should aim to complete [classes](##Classes) and [closures](##Closures) as well as begin the [react](#React) section. On the second day, you should aim to complete the react section. This skills check will cover topics from these lectures:

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
<label for='gif'>preview of the app</label>

### Planning
In the react folder of this repo, there is an example [wireframe](react/bookist-wireframe.png) that shows a possible setup for your components (the dark gray box around book list and shelf just indicates a container element). Feel free to jot down notes or sketches that will help you plan this app. Any planning will help you as you get into the instructions.

The app needs to have the following features:

- display a list of book covers, titles, and authors (from data.js)
- if a book is clicked, its title should be added to the shelf
- ability to search the list of books (by title)  
- clear search which should restore the original list of books and clear the input field
- clear all the titles from the shelf

Think about what kind of handler functions you'll need for these features and what JSX elements they'll be connected to. What state will be needed in the different components? Which components could be functional? It's okay if things change as you code, but it's nice to have ideas going in.

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

If you would prefer to attempt this app without guidance, feel free to do so. You can just go off of the mockup and project summary. The instructions below can still act as an outline or support, but keep in mind that they probably won't match what you do exactly, which is okay. There are a bunch of different ways to code! 

## Step 1

### App.js