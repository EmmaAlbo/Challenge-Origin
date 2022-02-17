import {ActionTaxType} from '../type/accion-type';


const initialState = { 
};

export const taxTypeReducer = (state = initialState,{type,payload})=>{
    switch (type) {
        case ActionTaxType.GET_TAXESTYPES:
            return {...state,payload};
        case ActionTaxType.DELETE_TAXTYPE:            
            return {...state};  
        case ActionTaxType.ADD_TAXTYPE:    
            return {...state};     
        case ActionTaxType.EDIT_TAXTYPE:    
            return {...state};   
        default:
           return state;   
    }
}

