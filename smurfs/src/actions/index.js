import axios from 'axios'

export const FETCH_SMURFS = 'FETCH_SMURFS'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'

export const ADD_SMURF = 'ADD_SMURF'
export const ADD_SUCCESS = 'ADD_SUCCESS'
export const ADD_FAIL = 'ADD_FAIL'

export const DELETE_SMURF = 'DELETE_SMURF'
export const DELETE_SUCCESS = 'DELETE_SUCCESS'
export const DELETE_FAIL = 'DELETE_FAIL'

export const getSmurfs = () => dispatch => {

    dispatch({ type: FETCH_SMURFS })

    axios.get('http://localhost:3333/smurfs/')
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        })

        .catch(err => {
            console.log(err)
            dispatch({ type: FETCH_FAIL, payload: `${err}` })
        })

}


export const postSmurf = (newSmurf) => dispatch => {

dispatch({ type: ADD_SMURF})

    axios.post('http://localhost:3333/smurfs/', newSmurf)
    .then( res => {
        // console.log( res.data )
        dispatch({ type: ADD_SUCCESS, payload: res.data})
    })

    .catch ( err => {
        // console.log(err)
        dispatch({ type: ADD_FAIL, payload: `${err}`})
    })

}

// `````````````````````````Stretch```````````````

export const deleteSmurf = (smurfId) => dispatch => {

    dispatch({ type: DELETE_SMURF })

    axios.delete(`http://localhost:3333/smurfs/${smurfId}`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: DELETE_SUCCESS, payload: res.data })
        })

        .catch(err => {
            console.log(err)
            dispatch({ type: DELETE_FAIL, payload: `${err}` })
        })

}