import {ActionTaxType} from '../type/accion-type';
import {getTaxesTypesApi,deleteTaxTypeApi,addTaxTypeApi,editTaxTypeApi} from '../services/index'

export const getTaxesTypes = (taxesTypes) => {
    return {
        type: ActionTaxType.GET_TAXESTYPES,
        payload : taxesTypes
    }
};

export const editTaxType = (payload) => {
    return {
        type: ActionTaxType.EDIT_TAXTYPE,
        payload: payload
    }
};

export const deleteTaxType = (payload) => {
    return {
        type: ActionTaxType.DELETE_TAXTYPE,
        payload
    }
};


export const addTaxType = (payload) => {
    return {
        type: ActionTaxType.ADD_TAXTYPE,
        payload
    }
};

export const editTaxTypeAccion = async (summitId,taxTypeId,taxType) =>{
    const response = await editTaxTypeApi(summitId,taxTypeId,taxType)
    .catch((error)=>{
        throw throwExcepcion(error,"edit",taxTypeId);       
    });
    
    return editTaxType(response);
};


export const addTaxTypeAccion = async (summitId,id,taxType) =>{
    const response = await addTaxTypeApi(summitId,taxType)
    .catch((error)=>{
        throw throwExcepcion(error,"add",taxType.id);     
    });
    return addTaxType(response);

};

export const getTaxesTypesAccion = async (summitId) =>{
    const response = await getTaxesTypesApi(summitId).then((response => {
        return response?.data?.data
    }))
    .catch((error)=>{
        throw  throwExcepcion(error,"get taxes types ","");          
    });
    return getTaxesTypes(response);
};

export const deleteTaxTypeAccion = async (summitId,taxTypeId) =>{
    const response = await deleteTaxTypeApi(summitId,taxTypeId)    
    .catch((error)=>{
        throw  throwExcepcion(error,"delete",taxTypeId);          
    });
   
    return deleteTaxType({summitId,taxTypeId});
};

const throwExcepcion = (error,accion,taxTypeId) =>{
    let message = "";
    if( error.response ){
        message = `The api throw error the next errors "${JSON.stringify(error.response.data.errors)}" to ${accion} taxTypeId  ${taxTypeId} `;
    }else
         message = `The api throw error status ${JSON.stringify(error.status)}`;
    return message;
}