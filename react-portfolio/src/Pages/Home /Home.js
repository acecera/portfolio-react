import React, {Component} from "react";


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