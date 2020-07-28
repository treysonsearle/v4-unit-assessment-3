<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Devmountain Web - Skills Check 3

## Project Summary
[linky link](./README.MD#React)
Welcome to skills check 3! This skills check will have JavaScript sections similar to skills checks 1 & 2 as well as a React portion which is similar to afternoon projects that you have done. Remember to use past code, lecture notes & slides, and reference websites to help you as you complete this skills check.

You should be able to finish this skills check in an 8 hour day. For part time programs this means it should take two days. On the first day, you should aim to complete classes, closures, and react-1. On the second day, you should aim to complete react-2. This skills check will cover topics from these lectures:

- [JavaScript 6](https://github.com/DevMountain/web-curriculum-v3/tree/master/11-javascript-6)
- [React 1](https://github.com/DevMountain/web-curriculum-v3/tree/master/12-react-1)
- [React 2](https://github.com/DevMountain/web-curriculum-v3/tree/master/13-react-2)
- [React 3](https://github.com/DevMountain/web-curriculum-v3/tree/master/14-react-3)

## Setup

- `Fork` this repository.
- `Clone` down to your computer.
- Start coding!

# JavaScript - notes from before - i used the same thing for classes and closures, so. need to separate that out

# DevMountain Web Skills Check 3: closures

## Project Summary

In this project, we'll provide practice JavaScript problems to evaluate your understanding so far.

## Setup

- Open `./practice.js` with your code editor.
- Open `./index.html` with your browser.

## Directions

Complete all the activities inside of `./practice.js` to make the spec runner pass it's tests. In order to check the progress of the spec runner, open `./SpecRunner.html` with your browser. Remember to commit and push your code often. Good luck!

## Tips and Tricks

One of the biggest tools at the developer's disposal is the browser's built-in debugger. To use it, open `./SpecRunner.html` with your browser and open the inspector.





# React -- notes from before
## Project Summary

You are going to create an app from the ground up to practice what we have covered so far about React. The app is going to display a collection of books. When a user clicks a book, it's title should be added to their "shelf". You will also add the ability to search the list of books and clear out the shelf of all titles.

This is supposed to challenge you and stretch your skills! Work hard at it and remember that you can reference whatever notes and code you need to. There won't be any solutions but the directions should provide a good amount of guidance. 

<img src="./bookist.gif" width="600" >

## Setup -- NEED TO REWRITE THIS NOW THAT IVE MADE A BOILERPLATE

You are going to need to create your own react app for this portion of the skills check. You will also need to create a remote repository on GitHub. Go ahead and create both of those now so we can connect our app to the repo and push changes as we go. 

- in your terminal, navigate to the folder where you want to store your new app (not this folder)
- run ```npx create-react-app APP_NAME```
- in GitHub, create a new repository
- name the repo 'bookist'
- you do not need to provide a description, the repo should be public, and do NOT check the readme box (create-react-app will already have created the necessary files)
- back in your terminal, make sure you are in your new app's directory and run ```git remote add origin YOUR_REPO_URL``` and ```git push -u origin master```
- refresh GitHub and your boilerplate React app should be there


- look around this app's files and try to see what's going on. Can you see what functionality from the preview might fit with each of the components? 


- Set up a basic component in each of these files that just renders the name of the component -- think about which components could be class components and which could be functional (will that component need state?) and set them up that way. You might need to change the type later, but that's okay. 
- If you run ```npm start``` you should see each of your components' names in the browser (except book, which isn't rendered in the main App component).

## Step 1

### App.js
- import the data from the data.js file

# End