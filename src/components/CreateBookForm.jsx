import { Card, Typography, Stack, TextField, Button } from "@mui/material";

const CreateBookForm = ({handleSubmit, handleChange}) => {
  return (
    <Card sx={{ boxShadow: 24 }}>
      <form action="" style={{padding: '20px'}} onSubmit={handleSubmit}>
        <Typography color='inherit' variant="h4" component='h4' align='left'>Add Book</Typography>
        <Typography variant="body2" component='p' align='left' sx={{marginBottom: '20px'}}>Make sure you couldn't find the book before adding it! 🥸</Typography>
        <Stack spacing={3} marginBottom={4}>
          <TextField id="title" name='title' label="Title" placeholder='Title' variant="outlined" fullWidth onChange={handleChange} required/>
          <TextField id="description" multiline rows={4} name='description' label="Description" placeholder='Description' variant="outlined" fullWidth onChange={handleChange} required/>
          <TextField id="author" name='author' label="Author" placeholder='John Snow' variant="outlined" fullWidth onChange={handleChange} required/>
          <TextField id="pages" name='pages' type="number" label="Number of Pages" placeholder='200' variant="outlined" fullWidth onChange={handleChange} required/>
          <TextField id="category" name='category' label="Category" placeholder='Finances' variant="outlined" fullWidth onChange={handleChange} required/>
          <TextField id="thumbnail_url" name='thumbnail_url' label="Cover Url" placeholder='Enter an image url for the cover of the book' variant="outlined" fullWidth onChange={handleChange} required/>
          <TextField id="publisher" name='publisher' label="Publisher" placeholder='John Snow' variant="outlined" fullWidth onChange={handleChange} required/>
          <TextField id="ISBN" name='ISBN' label="ISBN" placeholder='ABC88DSAQ' variant="outlined" fullWidth onChange={handleChange} required />
        </Stack>
        <Button color='primary' variant='contained' size='large' fullWidth type='submit'>Add Book</Button>
      </form>
    </Card>
  )
};

export default CreateBookForm;
