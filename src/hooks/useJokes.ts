import { useState } from 'react'
import { IJoke } from '../types';

export const useJokes = () => {
    const [savedJokes, setSavedJokes] = useState<IJoke[]>([])

    const saveJoke = (joke: IJoke) => {
        setSavedJokes((prevJokes) => [...prevJokes, joke])
    }

    const deleteJoke = (id: number) => {
        setSavedJokes((prevJokes) => prevJokes.filter(joke => joke.id !== id))

    }

    return {
        savedJokes,
        saveJoke,
        deleteJoke
    }
}

