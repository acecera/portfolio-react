import React, {Component} from "react";
import Jumbotron from "../../Components/Jumbotron/Jumbotron";
import Navbar from "../../Components/Navbar/Navbar";


class Home extends Component { 
    render() {
        return (
            <div className="home">
                <Navbar />
                <Jumbotron />
            </div>
        );
    }
}

export default Home;