const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.sqlite', (err) =>{
    if(err) console.log(err);
    db.run('CREATE TABLE IF NOT EXISTS category (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)'); 
    db.run('CREATE TABLE IF NOT EXISTS producto (id INTEGER PRIMARY KEY AUTOINCREMENT, code INTEGER NOT NULL, name TEXT, brand TEXT, model TEXT, description TEXT, stock INTEGER, price REAL NOT NULL, category_id INTEGER, FOREIGN KEY(category_id) REFERENCES category(id))');
    db.run('CREATE TABLE IF NOT EXISTS imagen (id INTEGER PRIMARY KEY AUTOINCREMENT, url TEXT, producto_id INTEGER, destacado TEXT NOT NULL, FOREIGN KEY(producto_id) REFERENCES producto(id))');
console.log('base de datos creada')
});
module.exports = db;