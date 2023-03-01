import React from "react";

// state

class Header extends React.Component {

    state = {
        title: 'this title name is react',
        name: 'sourov',
        keyword: '',
        count: 0
    }

    inputChangeHandler = (event) => {
        this.setState({
            keyword: event.target.value
        })
        // console.log('hello input')

        // we can't do
        // this.state.keyword = event.target.value
    }

    addOne(event) {
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.setState((state, props) => ({
            count: state.count + 1
        }))
        // this.setState(() => ({
        //     count: this.state.count + 1
        // }))
    }

    render() {
        console.log(this.state)
        return (
            <header onClick={() => console.log('i am clicked')}>
                <h1 className={'logo'}>logo</h1>
                <input
                    onChange={this.inputChangeHandler} type="text"/>

                <div>{this.state.title} </div>
                <div>{this.state.keyword} </div>
                <br/>

                <div>{this.state.count}</div>
                <button onClick={(e) => this.addOne(e)}>add one</button>
            </header>
        )
    }

}


// class Header extends React.Component {
//     helloFunction() {
//         console.log('hello')
//     }
//
//     inputChangeHandler=(event)=> {
//         this.helloFunction()
//         // console.log(event.target.value)
//         // console.log('hey')
//     }
//
//     render() {
//         return (
//             <header onClick={() => console.log('i am clicked')}>
//                 <h1 className={'logo'}>logo</h1>
//                 <input
//                     onChange={this.inputChangeHandler}
//                     type="text"/>
//             </header>
//         )
//     }
// }


// // state

//
// class Header extends React.Component {
//     helloFunction(){
//         console.log('hello')
//     }
//
//     inputChangeHandler(event,name) {
//         this.helloFunction()
//         // console.log(event.target.value)
//         // console.log('hey')
//     }
//
//     render() {
//         return (
//             <header onClick={() => console.log('i am clicked')}>
//                 <h1 className={'logo'}>logo</h1>
//                 <input
//                     onChange={(e) => this.inputChangeHandler(e, 'name')}
//                     type="text"/>
//             </header>
//         )
//     }
//
// }


// // event handler
//
// class Header extends React.Component {
//     inputChangeHandler(event) {
//         console.log(event.target.value)
//         console.log('hey')
//     }
//
//     render() {
//         return (
//             <header onClick={() => console.log('i am clicked')}>
//                 <h1 className={'logo'}>logo</h1>
//                 <input
//                     onChange={(e) => this.inputChangeHandler(e, 'name')}
//                     type="text"/>
//             </header>
//         )
//     }
//
// }

// // event handler
//
// class Header extends React.Component {
//     inputChangeHandler(event) {
//         console.log(event.target.value)
//     }
//
//     render() {
//         return (
//             <header onClick={() => console.log('i am clicked')}>
//                 <h1 className={'logo'}>logo</h1>
//                 <input
//                     onChange={this.inputChangeHandler}
//                     type="text"/>
//             </header>
//         )
//     }
//
// }

// style in react

// class based component
// class Header extends React.Component {
//     render() {
//         return (
//             <header onClick={()=>console.log('i am clicked')}>
//                 <h1 className={'logo'}>logo</h1>
//                 <input type="text"/>
//             </header>
//         )
//     }
//
// }

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