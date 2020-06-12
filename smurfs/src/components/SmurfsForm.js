import React, { useEffect, useState } from 'react'
import { connect, useDispatch} from 'react-redux'
import { postSmurf } from '../actions'



const SmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({ name: '', age: '', height: '' })

    const dispatch = useDispatch()
    
    // ``````````Helpers
    const handleChanges = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = e => {
        e.preventDefault()
    
        dispatch(postSmurf(newSmurf))
    
        setNewSmurf({ name: '', age: '', height: '' })
    }
    
        return (
            <form onSubmit={handleSubmit}>
                <h2>Populate Village:</h2>
                <div>
                    <input
                        type='text'
                        name='name'
                        placeholder='name'
                        value={newSmurf.name}
                        onChange={handleChanges}
                    />
                </div>
    
                <div>
                    <input
                        type='number'
                        name='age'
                        placeholder='age'
                        value={newSmurf.age}
                        onChange={handleChanges}
                    />
                </div>
    
                <div>
                    <input
                        type='text'
                        name='height'
                        placeholder='height'
                        value={newSmurf.height}
                        onChange={handleChanges}
                    />
                </div>
    
            <button >Smurfit</button>
    
            </form>
        )
    }
    
    
    // export default connect(null, {postSmurf})(SmurfForm)
    export default SmurfForm
    
    