import React, { Component } from "react";
import CryptoCard from "./components/CryptoCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import CryptoPics from "./crypto.json";

function shufflePics(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let x = Math.floor(Math.random() * (i + 1));
    [array[i], array[x]] = [array[x], array[i]];
  }
  return array;
};

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    CryptoPics,
    currentScore: 0,
    RorW: "",
    clicked: []
  };

  Click = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.Increment();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.Reset();
    }
  };

  Increment = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      RorW: ""
    });
    if (newScore >= this.state.TopScore) {
      this.setState({ TopScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ RorW: "You win!" });
      alert("You Win!")
    }
    this.Shuffle();
  };

  Reset = () => {
    this.setState({
      currentScore: 0,
      TopScore: this.state.TopScore,
      RorW: "Hello",
      clicked: []
    });
    this.Shuffle();
  }

  Shuffle = () => {
    let shuffledPics = shufflePics(CryptoPics);
    this.setState({ CryptoPics: shuffledPics });
  };

  render() {
    return (
      <Wrapper>
        <Nav
          title="Crypto Clicky Game"
          score={this.state.currentScore}
          RorW={this.state.RorW}
        />

        <Title>
          Click on a Crpyo but Remember that if you click one twice.... no Dice! It is in a column to make it more difficult! Hit 12 and you win!
          </Title>

        <Container>
          <Row>
            {this.state.CryptoPics.map(CryptoPic => (
              <Column size="md-3 sm-6">
                <CryptoCard
                  key={CryptoPic.id}
                  Click={this.Click}
                  Increment={this.Increment}
                  Reset={this.Reset}
                  Shuffle={this.Shuffle}
                  id={CryptoPic.id}
                  image={CryptoPic.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App; 