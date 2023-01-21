## Project 3 - Recipe Database

|Title|Recipes for Everyone!|
|-|-|
|[Backend Repo](https://github.com/NStodd/Project3_backend)|https://github.com/NStodd/Project3_backend|
|[Frontend Repo](https://github.com/NStodd/Project3_frontend)|https://github.com/NStodd/Project3_frontend|
|[Live Frontend Site URL](https://eloquent-lamington-0aa9c1.netlify.app/)|https://github.com/NStodd/Project3_frontend|
|[Live Backend Site URL](https://project3-backend-tay4.onrender.com/)|https://project3-backend-tay4.onrender.com/
|Squad|Jayla Young, Max Braseth, Josh Gulledge, & Nate Stoddard|
|Seeking Approval From| Hisham |
|Trello Board|https://trello.com/b/5dhcNMXK/cooking-app|


### Description



### Technologies Used
- HTML, CSS & Javascript
- React, React Router
- Sass, cors, dotenv, morgan
- Trello, Markdown
- MongoDB, Mongoose
- Express
- Netlify & Render.com - for deployment
- (bcrypt) - not used in mvp
- [Materialize](https://materializecss.com/) - not used in mvp
- Google Fonts and Icons


### Comparative Sites for Final Look
##### Edamam Recipe Aggregator
![Some Text](https://i.imgur.com/nFlFzAX.png)

##### (Put other Comps Here)

### Frontend Routes
######Home - "/", redirects you to the index.
######Index - "/recipes", Get request, displays the full set of viewable recipes in card format.
######New - "/recipes", Post request, sends form data from the create page to add a new recipe.
######Create - "/recipes/create", Get request, displays the recipe creation page with an empty form.
######Show - "/recipes/:id", displays the details of the selected recipe.
######Delete - "/recipes/:id", Delete request, removes the recipe with the given id.

### Component Tree
 -> App
 	-> Header
	-> Outlet
		-> Route |path: '/', '/recipes'|
			-> Index Page
				-> Card - a single recipe, displayed on the index page.
			* Action for creating a new recipe
		-> Route |path: '/recipes/:id'|
			-> Show Page
		-> Route |path: '/recipes/create'|
			-> Create Page
		-> Route |path: '/recipes/update/:id'|
			* Action to create a new recipe
		-> Route |path: '/recipes/delete/:id'|
			* Action to delete a recipe

### Schema Diagram
![Schema](https://i.imgur.com/dNGNfpf.png)


### Links
