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

## Classes

- Open `./practice-classes.js` with your code editor.
- Open `./SpecRunner-classes.html` with your browser.
- Complete the problems in `practice-classes.js` and check your progress using the spec runner
- Remember that you can use the Chrome Dev Tools (inspect)

## Closures

- Open `./practice-closures.js` with your code editor.
- Open `./SpecRunner-closures.html` with your browser.
- Complete the problems in `practice-closures.js` and check your progress using the spec runner
- Remember that you can use the Chrome Dev Tools (inspect)



# React
## Project Summary

You are going to create an app from the ground up to practice what we have covered so far about React. The app is going to display a collection of books. When a user clicks a book cover, its title should be added to their "shelf". You will also add the ability to search the list of books and clear the search which should restore the original list of books and clear the input field. Users should also have the option to clear all the titles from the shelf. You can see a quick run through of that functionality below. There is also a higher quality mockup in the images folder of this repo.

This app is supposed to challenge you and stretch your skills! Work hard at it and remember that you can reference whatever notes and code you need to. There won't be any solutions but the directions should provide a good amount of guidance. 

<img src="images/bookist.gif" width="600" id='gif'>
<label for='gif'>preview of the app</label>

## Setup 

You are going to need to create your own react app for this portion of the skills check. You will also need to intialize a remote repository on GitHub. Follow the directions below to create both of those now so we can connect our app to the repo and push changes as we go. We'll also get the bare bones set up of our app done and open it in the browser to make sure everything's working.

1. in your terminal, navigate to the folder where you want to store your new app (not this folder)
2. run ```npx create-react-app APP_NAME```
3. in GitHub, create a new repository
4. name the repo 'bookist'
5. you do not need to provide a description, the repo should be public, and do NOT check the readme box (create-react-app will already have created the necessary files)
6. back in your terminal, make sure you are in your new app's directory and run ```git remote add origin YOUR_REPO_URL``` and ```git push -u origin master```
7. refresh GitHub and your boilerplate React app should be there
8. copy the `data.js` file from this repo into the `/src` folder of your new react app 
9. take a minute to look over the data to see what you'll be working with
10. create a `Components` folder inside your `src` folder
11. in App.js, delete the `<header>` tag and everything inside it, in its place, put an `<h1>` tag containing 'bookist'
12. run `npm start` and you should see 'bookist' in your browser

## DIY Option

If you would prefer to attempt this app without guidance, feel free to do so. You can just go off of the mockup and project summary. The instructions below can still act as an outline or support, but keep in mind that they probably won't match what you do exactly, which is okay. There are a bunch of different ways to code!

## Step 1

### App.js