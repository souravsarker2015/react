import React from "react";

// style in react


class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 className={'logo'}>logo</h1>
                <input type="text"/>
            </header>
        )
    }

}

// let style = {
//     header: {
//         background: 'blue',
//
//     },
//     logo: {
//         color: 'black',
//         fontFamily: 'Shantell Sans',
//         textAlign: 'center'
//     }
// }
//
// class Header extends React.Component {
//     render() {
//         return (
//             <header style={style.header}>
//                 <h1 style={style.logo}>logo</h1>
//                 <input style={style.logo} type="text"/>
//             </header>
//         )
//     }
//
// }

export default Header;
// class based components

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello react {5 + 6}</h1>
//             </div>
//         )
//     }
//
// }
//
// export default Header;
// const Header = () => {
//     const myYear = () => {
//         const myDate = new Date()
//         return myDate.getFullYear()
//     }
//
//     return (
//         <div>
//             <h1>Hello react 1</h1>
//             <h1>Date is {myYear()}</h1>
//         </div>
//     )
// }
//
// export default Header;