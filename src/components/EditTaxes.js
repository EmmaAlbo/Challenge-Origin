import React from 'react';

export const EditTaxes = () => {
    return (
        <div>
            <span>Name</span>
            <input type="text" className="form-control" />

            <span>Rate</span>
            <input type="text" className="form-control"/>

            <span>Tax Id</span>
            <input type="text" className="form-control"/>
        </div>
    )
}
