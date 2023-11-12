import React from 'react'
import './Display.css'
export default function DisplayData(submittedData) {

  return (
    <div className='data-section'>
            <div className='submitted-data'>
            <p>
                <span>Email:</span>
                <span className='data'>{submittedData.email}</span>
            </p>
            <p>
                <span>Name:</span>
                <span className='data'>{submittedData.name}</span>
            </p>
            <p>
                <span>Address:</span>
                <span className='data'>{submittedData.addressOne}, {submittedData.addressTwo}</span>
            </p>
            <p>
                <span>City:</span>
                <span className='data'>{submittedData.city}</span>
            </p>
            <p>
                <span>Province:</span>
                <span className='data'>{submittedData.province}</span>
            </p>
            <p>
                <span>Postal Code:</span>
                <span className='data'>{submittedData.postalCode}</span>
            </p>
        </div>
    </div> 
  )
}
