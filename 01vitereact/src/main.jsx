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
