import express from 'express';

const app = express();
app.get('/', (req, res) => {
    res.send('Server is ready')
});

app.get('/api/jokes', (req,res)=>{
    const jokes = [
        {
            id: 1,
            title: "First joke",
            content: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 2,
            title: "Second joke",
            content: "I told my wife she was drawing her eyebrows too high. She looked surprised."
        },
        {
            id: 3,
            title: "Third joke",
            content: "Why don't skeletons fight each other? They don't have the guts."
        },
        {
            id: 4,
            title: "Fourth joke",
            content: "Why couldn't the bicycle stand up by itself? It was two-tired."
        },
        {
            id: 5,
            title: "Fifth joke",
            content: "Why did the math book look sad? Because it had too many problems."
        }
    ];

    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})