import express from 'express';

const app = express();

const port = 3000;

app.use((req,res)=>{
    res.send("ESTOY ESCUCHANDO EN EL PUERTO 3000")
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
