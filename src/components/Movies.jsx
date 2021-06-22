import React from "react";
import Save from "./Save";
import ListMovie from "./ListMovie";
import Animation from "./Animation";
import Box from '@material-ui/core/Box';

function Movies() {
  return (
    <div className="container mt-5">
      <h1 className="text-center"><Box color="secondary.main">Colleccion the Movies</Box></h1>
      <hr />
      <div className="row">
        <div className="col-4">
          <Save />
          
          
          <Animation/>
        </div>
        <div className="col-8">
          <ListMovie />
        </div>
      </div>
    </div>
  );
}

export default Movies;
