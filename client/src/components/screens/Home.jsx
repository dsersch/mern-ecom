import React, { useState, useEffect } from 'react'
import classes from './Home.module.css'
import Card from '../utility/Card'
import LoadingSpinner from '../utility/LoadingSpinner'

const Home = () => {
    const [ games, setGames ] = useState([])

    useEffect(() => {
        const fetchGames = async () => {
            const response = await fetch('/games/recent', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const data = await response.json()
            setGames(data)
        }

        fetchGames()
    }, [])


    return (
        <main className={classes['home']}>
            { games.length < 1 ? <LoadingSpinner /> 
                : games.map((game) => {
                    return <Card key={game.id} gameData={game} />
                })
            }
        </main>
    )
}

export default Home