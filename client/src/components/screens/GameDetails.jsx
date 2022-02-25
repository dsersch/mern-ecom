import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import classes from './GameDetails.module.css'
import LoadingSpinner from '../utility/LoadingSpinner'

const GameDetails = (props) => {
    let params = useParams()
    const [ game, setGame ] = useState({})
    
    useEffect(() => {
        const fetchGame = async () => {
            const response = await fetch(`/games/${params.id}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const data = await response.json()
            setGame(data)
        }

        fetchGame()
    }, [params.id])

    return (
        <div className={classes['game-details']}>
            { game.name ?
                <main>
                    <div className={classes['hero-image']} style={{backgroundImage: `url(${game.background_image})`}}></div>
                    <h1 className={classes['heading-text']}>{game.name}</h1>
                    <p className={classes['released']}>Release Date: {game.released}</p>
                    <div className={classes['description']} 
                        dangerouslySetInnerHTML={{ __html: game.description}}>
                    </div>
                </main>
            : <LoadingSpinner />}
        </div>
    )
}

export default GameDetails