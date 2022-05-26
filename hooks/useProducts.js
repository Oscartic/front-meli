import { useReducer } from "react";

const ACTION = {
    IS_FETCHING: 'IS_FETCHING',
    GET_PRODUCTS: 'GET_PRODUCTS',
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
        case ACTION.GET_PRODUCTS:
            return {
                ...state,
                isFetch: false,
                error: '',
                products: action.payload
            };
        case ACTION.SEARCH:
            return {
                ...state,
                search: action.payload
            };
        default: 
            return state
    }
};

const useProducts = () => {
    const [state, dispatch] = useReducer(reducer, {
        isFetch: false,
        error: '',
        search: '',
        products: [],
    });

    const { isFetch, error, search, products } = state;

    return {
        isFetch, 
        error, 
        search,
        products,
        setProducts: products => dispatch({ type: ACTION.GET_PRODUCTS, payload: products }),
        setSearch: search => dispatch({ type: ACTION.SEARCH, payload: search }),
        setFetch: () => dispatch({ type: ACTION.IS_FETCHING }),
        setError: error => dispatch({ type: ACTION.ERROR, payload: error })
    };
};

export default useProducts;
