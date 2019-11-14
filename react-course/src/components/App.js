import React, { Component } from "react"

class App extends Component {
     constructor() {
          super()
          this.state = {
               name: "",
               surname: ""
          }
          this.handleChange = this.handleChange.bind(this)
     }

     handleChange(event) {
          this.setState({ [event.target.name]: event.target.value })
     }

     render() {
          let isValidName = this.state.name.length > 3 ? "name is valid" : "name is too short"
          let isValidSurname = this.state.surname.length > 4 ? "name is valid" : "name is too short"
          return (
               <div>
                    <p>Le nom est : {this.state.name}</p>
                    <p>Le prénom est : {this.state.surname}</p>
                    <form>
                         <input name="name" type="text" placeholder="name" onChange={this.handleChange} />
                         <input name="surname" type="text" placeholder="surname" onChange={this.handleChange} />
                    </form>
                    <p>{isValidName}</p>
                    <p>{isValidSurname}</p>
               </div>
          )
     }
}

export default App
