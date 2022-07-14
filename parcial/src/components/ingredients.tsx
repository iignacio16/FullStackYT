import React, { FC } from "react"
import { Cocktail } from "../types"

const Ingredients: FC<{cocktail : Cocktail}> = ({ cocktail }) => {
    const arrayOfIngredients = (cocktail : Cocktail) : Array<string> => {
        //reduce acc(acumulador) y c (dato que añadir), Object.keys(tiene todas las claves, strDRink, strID... de cocktail)
        //entonces si c tiene la palabra ingrediente lo añadas al acumulador, con valor inicial [] 
        return Object.keys(cocktail).reduce((acc:string[], c: string) => {
            if(c.includes("Ingredient") &&(cocktail as any)[c])
                acc.push((cocktail as any)[c])
            return acc;
        }, [])
    }

        /* ejemplo reduce contar pares
        const a = [1,2,3,4,5,6]
        a.reduce((acc:number, n:number)=>{
            if(n % 2 === 0 ) acc++
            return acc
        }, 0) **(acc valor inicial 0)**
        */

    const ingredients = arrayOfIngredients(cocktail)
    return(
        <div>
            {ingredients.join(", ")}
        </div>
    )
}

export default Ingredients;