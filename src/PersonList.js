import React from 'react';
import API from './api';
import axios from 'axios';

export default class PersonList extends React.Component {
// Making a GET Request
// ----------------------------------------------

//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }

//   render() {
//     return (
//       <ul>
//         { this.state.persons.map(person => <li>{person.name}</li>)}
//       </ul>
//     )
//   }

// Making a POST Request
// ----------------------------------------------

	// state = {
	// 	name: '',
	// }

	// handleChange = event => {
  //   this.setState({ name: event.target.value });
  // }

  // handleSubmit = event => {
  //   event.preventDefault();

  //   const user = {
  //     name: this.state.name
  //   };

  //   axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  // }

  // render() {
  //   return (
  //     <div>
  //       <form onSubmit={this.handleSubmit}>
  //         <label>
  //           Person Name:
  //           <input type="text" name="name" onChange={this.handleChange} />
  //         </label>
  //         <button type="submit">Add</button>
  //       </form>
  //     </div>
  //   )
  // }

// Making a DELETE Request
// ----------------------------------------------

	// state = {
  //   id: '',
  // }

  // handleChange = event => {
  //   this.setState({ id: event.target.value });
  // }

  // handleSubmit = event => {
  //   event.preventDefault();

  //   axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  // }

	// Using a Base Instance in Axios
	// ----------------------------------------------

	// handleSubmit = event => {
  //   event.preventDefault();

  //   API.delete(`users/${this.state.id}`)
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
	// }

	// Using async and await
	// ----------------------------------------------

	handleSubmit = async event => {
		event.preventDefault();
	
		const response = await API.delete(`users/${this.state.id}`);	
		console.log(response);
		console.log(response.data);
	};

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }

}
