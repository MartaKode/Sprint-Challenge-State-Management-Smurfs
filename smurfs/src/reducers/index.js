import { FETCH_SMURFS, FETCH_SUCCESS, FETCH_FAIL, ADD_SMURF, ADD_SUCCESS, ADD_FAIL, DELETE_SMURF, DELETE_SUCCESS, DELETE_FAIL  } from '../actions'

export const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
}

export const smurfReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_SMURFS:
            return {
                ...state,
                isLoading: true,
            }

        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false,
            }

        case FETCH_FAIL:
            return {
                ...state, 
                isLoading: false, 
                error: action.payload
            }

        
        case ADD_SMURF:
            return{
                ...state, 
                isLoading: true, 
            }    

        case ADD_SUCCESS:
            return{
                ...state,
                isLoading: false,
                smurfs: [...state.smurfs, {...action.payload, id: new Date()} ]
            }    

        case ADD_FAIL:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }    

// `````````````````````Stretch````````````````````````````
            case DELETE_SMURF:
                return{
                    ...state, 
                    isLoading: true, 
                }    
    
            case DELETE_SUCCESS:
                return{
                    ...state,
                    isLoading: false,
                    smurfs: state.smurfs.filter( smurf => {
                        return smurf.id !== action.payload
                    })
                }    
    
            case DELETE_FAIL:
                return{
                    ...state,
                    isLoading: false,
                    error: action.payload
                } 

        default:
            return state;
    }
}