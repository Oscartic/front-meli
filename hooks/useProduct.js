import { useReducer } from "react";

const ACTION = {
    PARAMS_ID: 'PARAMS_ID',
    IS_FETCHING: 'IS_FETCHING',
    GET_PRODUCT: 'GET_PRODUCT',
    ERROR: 'ERROR',
}

const reducer = (state, action) => {
    switch(action.type) {
        case ACTION.PARAMS_ID:
            return {
                ...state,
                id: action.payload,
            };
        case ACTION.IS_FETCHING:
            return {
                ...state,
                isFetch: true,
                error: '',
            };
        case ACTION.ERROR:
            return {
                ...state,
                product: {},
                isFetch: false,
                error: action.payload
            };
        case ACTION.GET_PRODUCT:
            return {
                ...state,
                isFetch: false,
                error: '',
                product: action.payload
            };
        default: 
            return state
    }
};

const useProduct = () => {
    const [state, dispatch] = useReducer(reducer, {
        id: '',
        isFetch: false,
        error: '',
        product: {},
    });

    const { id, isFetch, error, product } = state;

    return {
        id,
        isFetch, 
        error, 
        product,
        setId: id => dispatch({ type: ACTION.PARAMS_ID, payload: id }),
        setProduct: product => dispatch({ type: ACTION.GET_PRODUCT, payload: product }),
        setIsFetch: () => dispatch({ type: ACTION.IS_FETCHING }),
        setError: error => dispatch({ type: ACTION.ERROR, payload: error })
    };
};

export default useProduct;
