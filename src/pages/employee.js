import Table from "../components/table";
import Search from "../components/search";
import API from "../utils/API";
import { Component } from "react";

class Employee extends Component {
  state = {
      //Changed from {} to []
    employee: [],
 displayedEmployee: [], 
 searchTerm: ""
};
  
  componentDidMount() {
    API.getRandomEmployee().then((res) => {
      this.setState({
        employee: res.data.results,
        displayedEmployee: res.data.results,
      });
    });
  }

handleInputChange = (event) => {
   const {name, value} = event.target

this.setState({[name]: value})
console.log(value)
   const newEmployee = this.state.employee.filter(employee => {
     return employee.name.first.toLowerCase().includes(value.toLowerCase())
     ||  employee.name.last.toLowerCase().includes(value.toLowerCase())
   })
   this.setState({displayedEmployee:newEmployee})


}

  render() {
    return (
      <>
        <Search searchTerm ={this.state.searchTerm} handleInputChange={this.handleInputChange} />
        <Table displayedEmployee={this.state.displayedEmployee}/>
        {/* <Table employee={this.state.employee}/> */}
      </>
    );
  }
}

export default Employee;
