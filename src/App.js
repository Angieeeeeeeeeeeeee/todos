// import logo from './logo.svg';
// import './App.css';
// import TodoList from './TodoList';
// import { Component, useState } from 'react';

// // function App2() {
// //   const [input, setInput] = useState('');
// //   const onInputChange = (e) => setInput(e.target.value);
// // 
// //   return (
// //     <input
// //       value={input}
// //       onChange={onInputChange} // onChange => input改變時觸發{this.onNewInputChange}
// //     />
// //   )
// // }

// // class App extends Component {
// //   constructor(props) {
// //     super(props)
// //     this.state = {
// //       input: '',
// //       todos: []
// //     }
// //   }

//   // 將input的state改成最新的value
// //   newInput = (value) => {
// //     this.setState({
// //       input: value
// //     })
// //   }

//   // 把input真的新增進todo list
// //   addTodo = () => {
// //     const input = this.state.input.trim();
// //     if (input) {
// //       this.setState({
// //         todos: [
// //           {
// //             text: input,
// //             completed: false
// //           },
// //           ...this.state.todos
// //         ],
// //         input: '',
// //       })
// //     }
// // }

//   // 把觸發change的target(=input)的value丟給newInput
// //   onNewInputChange = (e) => {
// //     this.newInput(e.target.value);
// //   };

//   // 按下enter那一刻觸發addTodo()
// //   onNewInputKeyDown = (e) => {
// //     if (e.key === "Enter") {
// //       this.addTodo();
// //     }
// //   };

//   // 切換todo狀態
//   // stateSwitch = (i) => {
//   //   this.setState({
//   //     todos: this.state.todos.map((todo, index) => {
//   //       if (index !== i) {
//   //         return todo;
//   //       }

//   //       return {
//   //         ...todo,
//   //         completed: !todo.completed
//   //       }
//   //     })
//   //   })
//   // };

//   // 刪除todo
//   // deleteToto = (e) => {
//   //   this.setState({
//   //     todos: this.state.todos.filter(
//   //       (todo, index) => index !== e
//   //     ),
//   //   });
//   // };

//   render() {
//     const { todos } = this.state

//     return (
//       <div className='todolist'>
//         <div className='wrapper'>
//           <h1 className='title'>Todo List</h1>
//           <input
//             className='input'
//             value={this.state.input}
//             onChange={this.onNewInputChange} // onChange => input改變時觸發{this.onNewInputChange}
//             onKeyDown={this.onNewInputKeyDown} />
//           <button className='button' onClick={() => this.addTodo()}>新增</button>
//           <div></div>
//           <div className='filter'>全部</div>
//           <div className='filter'>已完成</div>
//           <div className='filter'>未完成</div>
//           <div className='list'>

//             {this.state.todos.map((todo, index) => (
//               <TodoList
//                 key={index}
//                 text={todo.text}
//                 onDelete={() => this.deleteToto(index)}
//                 stateSwitch={() => this.stateSwitch(index)}
//                 completed={todo.completed}
//               />
//             ))}

//           </div>
//         </div>
//       </div>

//     )
//   }
// }
// export default App;
