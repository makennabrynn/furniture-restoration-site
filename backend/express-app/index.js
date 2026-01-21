// file explanation:
// This is your server entry point.

// What it does:
// Starts Express
// Connects to Postgres
// Defines all your API routes (/projects)
// Listens on port 4000
// Without this file → no backend exists.

const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// get files (images) from the 'uploads' folder
app.use("/uploads", express.static("uploads"));
// now the app will be able to access uploaded images through this url structure:
// http://localhost:4000/uploads/image-file-name.jpg


// multer configuration for image uploads
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });



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

// Test route to make sure database is connected and backend is running
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

// POST a new project
app.post("/projects", upload.single("image"), async (req, res) => {
    try {
        // the request body contains the text fields
        // this code is just defining the variables that will be used in the sql query based on returned data from the server request
        const { title, description, price } = req.body;

        // define the image_url variable that will be used in the sql query
        // the request file contains uploaded images 
        const image_url = req.file
        ? `http://localhost:4000/uploads/${req.file.filename}` // if there's an uploaded file, set image_url variable
        : null; // if there is no uploaded file, image_url is null

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

// DELETE a project
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

// UPDATE a project
app.patch("/projects/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { title, description, image_url, price } = req.body;

        let fields = [];
        let values = [];
        let i = 1;

        if (title) {
            fields.push(`title = $${i++}`);
            values.push(title);
        }
        if (description) {
            fields.push(`description = $${i++}`);
            values.push(description);
        }
        if (image_url) {
            fields.push(`image_url = $${i++}`);
            values.push(image_url);
        }
        if (price) {
            fields.push(`price = $${i++}`);
            values.push(price);
        }

        if (fields.length === 0) {
            return res.status(400).json({ error: "No fields to update" });
        }

        values.push(id); // last value is the id
        const query = `UPDATE projects SET ${fields.join(", ")} WHERE id = $${i} RETURNING *`;

        const result = await client.query(query, values);
        res.json(result.rows[0]);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});