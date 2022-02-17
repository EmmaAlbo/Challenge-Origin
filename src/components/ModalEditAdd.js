import { Modal } from 'antd';
import React, { useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTaxesTypesAccion } from '../actions/taxTypeActions';
import { showNotificationAccion } from '../actions/notificationAction';

export const ModalEditAdd = ({accion,showModal,setShowModal,summitId,taxType}) => {
    
    const [name, SetName] = useState(taxType?taxType?.name:"");
    const nameInput = useRef(null);
    const [rate, SetRate] = useState(taxType?taxType?.rate:"");
    const rateInput = useRef(null);
    const [taxId, SetTaxId] = useState(taxType?taxType?.tax_id:"");
    const taxIdInput = useRef(null);
    const taxes = useSelector((state) => state.taxType);
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const notification = useSelector((state) => state.notification);

    const handlerName = useCallback(() => {
        SetName(nameInput.current.value);
      }, []);
    
      const handlerRate = useCallback(() => {
        SetRate(rateInput.current.value);
      }, []);
    
      const handlerTaxId = useCallback(() => {
        SetTaxId(taxIdInput.current.value);
      }, []);

    const stopProp = (e) =>{
        e.stopPropagation();
      };
      
      const handleCancel = (e) => {
        e.stopPropagation();
        setShowModal(false);
      };
    
      const accionTaxTypeAsync = async () => {
        try {        
           dispatch(
            await accion(summitId,taxType?.id, { name: name, tax_id: taxId, rate: rate })
           );
           dispatch(await getTaxesTypesAccion(summitId));
           dispatch(showNotificationAccion(true,"Success","success"));

         } catch (error) {
           dispatch(showNotificationAccion(true,error,"error"));   
         }
      };

      const handleOk = (e) => {
        e.stopPropagation();
        if(!name.length || rate < 1 || !taxId.length ){
           setMessage("The field * is required and the rate more than 0");
           return;
        }
        accionTaxTypeAsync().then();     
        setShowModal(false);
        
      };

  return (
    <div onClick={stopProp}>
      <Modal  visible={showModal} onOk={handleOk} onCancel={handleCancel}>
        <div>
            <label htmlFor='modal-name'>Name<span className='text-danger'>*</span></label>
            <input id="modal-name" type="text" className="form-control" ref={nameInput} value={name} onChange={handlerName} />
            
            <label>Rate</label>
            <input type="number"  className="form-control" ref={rateInput} value={rate} onChange={handlerRate}/>

            <label>Tax Id</label>
            <input type="text" className="form-control" ref={taxIdInput} value={taxId} onChange={handlerTaxId}/>   
        </div>    
        {Boolean(message.length) && <span  className='text-danger'>{message}</span>}  
      </Modal> 
    </div>
  )
}
