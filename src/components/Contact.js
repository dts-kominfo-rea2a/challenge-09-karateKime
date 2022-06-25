// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = (props) => {
    return (
        <div className='kartuNama'>
            <img src={props.data.photo} alt={props.data.name}/>
            <div className='simpan'>
                <h2>{props.data.name}</h2>
                <h3>{props.data.phone}</h3>
                <h4>{props.data.email}</h4>
            </div>
        </div>
        
        
    )
}

export default Contact;