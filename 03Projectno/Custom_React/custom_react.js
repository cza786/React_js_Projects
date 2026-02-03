function CustomRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
    if(prop ==='children') continue;
    domElement.setAttribute(prop, reactElement.props[prop])
}
container.appendChild(domElement)
}

// const reactElement= {
//     type: 'h1',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children: 'Hello, Custom React!'
//     }

const reactElement= ( 
    'a',
    {
        href: 'https://www.google.com',target: '_blank'
    },
    'Click me tu visit Google'
)
    


const anotherElement= (
    <a href="https://www.google.com" target="_blank"> Visit Google</a>

)

ReactDOM.createRoot(document.getElementById('root')).render(anotherElement);

//Evaluated expression 