import React, { Component } from 'react'
import './Form.css'
import DisplayData from './DisplayData'
export default class DataForm extends Component {

    constructor(props){
        super(props)
        this.provinces = ['Alberta','British Columbia','Manitoba',
            'New Brunswick', 'Newfoundland and Labrador','Nova Scotia',
            'Ontario', 'Prince Edward Island', 'Quebec','Saskatchewan',
            'Northwest Territories', 'Nunavut','Yukon']

       this.state = {
            email: '',
            name: '',
            addressOne: '',
            addressTwo: '',
            city: '',
            postalCode: ''
       }     
    }

    onValueChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        const dataSubmitted = {
          ...this.state
        };
        this.setState({
          dataSubmitted: dataSubmitted
        });
      }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.onSubmitForm(e)}>
                    <h1>Data Entry Form</h1>
                    <div className="form-row">
                        <div className="form-div">
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                type="text"
                                id="email"
                                onChange={(e) => this.onValueChange(e)}
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-div">
                            <label htmlFor='name'>Name</label>
                            <input
                                name='name'
                                type="text"
                                placeholder='Full Name'
                                id="name"
                                required
                                onChange={(e) => this.onValueChange(e)}
                            />
                        </div>
                    </div>

                        <div className="form-div">
                            <label htmlFor='addressOne'>Address</label>
                            <input
                                name='addressOne'
                                type="text"
                                placeholder='1234 Main St'
                                required
                                id="addressOne"
                                onChange={(e) => this.onValueChange(e)}
                            />
                        </div>

                        <div className="form-div">
                            <label htmlFor='addressTwo'>Address 2</label>
                            <input
                                name='addressTwo'
                                type="text"
                                placeholder='Apartment, Studio, or Floor'
                                id="addressTwo"
                                onChange={(e) => this.onValueChange(e)}
                            />
                        </div>
                    

                <div className="form-row">
                        <div className="form-div">
                            <label htmlFor='city'>City</label>
                            <input
                                name='city'
                                type="text"
                                required
                                id="city"
                                onChange={(e) => this.onValueChange(e)}
                            />
                        </div>
                        <div className="form-div">
                        <label htmlFor='select' >Province</label>
                            <select name='province' onChange={(e) => this.onValueChange(e)}>
                                <option disabled selected>
                                    Choose...
                                </option>
                        
                                {this.provinces.map((province) => (
                                    <option key={province} value={province}>
                                        {province}
                                    </option>))
                                }
                            </select>
                        </div>
                    <div className="form-div">                
                        <label htmlFor='postalCode'>Postal Code</label>
                        <input
                            name='postalCode'
                            id="postalCode"
                            type="text"
                            required
                            onChange={(e) => this.onValueChange(e)}
                        />
                    </div>    
                </div>  
                 <div className="form-row">
                    <div className="terms-check-group">
                    <input
                            name='agree'
                            id='agree'
                            type="checkbox"
                            required
                        />
                        <label htmlFor='agree' >Agree Terms & Conditions?</label>
                        
                    </div>
                </div>         
      
                    <button type="submit" >Submit</button> <button className='clear-btn' type="reset">Clear</button> 
             </form>
             {this.state.dataSubmitted && (
            <DisplayData {...this.state.dataSubmitted} />
        )}
    </div>
    )
  }
}
