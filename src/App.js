import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import jake from './jake.json';

class App extends Component {
	state = {
		jake,
		userScore: 0,
		topScore: 0,
		scoreBoard: 'Click an image to begin!',
		classCorrect: ''
	};

	handleImageClick = (event) => {
		event.preventDefault();
		this.setState({
			userScore: '',
			topScore: '',
			scoreBoard: '',
			classCorrect: ''
		});
	};

	render() {
		return (
			<Wrapper>
				<Navbar>
					<li class={this.state.classCorrect}>{this.state.scoreBoard}</li>
					<li>
						Score: {this.state.userScore} | Top Score: {this.state.topScore}
					</li>
				</Navbar>
				<Header>
					<h1> Clicky-Jake Game! </h1>
					<h2>Click on every image only once to earn your points!</h2>
				</Header>
				<main class="container">
					{this.state.jake.map((jake) => <Main key={jake.id} image={jake.image} />)}
				</main>

				<Footer />
			</Wrapper>
		);
	}
}

export default App;
