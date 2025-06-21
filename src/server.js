const express = require("express");

const app= express();

app.use(express.json());

//Routes


//Error handling middleware


//App listen
app.listen(port , () =>{
    console.log(`Server is running on port${port}`);
});