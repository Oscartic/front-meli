import { useReducer } from "react";

const ACTION = {
    IS_FETCHING: 'IS_FETCHING',
    GET_PRODUCT: 'GET_PRODUCT',
    ERROR: 'ERROR',
}

const reducer = (state, action) => {
    switch(action.type) {
        case ACTION.IS_FETCHING:
            return {
                ...state,
                isFetch: true,
                error: '',
            };
        case ACTION.ERROR:
            return {
                ...state,
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
        isFetch: false,
        error: '',
        product: {},
    });

    const { isFetch, error, product } = state;

    return {
        isFetch, 
        error, 
        product,
        setProduct: product => dispatch({ type: ACTION.GET_PRODUCT, payload: product }),
        setIsFetch: () => dispatch({ type: ACTION.IS_FETCHING }),
        setError: error => dispatch({ type: ACTION.ERROR, payload: error })
    };
};

export default useProduct;
