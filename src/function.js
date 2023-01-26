import { useLoaderData } from "react-router-dom"

/*
function ReplaceWithBr(props) {
    const recipe = useLoaderData()
    return recipe.ingredients.replace(/,/g, "<br />")
   }
*/

function CreateArray(props) {
    const recipe = useLoaderData()
    const recipe_ingredients_array = recipe.ingredients.split(",")
    return recipe_ingredients_array
}

export default CreateArray