import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getGameDetails } from '../../actions/gameActions.js'
import classes from './GameDetails.module.css'
import LoadingSpinner from '../utility/LoadingSpinner'

const GameDetails = () => {
    const dispatch = useDispatch()
    let params = useParams()

    const gameDetails = useSelector(state => state.gameDetails)
    const { loading, error, game } = gameDetails

    
    useEffect(() => {
        dispatch(getGameDetails(params.id))
    }, [params.id, dispatch])

    return (
        <div className={classes['game-details']}>
            { loading ? <LoadingSpinner /> 
                : error ? <p>{error}</p>
                : <main>
                    <div className={classes['hero-image']} style={{backgroundImage: `url(${game.background_image})`}}></div>
                    <h1 className={classes['heading-text']}>{game.name}</h1>
                    <p className={classes['released']}>Release Date: {game.released}</p>
                    <div className={classes['description']} 
                        dangerouslySetInnerHTML={{ __html: game.description}}>
                    </div>
                </main>
            }
        </div>
    )
}

export default GameDetails