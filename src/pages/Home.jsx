import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerGlobal } from '../store/slices/trainer.slice'

const Home = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const HandleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerGlobal(e.target.name.value.trim()))    
        e.target.name.value=''      
        navigate('/pokedex')
    }
    return (
        <div>
            <img src="/Home/pokedex.png" alt="" />
            <h1>¡Hola Entrenador!</h1>
            <p>Dame tu nombre para comenzar</p>
            <form onSubmit={HandleSubmit}>
                <input id='name' type="text" />
                <button >Start</button>
            </form>
        </div>
    )
}
export default Home