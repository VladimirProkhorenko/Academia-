const express = require("express");
const stripe = require("stripe")("your-secret-key");

const app = express();
app.use(express.json());

app.post("/pay", async (req, res) => {
    try {
        let charge = await stripe.charges.create({
            amount: 5000, // $50.00
            currency: "usd",
            source: req.body.token,
            description: "Оплата курса"
        });
        res.send("Оплата прошла!");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(3000, () => console.log("Сервер оплаты запущен"));
