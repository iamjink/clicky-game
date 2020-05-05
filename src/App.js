import React, { Component, useState } from 'react';
import { useSpring, animated } from 'react-spring';
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
		scoreBoard: 'Click an Image to Begin!',
		classCorrect: '',
		clickedJake: []
	};

	shuffle = (arr) => {
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[ arr[i], arr[j] ] = [ arr[j], arr[i] ];
		}
		return arr;
	};

	handleImageClick = (event) => {
		event.preventDefault();
		let id = event.target.id;

		let clickedJake = this.state.clickedJake;
		let userScore = this.state.userScore;
		let topScore = this.state.topScore;

		if (userScore > topScore) {
			this.setState({
				topScore: userScore
			});
		}
		if (clickedJake.indexOf(id) === -1) {
			clickedJake.push(id);
			this.handleIncrement();
			this.imageShuffle();
		} else if (clickedJake.indexOf(id) > -1) {
			this.setState({
				userScore: 0,
				scoreBoard: 'You Guessed Incorrectly!',
				clickedJake: []
			});
			this.imageShuffle();
		}
		if (this.state.userScore === 12) {
			alert('You Won!');
			this.setState({
				userScore: 0,
				scoreBoard: 'You Won!',
				classCorrect: 'correct',
				clickedJake: []
			});
			this.imageShuffle();
		}

		console.log(this.state.clickedJake);
	};

	handleIncrement = () => {
		this.setState({
			userScore: this.state.userScore + 1,
			scoreBoard: 'You Guessed Correctly!',
			classCorrect: 'correct'
		});
	};

	imageShuffle = () => {
		this.setState({ jake: this.shuffle(jake) });
	};

	render() {
		return (
			<Wrapper>
				<Navbar>
					<li className={this.state.classCorrect}>{this.state.scoreBoard}</li>
					<li>
						Score: {this.state.userScore} | Top Score: {this.state.topScore}
					</li>
				</Navbar>
				<Header>
					<h1> Clicky-Jake Game! </h1>
					<h2>Click on every image only once to earn your points!</h2>
				</Header>
				<Main>
					<div className="container">
						{this.state.jake.map((jake) => (
							<div
								onClick={this.handleImageClick}
								key={jake.id}
								id={jake.id}
								className="click-item"
								role="img"
								aria-label="click item"
								style={{ backgroundImage: `url("${jake.image}")` }}
							/>
						))}
					</div>
				</Main>
				<Footer />
			</Wrapper>
		);
	}
}

export default App;
