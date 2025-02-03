import { useState } from 'react'
import { IJoke } from '../types';

const useJokes = () => {
    const [savedJokes, setSavedJokes] = useState<IJoke[]>([])

    const addJokeToSaved = (joke: IJoke) => {
        setSavedJokes((prevJokes) => [...prevJokes, joke])
    }

    const deleteJoke = (id: number) => {
        setSavedJokes((prevJokes) => prevJokes.filter(joke => joke.id != id))

    }

    return {
        savedJokes,
        addJokeToSaved,
        deleteJoke
    }
}

export default useJokes