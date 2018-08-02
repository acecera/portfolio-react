const require = require("express");
const app = express();

const PORT = process.env.PORT || 5150;

app.use(express.static('react-portfolio'));

app.listen(PORT, function() {
    console.log("Portfoliio running on port ${PORT}!");
});