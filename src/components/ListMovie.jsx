import React from "react";
import { editPelicula } from "../Actions/action";
import { deletePelicula } from "../Actions/action";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Box from '@material-ui/core/Box';


const ListMovie = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.data);
 
  

  return (
    <>
    
      <h4 className="text-center"><Box color="secondary.main">List from Movies</Box></h4>
      <ul className="list-group">
        {movies.length === 0 ? (
          <li className="list-group-item">Not the Movies</li>
        ) : (
          movies.map((item, index) => (
            <li className="list-group-item" key={index}>
              <span className="lead">{item}</span>

              <Button
              variant="contained" color="secondary"
              startIcon={<DeleteIcon />}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(deletePelicula(item));
                }}
                className="float-right mx-2"
              >
                Delete
              </Button>

              <Button variant="contained" color="primary"
               startIcon={<EditIcon/>}
                onClick={(e) => {
                  console.log(index);

                  e.preventDefault();
                  dispatch(editPelicula(index));
                }}
                className=" float-right"
              >
                Edit
              </Button>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default ListMovie;
