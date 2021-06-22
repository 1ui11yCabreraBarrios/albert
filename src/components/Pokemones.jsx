import React,{useEffect} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { obtenerPokemonesAccion,  siguientePokemonAccion, anteriorPokemonAccion, unPokeDetalleAccion} from '../redux/Ducks'
import Detalle from '../components/Detalle'




const Pokemones = () => {
    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)
    const error = useSelector(state => state.pokemones.error);

    useEffect(() => {
        const fetchData = () => {
            dispatch(obtenerPokemonesAccion())
        }
        fetchData()
    }, [dispatch])

    return (
        <div className="row">
            {
                error && <p> Ha ocurrido un error {error} </p>
            }
            <div className="col-md-6">

                <h3>Lista de pokemones</h3>

                <br/>

                <div className="d-flex justify-content-between">
                    {
                        pokemones.length === 0 && 
                        <button onClick={() => dispatch(obtenerPokemonesAccion())} className="btn btn-dark">Get Pokemones</button>
                    }

                    {
                        next &&
   
                        <button  onClick={() => dispatch(siguientePokemonAccion())}  className="btn btn-primary   "

                        >
                          Next
                        </button>
                    }

                    {
                        previous &&
                        <button onClick={() => dispatch(anteriorPokemonAccion())}                 className="btn btn-primary  "

                        >
                          Previous
                        </button>
                       
                    }
                </div>

        
                
                <ul className="list-group mt-3">
                    {
                        pokemones.map(item => (
                            <li key={item.name} className="list-group-item text-uppercase">
                                {item.name}
                                <button 
                                    className="btn btn-dark btn-sm float-right"
                                    onClick={() => dispatch(unPokeDetalleAccion(item.url))}
                                >
                                    Info
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="col-md-6">
                <h3>Detalle Pokemon</h3>
                <Detalle />
            </div>
        </div>
    )
}

export default Pokemones
