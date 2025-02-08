import React from 'react';

export const INITIAL_STATE = {
    cardName: {
        value: "",
        errorExist: false,
        errorMsg: ""
    },
    cardNumber: {
        value: "",
        errorExist: false,
        errorMsg: ""
    },
    cardExpiryMonth: {
        value: "",
        errorExist: false,
        errorMsg: ""
    },
    cardExpiryYear: {
        value: "",
        errorExist: false,
        errorMsg: ""
    },
    cvc: {
        value: "",
        errorExist: false,
        errorMsg: ""
    },
}

const FormReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT" :
            return {
                ...state,
                [action.payload.name]: {
                    ...state[action.payload.name],
                    errorExist: false,
                    errorMsg: "",
                    value: action.payload.value

                }
            }

        case "UPDATE_ERROR": 
            return {
                ...state,
                [action.payload.name]: {
                    ...(state[action.payload.name]),
                    errorExist: action.payload.errorExist,
                    errorMsg: action.payload.errorMsg
                }
            }
        
        case "RESET_INPUT":
            return {
                ...INITIAL_STATE
            }

        default:
            return state;
    }
  
}

export default FormReducer