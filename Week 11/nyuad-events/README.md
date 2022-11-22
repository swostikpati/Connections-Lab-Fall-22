# NYUAD Events

## Overview

NYUAD Events is a web application based in React JS. With the lifting of covid restrictions, the number of events on campus have increased rapidly. Due to this, we find that students have often struggled to keep track of all the events that are happening on campus and many-a-time end up missing special events that were really important to them. This is where NYUAD Events comes in. It keeps track of all the events happening on campus, and displays all the relevant information about them (date, location, description, etc). It also provides the users the ability to create new events and set events they want to attend as favorites.

## Personal Motivation

The creation of this application was basically a practical venture of mine to understand the core concepts of the React JS library. Throughout the documentation of the project, I have highlighted my key learnings about the library.

## Wireframe

This is the [initial wireframe]() of the website. I have mostly stuck to it with minor changes here and there.

## Learnings

• Understanding how React JS functions was my most important learning. The way there is only a single html file regardless of the number of web-pages that we are rendering took me a while to understand.

• Majority of the code is written using JSX, which is analogous to saying that we are writing HTML in JS with some subtle, but very important differences.

• Coding in react is based in coding components, ui elements, layouts, pages, etc, and rendering all of them together. Coding practices put a lot of importance to keep every file as uncluttered as possible and increaseing reusability of code blocks.

• React allows us to create our own components (must start with a capital letter) that are rendered as functions.

• Props allow us to create and work with attributes on our self made components. ```props.children``` allows us to access everything that has been wrapped around a specific tag. 

• There exist several keyword attributes in JSX that are different from standard HTML, for e.g class is written as className. JSX also allows self-closing tags.

• Routing in React works differently. It is done without sending additional http requests to the server and instead rendered locally. Routing requires using the package of ```react-router-dom```. All individual routes must be wrapped around with ```Routes```

• State management within react helps in managing the different data that are required for React componenets to render.

• ```useRef``` hook allows us to persist mutable values. ```useEffect``` hook listens for changes in specific dependecies and re-renders the code.

• Styling is applied quite differently in React. Instead of styling the whole webpage, individual components are styled instead by creating css modules for each of the corresponding component js files.

• Using context in React, allows us to listen of changes accross several components and change elements that are being rendered.

## Challenges

• Understanding ReactJS was like re-learning many parts of Front-end development. Navigating through this path was definitely quite difficult and a very big challenge especially considering the time constraint. I am still in the process of becoming comfortable with the core principles but I feel I am at a much better place than when I began from.

• The documentation of React has changed a lot over the years. This makes it very difficult to keep up with tutorials (even recent ones) as things keep changing a lot. This definitely posed as a challenge as there were several instances where I was facing errors for code that once was completely correct. But with some understanding of the documentation, I was able to adapt quite fast.

## Potential Improvements

The application is at a very rudimentary stage and there is a lot of scope for improvement. Some of the very apparant ones are:

• There is no check on who has the access to create events. Without this, there is a possibility of random events being created by random people and even multiple instances of the same event.

• The user interface of the application is very generic and provides a major opportunity to customize it more to the school it is representing. 

• More features, like being able to RSVP directly from the application, photo gallery, calander integration, etc. can be added.

## References

• [React JS Documentation](https://reactjs.org/docs/getting-started.html)

• [Udemy ReactJS Course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

