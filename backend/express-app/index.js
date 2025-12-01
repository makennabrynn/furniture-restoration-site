// // prisma variabled use dto get database information
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// // load the express library
// const express = require('express');

// // create an express application object (the app)
// const app = express();

// // define the port that the backend will run on (localhost:4000)
// const port = 4000;

// // load the cors library
// // the cors library allows the backend port to communicate with the frontend port
// const cors = require("cors");
// app.use(cors());

// // allow the backend to accept from data and json
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // add routes
// // this route corresponds to localhost:4000/
// app.get('/', cors(), async (req, res) => {
//     res.send('Hello World!');
// });

// // this route corresponds to localhost:4000/projects
// app.get('/projects', async (req, res) => {
//   try {
//     // use .findMany() which returns all of the records in the tabled named 'project' in furniture_db database
//     const projects = await prisma.project.findMany();
//     // turn all the records (rows) into json
//     res.json(projects);
//     // this will return json data of the projects table when you visit localhost:4000/projects
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to fetch projects' });
//   }
// });


// // start the server
// app.listen(port, () => {
//     console.log(`listening at http://localhost:${port}`);
// })

const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// Postgres connection
const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5433,
    password: 'rootUser',
    database: 'furniture_db'
});

client.connect();

// ------- API ROUTES -------

// Test route
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// GET all projects
app.get("/projects", async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM projects");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

// POST a new product
app.post("/projects", async (req, res) => {
    try {
        const { title, description, image_url, price } = req.body;
        const result = await client.query(`
            INSERT INTO projects (title, description, image_url, price)
            VALUES ($1, $2, $3, $4) 
            RETURNING *`,
            [title, description, image_url, price]
        );
        res.json(result.rows[0]);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
})

// DELETE a product
// express uses :id for url parameters (the semicolon : indicates a variable that could change based on what product you are searching) 
app.delete("/projects/:id", async (req, res) => {
    try {
        const id = req.params.id // get the id from the url (whatever you type into localhost:4000/projects/:id, this is literally just that number)
        const result = await client.query(`
            DELETE FROM projects
            WHERE id = $1`,
            [id]  // <-- this replaces the '$1' in the query with the id from the url
        )
        res.json({ message: "Project deleted", id: id });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
