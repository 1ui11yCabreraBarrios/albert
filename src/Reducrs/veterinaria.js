import { constants } from "../Constants/cons";

const veterinaData ={

};

export default function veteriReducir( state = veterinaData , action){
    switch(action.type){
        case constants.SAVE_NEW_MOVIE:
        return {};


        default: 
        return state


    }
    

}
