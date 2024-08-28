import sqlite3 from "sqlite3";

sqlite3.verbose();

export const db = new sqlite3.Database(`./src/utils/recipes.sqlite`);

export const initDB = () => {
  const sqlContent = `CREATE TABLE IF NOT EXISTS recipes (id INTEGER PRIMARY KEY, name TEXT , description TEXT)`;
  db.exec(sqlContent, (err) => {
    if (err) {
      console.log(`fail to load sqlquery : ${err}`);
    } else {
      console.log(`SQL content loaded`);
    }
  });
};
