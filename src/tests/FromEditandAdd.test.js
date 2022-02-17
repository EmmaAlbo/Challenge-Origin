import React, { useState } from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import { ModalEditAdd } from '../components/ModalEditAdd';
import { Provider } from 'react-redux';
import store from '../store';

test('when add or edit, the rate cant be 0 ',() => {
    const summitId = 1 ;
    const search = "";
    
    const renderComponent = render(<Provider store={store}>    
                             <ModalEditAdd accion={()=>{}} showModal={true} setShowModal={()=>{}} summitId={1} taxType={{rate:0,tax_id:"test1",name:"test1"}}/>  </Provider>);
   
    const button = renderComponent.getByText('OK');
    button.click(button)
    
    const spanAlert = renderComponent.getByText("The field * is required and the rate more than 0");
    
    expect(spanAlert).not.toBeNull()
});

test('when add or edit, the name cant be empty',() => {
    const summitId = 1 ;
    const search = "";
    
    const renderComponent = render(<Provider store={store}>    
                             <ModalEditAdd accion={()=>{}} showModal={true} setShowModal={()=>{}} summitId={1} taxType={{rate:1,tax_id:"test1",name:""}}/>  </Provider>);
   
    const button = renderComponent.getByText('OK');
    button.click(button)
    
    const spanAlert = renderComponent.getByText("The field * is required and the rate more than 0");
    
    expect(spanAlert).not.toBeNull()
});
