import { useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { IJoke } from '../types';

interface FrontPageProps {
    addJokeToSaved: (joke: IJoke) => void
}

function FrontPage({addJokeToSaved}: FrontPageProps) {
  const [joke, setJoke] = useState<IJoke | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchJoke = async () => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke', { signal });
      const data = await response.json();
      setJoke(data);
    } catch (error) {
        console.error('Error fetching joke:', error);
    } finally {
      setLoading(false);
    }

    return () => {
      controller.abort();
    };
  };

  const saveJoke = () => {
    if(joke) {
        addJokeToSaved(joke)
    }
  }


  return (
    <div>
      
      {loading ? (
        <Typography variant="h6" component="div">
          Loading a joke...
        </Typography>
      ) : (
        joke && (
          <Card key={joke.id} sx={{ maxWidth: 345, marginTop: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {joke.setup}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {joke.punchline}
              </Typography>
            </CardContent>
          </Card>
        )
      )}
      <Button variant="contained" color="primary" onClick={fetchJoke} sx={{ marginTop: 2 }}>
        Get joke
      </Button>
      <Button variant="contained" color="primary" onClick={saveJoke} sx={{ marginTop: 2, marginLeft: 2 }}>
        Save joke
      </Button>
    </div>
  );
}

export default FrontPage;