import { Form, Link, useLoaderData } from "react-router-dom"
import ReplaceWithBr from "../function" 

function Show(props) {
    const recipe = useLoaderData()
    return (
        <div className="show_page">
            <h1 id="recipe_name_show_page">{recipe.name}</h1>
            <img className="recipe_food_img" src={recipe.image} alt={recipe.name} />
            <h2 id="recipe_ingredients_show_page">Ingredients:</h2>
            <div className="break_string">
            {/*<h3 dangerouslySetInnerHTML={{__html: ReplaceWithBr()}} /> */}
            {CreateArray().map(ingredient => {
                <dv
            })}
            </div>
            <h2 id="recipe_directions_show_page">Directions: {recipe.directions}</h2>
            <div className="show_page_UI_functions">
            <Link to={`/edit/${recipe._id}`}>
                <h2>Edit</h2>
            </Link>
            <Form action={`/delete/${recipe._id}`} method="delete">
                <input type="submit" value={`Delete ${recipe.name}`} />
            </Form></div>
        </div>
    )
}

export default Show
