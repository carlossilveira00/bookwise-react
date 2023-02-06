import { UserCard } from "../components/UserCard";
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Box, Container, Grid, Stack } from "@mui/material";
import BookCard from "../components/BookCard";
import { maxWidth } from "@mui/system";

const LibraryPage = () => {
  return (
    <Container sx={{mt: 5}}>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <UserCard></UserCard>
        </Grid>
        <Grid item xs={9}>
          {/* Wishlist Dropdown */}
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-label="Expand"
              aria-controls="-content"
              id="-header"
            >
              <Typography variant="body1" color="inherit">Wishlist</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{maxHeight: '500px', overflow: 'scroll'}}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <BookCard title={'Hey Lion'}></BookCard>
                </Grid>
                <Grid item xs={6}>
                  <BookCard title={'Hey Cat'}></BookCard>
                </Grid>
                <Grid item xs={6}>
                  <BookCard title={'Hey John'}></BookCard>
                </Grid>
                <Grid item xs={6}>
                  <BookCard title={'Hey Joe'}></BookCard>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          {/* In Progress Dropdown */}
          <Accordion sx={{marginTop: 2}}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-label="Expand"
              aria-controls="-content"
              id="-header"
            >
              <Typography variant="body1" color="inherit">In Progress</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{maxHeight: '500px', overflow: 'scroll'}}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <BookCard title={'Hey Lion'}></BookCard>
                </Grid>
                <Grid item xs={6}>
                  <BookCard title={'Hey Cat'}></BookCard>
                </Grid>
                <Grid item xs={6}>
                  <BookCard title={'Hey John'}></BookCard>
                </Grid>
                <Grid item xs={6}>
                  <BookCard title={'Hey Joe'}></BookCard>
                </Grid>
                <Grid item xs={6}>
                  <BookCard title={'Hey Joe'}></BookCard>
                </Grid>
                <Grid item xs={6}>
                  <BookCard title={'Hey Joe'}></BookCard>
                </Grid>
                <Grid item xs={6}>
                  <BookCard title={'Hey Joe'}></BookCard>
                </Grid>
                <Grid item xs={6}>
                  <BookCard title={'Hey Joe'}></BookCard>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          {/* Completed Dropdown */}
          <Accordion sx={{marginTop: 2}}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-label="Expand"
              aria-controls="-content"
              id="-header"
            >
              <Typography variant="body1" color="inherit">Completed</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{maxHeight: '500px', overflow: 'scroll'}}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <BookCard title={'Hey Lion'}></BookCard>
                </Grid>
                <Grid item xs={6}>
                  <BookCard title={'Hey Cat'}></BookCard>
                </Grid>
                <Grid item xs={6}>
                  <BookCard title={'Hey John'}></BookCard>
                </Grid>
                <Grid item xs={6}>
                  <BookCard title={'Hey Joe'}></BookCard>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Container>
  )
};

export default LibraryPage;
