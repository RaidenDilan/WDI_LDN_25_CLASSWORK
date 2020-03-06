json.extract! recipe, :id, :name, :ingredients, :method, :cooking_time, :servings, :difficulty, :category_id, :created_at, :updated_at
json.url recipe_url(recipe, format: :json)
