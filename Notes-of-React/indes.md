
react is a good liberiry . we get the  attachment with the react liberiry.
       react-dom
     ↗
react 
     ↘
      reacct-native

;;   react  [   when we want to work on website then we use react-dom.]
;;         [ if  we want to work on Moblie app then we use react-native.]

The first & basic method to make react is ( npx create-react-app 01basicreact ). 

;; when i create-react-app then we face the ENOENT problem then we use the commond on vs terminol
;;  (npm install -g create-react-app) after it enter this commond (npx create-react-app foldername)

This commond (npx create-react-app foldername) take time to installing package. so then we wait for complete it.

Vite is also a liberiry like other liberiry .

To make Vite file we use this (npm create vite@latest)


;; Highligts about 1st lecture 
First lecture we learn here is  {
    Make basic react 
    how to create project 
    how to clean project
    how to make folder with react liberiry in vs terminal.
    how to make folder with Vite liberiry in vs terminal.
    how to run those file 
}

;; Highligts

;; 2nd lecture we learn components

which function we import it componenet

when ever we use react or vite we need to make capital first letter of it name  convension (function names).


;;  *************************************** Highlights of Main.jsx lectures  **********************************8888
//  (1)
//  we see that if App.jsx is just a method then we write method we make it 

import React from 'react'
import ReactDom from 'react-dom/client'
// there is one other thing in react.jsx call directly
import {jsx as _jsx} from "reac/jsx_runtime.js"
import App from './App.jsx'
//  (3)
// then we know if worked like these trees structure object banati ha

function Myapp(){
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}
// (4)
// then we make a tree method but it can't work

// (6)
// so then why our element doesn't work why our element does. work whats the fault in it?
// const ReactElement = {
//   hamza: 'a',
//   props: {
//       href:'https://Google.com',
//       target: '_blank'
//   },
//   children:'Click me to visit google'
// }
// (7) upper code
// then we availuate that our element is good  that propety, keys, value use in it we make by our heart that why they don't work 

// (5)
// then we see if i give them like this below element and give then proper html element and it's working


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)


const anotherUser = "Chai aur react"

// (8)
// then we use the React.createElement that is by default (automatically) injected 
//  Who injected it?  Bubble injecte it.

const ReactElement = React.createElement(
  'a', //firs give them element 
  {href: 'https://google.com', target: '_blank'}, // give them input values
  'click me to visit google',// then 3rd value. evaluateted experssion wher we injecte our variables
  anotherElement 
)



//  (.2)
// then we how to excute redirectly that methood

ReactDom.createRoot(document.getElementById('root')).render(
  // we done it without parentesis
  ReactElement
)


;; ************************************* Hightligtes of Custom-react/customreac.js file ********************************************

// ===========  Here we make own react element( 1) =====

function customRendor(reactElement, container){


    // (.4) 
    // then we use basic approch method like setAttributes 
    // aftertthat we realize this is not modiler approch, here code repeat then we use another method (5)

    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    // Container.appendChild(domElement);

    // (.5)
    // then we use this method  and set loops in it 

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);
}
// (.6)
// these are our custom render method 


// (.3)
// then we wana know how to create react object  then we create by our self 

// (.7)
// we expect that when ever we pass any syntax then send below syntax 
// then we go main.jsx 

const reactElement = {
    type: 'a',
    props: {
        href:'https://Google.com',
        target: '_blank'
    },
    children:'Click me to visit google'
}
// (.2)
// firstly we get root element by useing queryselcetor 
// then we need  render mehod that get my element and inject them in a container

const mainContainer = document.querySelector('#root')

customRendor(reactElement, mainContainer)







