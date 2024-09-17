'use client'

import { CardSet } from "@/actions/get-sets"
import { Card, CardContent, CardMedia, Typography, Button, Box, Grid } from "@mui/material"
import Link from "next/link";

export default function Sets({ sets }: { sets: CardSet[] }) {
  const sortedSets = [...sets].sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());

  return (
    <Box p={4}>
      <Grid container spacing={4}>
        {sortedSets.map((set) => (
          <Grid item xs={12} sm={6} md={4} key={set.id}>
            <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', boxShadow: 3, p: 2 }}>
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
                <Box>
                  <Typography variant="h6" component="div">
                    {set.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {set.releaseDate}
                  </Typography>
                </Box>
                <Box mt={2}>
                  <Link href={`/boosters/${set.id}`} passHref>
                    <Button variant="contained" color="primary"
                      sx={{
                        borderRadius: '12px',
                        padding: '8px 16px',
                      }}
                    >
                      OPEN BOOSTER
                    </Button>
                  </Link>
                </Box>
              </Box>
              <CardMedia
                component="img"
                image={set.images.logo}
                alt={set.name}
                sx={{ width: 150, height: 150, objectFit: 'contain', ml: 2 }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
