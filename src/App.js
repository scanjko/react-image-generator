import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imgUrl: 'http://i.imgflip.com/1bij.jpg',
            topText: 'lorem1',
            bottomText: 'lorem2',
            imageArray: []
        }
    }

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response=> response.json())
            .then(data => this.setState({

                imageArray: data.data.memes
            }))


    }

    changeHandle = (event) => {
        const {name , value} = event.target;

        this.setState(
            {[name] : value }
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const randomNum = Math.floor(Math.random() * this.state.imageArray.length);

        this.setState({
            imgUrl: this.state.imageArray[randomNum].url
        });
    }


    render() {
        return (


            <div className="App">

                <div className="generator-wrapper">
                    <input name="topText" onChange={this.changeHandle} type="text"/>
                    <input name="bottomText" onChange={this.changeHandle} type="text"/>
                    <p className="generator-text-top">{this.state.topText}</p>
                    <img src={this.state.imgUrl} alt=""/>
                    <p className="generator-text-bottom">{this.state.bottomText}</p>
                    <button onClick={this.handleSubmit}>Generate image</button>
                </div>

            </div>
        );
    }
}

export default App;
