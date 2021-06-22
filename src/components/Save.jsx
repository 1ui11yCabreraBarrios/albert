import React, { useState, useEffect } from "react";
import { saveNewPelicula, updaptePelicula } from "../Actions/action";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import { Input } from "@material-ui/core";
import { FormControl, FormHelperText,Container,Grid } from "@material-ui/core";
import Box from '@material-ui/core/Box';



const Save = () => {
  const dispatch = useDispatch();
  const { editMovie, updateMovie } = useSelector((state) => state.movies);
  const [movie, setMovie] = useState("");
  

  useEffect(() => {
    setMovie(updateMovie == null ? "" : updateMovie.movie);
  }, [updateMovie]);

  return (
    <>

      <h4 className="text-center">{editMovie ? (<Box color="secondary.main">Edit Movie</Box>) : ((<Box color="secondary.main">Save Movie</Box>))}</h4>
      <Container>
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        
        >


      <FormControl >
  
        
        <Input
      
          id="my-input"
          aria-describedby="my-helper-text"
          onChange={(e) => setMovie(e.target.value)}
          value={movie}
        />
        <FormHelperText id="my-helper-text">
          *********************************
        </FormHelperText>
       

        {editMovie ? (
          <Button
            variant="contained"
            color="primary"
            startIcon={<EditIcon />}
            className=" btn-block"
            onClick={(e) => {
              e.preventDefault();
              dispatch(updaptePelicula(movie, updateMovie.index));
            }}
          >
            Edit
          </Button>
        ) : (
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={(e) => {
              e.preventDefault();
              dispatch(saveNewPelicula(movie));
              setMovie("");
              
            }}
            className="btn-block"
          >
            Save
          </Button>
        )}
      </FormControl>
      </Grid>
      </Container>
    </>
  );
};

export default Save;
