import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hi Docker!');
});

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
})
