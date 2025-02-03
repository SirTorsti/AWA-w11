import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import { IJoke } from '../types';

interface SavedPageProps {
    savedJokes: IJoke[]
    deleteJoke: (id: number) => void
}

function SavedPage({savedJokes, deleteJoke}: SavedPageProps) {
    return (
        <div>
            {savedJokes.length === 0 ? (
        <Typography variant="h6" component="div">
          No saved jokes yet.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {savedJokes.map((joke) => (
            <Grid item xs={12} sm={6} md={4} key={joke.id}>
              <Card sx={{ maxWidth: 345, marginTop: 2 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {joke.setup}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {joke.punchline}
                  </Typography>
                        <Button variant = "contained" color="secondary" onClick={() => deleteJoke(joke.id)} sx={{marginTop: 2}}>
                            Delete
                        </Button>
                    </CardContent>
                </Card>
                </Grid>
                ))}
            </Grid>
            )}
        </div>
    )
}

export default SavedPage