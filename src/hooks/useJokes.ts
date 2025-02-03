import { useState } from 'react'
import { IJoke } from '../types';

export const useJokes = () => {
    const [saveJokes, setSavedJokes] = useState<IJoke[]>([])

    const addJokeToSaved = (joke: IJoke) => {
        setSavedJokes((prevJokes) => [...prevJokes, joke])
    }

    const deleteJoke = (id: number) => {
        setSavedJokes((prevJokes) => prevJokes.filter(joke => joke.id != id))

    }

    return {
        saveJokes,
        addJokeToSaved,
        deleteJoke
    }
}

