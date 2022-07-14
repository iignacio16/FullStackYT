import React, { FC, useEffect, useState } from "react"
import { Cocktail } from "../types"
import Ingredients from "./ingredients"

const Detail: FC<{
    cocktails: Array<Cocktail>
    id: string
}> = ({ cocktails, id }) => {
    const searchByID = (id: string, cocktails: Array<Cocktail>): Cocktail | undefined => {
        const c = cocktails.find(c => c.idDrink === id);
        if (!c) console.log("no non no")
        return c;
    }

    const [cocktail, setCocktail] = useState<Cocktail | undefined>(undefined)
    const [idCocktail, setIdCocktail] = useState<string>(id)
    useEffect(() => {
        setCocktail(searchByID(id, cocktails))
    }, [idCocktail, cocktails])
    return (
        <div>
            {cocktail && <div>
                {cocktail !== cocktails.at(0) && <div onClick={() => {
                    const indice = cocktails.indexOf(cocktail);
                    setCocktail(cocktails.at(indice - 1))
                }}>Atras</div>}
                <div>{cocktail.strDrink}: <Ingredients cocktail={cocktail}/></div>
                {cocktail !== cocktails.at(-1) && <div onClick={() => {
                    const indice = cocktails.indexOf(cocktail);
                    setCocktail(cocktails.at(indice + 1))
                }}>Siguiente</div>}
            </div>}
        </div>
    )
}

export default Detail;