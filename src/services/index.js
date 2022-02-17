const { REST_BASE_URL } = require('../config/constans');

const axios = require('axios').default;

const Service = axios.create({
    baseURL: REST_BASE_URL,
    timeout: 5000
});

export const getTaxesTypesApi = async (summitId)=> Service(`/summits/${summitId}/tax-types`, {
    method: 'GET',
});

export const editTaxTypeApi = async (summitId,taxTypeId,taxType)=> Service(`/summits/${summitId}/tax-types/${taxTypeId}`, {
    method: 'PUT',
    data:  taxType,
    headers: {'Content-Type': 'application/json'}
})

export const deleteTaxTypeApi = async (summitId,taxTypeId)=> Service(`/summits/${summitId}/tax-types/${taxTypeId}`, {
    method: 'DELETE',
});

export const addTaxTypeApi = async (summitId,taxType)=> Service(`/summits/${summitId}/tax-types`, {
    method: 'POST',
    data:  taxType,
    headers: {'Content-Type': 'application/json'}
});


