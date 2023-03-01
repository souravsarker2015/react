import React from 'react'
import ReactDom from 'react-dom'

import Header from "./components/header";

// import './styles/style.css'
const App = () => (
    <Header/>
    // <React.Fragment>
    //     <Header/>
    //
    // </React.Fragment>
)
ReactDom.render(<App/>, document.getElementById('root'))

// const App = () => (
//     <Header/>
//     // <React.Fragment>
//     //     <Header/>
//     //
//     // </React.Fragment>
// )
// ReactDom.render(<App/>, document.getElementById('root'))

// import React from 'react'
// import ReactDom from 'react-dom'
//
// const App = () => (
//     <React.Fragment>
//         <h1>hello</h1>
//         <h1>hello</h1>
//
//     </React.Fragment>
// )
// ReactDom.render(<App/>, document.getElementById('root'))

// const App = () => (
//     <div className={'first_class'}>
//         <h1>first</h1>
//         <h1>Second</h1>
//     </div>
// )
// ReactDom.render(<App/>, document.getElementById('root'))


// const App = () => {
//     // return React.createElement('h1',{className:'h1_class'},'hello react')
//     return React.createElement('h1',{className:'h1_class'},React.createElement('div',{className:'in_div'},'inside h1 tag and it is a div'))
// }
// ReactDom.render(<App/>, document.getElementById('root'))


// import React from 'react'
// import ReactDom from 'react-dom'
//
// const App = () => {
//     return (
//         <div>
//             <h1>Hello React</h1>
//         </div>
//     )
// }
// ReactDom.render(<App/>, document.getElementById('root'))