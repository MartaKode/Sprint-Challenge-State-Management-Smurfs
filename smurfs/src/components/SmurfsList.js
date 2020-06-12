import React, {useEffect, useState} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getSmurfs, deleteSmurf } from '../actions'


const SmurfList = props => {
const [smurfs, error] = useSelector(state => [state.smurfs, state.error])
 const dispatch = useDispatch()   

    useEffect(() => {
        dispatch(getSmurfs())
    },[smurfs])



    return (
        <div>

        {error ?  error : smurfs.map( smurf => {
            // debugger
            return (
                <div className='smurfCard' key={smurf.id}>
                <h2>Name : {smurf.name}</h2>
                <p>Age : {smurf.age}</p>
                <p>Height : {smurf.height}</p>
                    {/* `````````````Stretch`````````````` */}
                    <button onClick={() => dispatch(deleteSmurf(smurf.id))}>delete</button>
                    </div>
            )
        })}

        </div>
    )
}

// const mapStateToProps = state => {
//     console.log(state)
//     return{
//         smurfs: state.smurfs,
//         error: state.error
//     }
// }

// export default connect(mapStateToProps, {getSmurfs, deleteSmurf})(SmurfList)

export default SmurfList