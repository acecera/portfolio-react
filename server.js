const require = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('react-portfolio'));

app.listen(PORT, function() {
    console.log("Portfolio running on port ${PORT}!");
});