

import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router'

class AddTask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            validated: false,
            item: {
                id: "",
                description: "",
                status: "",
                categorie: "",
                date: "",
                time: ""
            }
        }
    }

    setValidated = (val) => {
        this.setState({
            validated: val
        })
    }

    addNewTask = () => {
        let sendItem = {
            "description": this.state.item.description,
            "status": this.state.item.status,
            "categorie": this.state.item.categorie,
            "date": this.state.item.date,
            "time": this.state.item.time
        }

        const requestOptions = {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify(sendItem) 
        }

        fetch ('http://localhost:8000/tasks/', requestOptions)
        .then(response => {
            if(response.status === 200){
                this.props.addnewtask(this.state.item)
                this.props.onHide()
                this.handleReset()
                alert("Task Added.")
            } else {
                alert("There was some problem with that. We're currently working on fixing it. Thank You.");
            }
        })
        .then(data => {
            console.log(data)
        })
    

    handleSubmit = (event) => {
        const form = event.currentTarget
        event.preventDefault()
        if (form.checkValidity() === false) {
            event.stopPropagation()
            this.setValidated(true)
        } else {

            let nowDate = Date.now()
            let dueDate = new Date(this.state.item.date + " " + this.state.item.time)
            let daysDiff = (dueDate.getTime() - nowDate) / (1000 * 3600 * 24)
            let val = "Ongoing"
            
            if(daysDiff < 0) {
                val = "Overdue";
            } else if (daysDiff <=2) {
                val = "Pending"
            }

            let newItem = this.state.item;
            newItem.status = val
            this.setState({
                item: newItem
            }, this.addNewTask())

            this.setValidated(false)
        }
    }

    handleReset = (event) => {
        let newitem = {
            id: "",
            description: "",
            status: "",
            category: "",
            date: "",
            time: ""
        }

        this.setState({
            item: newitem
        })

        this.setValidated(false)
    }

    handleInputChange = (event) => {
        const target = event.target

        let newitem = this.state.item
        let value
        if(target.name === "description") {
            value = target.value;
        } else if(target.name === "date") {
            value = target.value;
        } else if(target.name === "time") {
            value = target.value;
        } else if(target.name === "category") {
            value = target.value;
        }

        const name = target.name
    
        newitem[name] = value
    
        this.setState({
            item: newitem
        })
    }

    return 
    
    <section>
    <form onSubmit={handleSubmit}>
      <h1>ADD A TASK</h1>
      <CheeseForm formInputProps={formInputProps} />
      <div>
        <input type='submit' value='Add TASK' />
      </div>
      {isError ? (
        <div className='error'>
          <p>Error. Please try again.</p>
        </div>
      ) : (
        <></>
      )}
    </form>
  </section>

}
        


                    
    
   }
}
    export default AddTask