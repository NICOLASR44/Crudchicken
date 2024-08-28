import { db } from "../utils/db.js";

export const Recipe = {
  create: (Recipe) => {
    const query = "INSERT INTO recipes (name, description) VALUES (?, ?)";
    const params = [Recipe.name, Recipe.description];

    return new Promise((resolve, reject) => {
      db.run(query, params, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(Recipe);
        }
      });
    });
  },

  readAll: () => {
    const query = "SELECT * FROM recipes";

    return new Promise((resolve, reject) => {
      db.all(query, [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  },

  update: (id, recipe) => {
    const query = "UPDATE recipes SET name=?, description=? WHERE id= ?";
    const params = [recipe.name, recipe.description, id];

    return new Promise((resolve, reject) => {
      db.run(query, params, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(recipe);
        }
      });
    });
  },

  delete: (id) => {
    const query = "DELETE FROM recipes WHERE id= ?";
    const params = [id];

    return new Promise((resolve, reject) => {
      db.run(query, params, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  },
};
