// ===========  Here we make own react element (.1) =====

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