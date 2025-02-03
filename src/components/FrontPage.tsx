import { useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { IJoke } from '../types';

interface FrontPageProps {
    saveJoke?: (joke: IJoke) => void
}

function FrontPage({saveJoke}: FrontPageProps) {
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

  const handleSaveJoke = () => {
    if(joke && saveJoke) {
        saveJoke(joke)
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
        Get Joke
      </Button>
      <Button variant="contained" color="primary" onClick={handleSaveJoke} sx={{ marginTop: 2, marginLeft: 2 }}>
        Save Joke
      </Button>
    </div>
  );
}

export default FrontPage;