const stripe = require("stripe")("your-secret-key");

app.post("/pay", async (req, res) => {
    let charge = await stripe.charges.create({
        amount: 5000,
        currency: "usd",
        source: req.body.token,
        description: "Оплата курса"
    });
    res.send("Оплата прошла!");
});
