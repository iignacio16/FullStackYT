import axios from "axios";
import React, {FC, useState} from "react"
import { Cocktail } from "../types";
import Detail from "./Detail";
import List from "./List";

enum VISTAS{
    DETALLE = "detalle",
    ARRAY = "array"
}

const Container: FC = () => {
    const switchToDetail = (id:string): void => {
        setDetailID(id);
        setVista(VISTAS.DETALLE)
    }
     const search= async(text: string): Promise<{
         drinks: Array<Cocktail> | undefined
     }> => {
         const url:string = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + text; 
         const result = await axios.get<{ drinks: Array<Cocktail> }>(url)
         console.log("resultados ok");
         return result.data
     }

     const [detailID, setDetailID] =  useState<string>("");
     const [vista,setVista] = useState<VISTAS>(VISTAS.ARRAY)
     const [searchText, setSearchText] = useState<string>("")
     const [drinks,setDrinks] = useState<Array<Cocktail>>([])


     return (<div>
         <input type="text"
         value={searchText}
         placeholder="buscar cocktel"
         onChange={(e)=> setSearchText(e.target.value)}/>
        <button onClick={async() => {
            const result = await search(searchText);
            setVista(VISTAS.ARRAY)
            setDrinks(result.drinks || [])
        }

        }>Buscar</button>
        {drinks.length > 0 && vista === VISTAS.ARRAY 
             ? <List cocktails={drinks} switchToDetail={switchToDetail}/>
             : <Detail cocktails={drinks} id = {detailID}/>}
     </div>)
}

export default Container