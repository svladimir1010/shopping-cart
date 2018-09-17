import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import axios from 'axios'
import Menu from './Menu'
import BookCart from './BookCart'
import { Card } from 'semantic-ui-react'
import Filter from './Filter'
// import { setFilter } from './../actions/actionFilter';

export default class App extends Component {
	componentWillMount() {
		const { setBooks } = this.props
		axios.get('./books.json').then(({ data }) => setBooks(data))
	}
	render() {
		const { books, isReady } = this.props
		return (
			<Container>
				<Menu />
				<Filter />
				<Card.Group itemsPerRow={4}>
					{
						!isReady
						? 'Download Data ...'
						: books.map((book, i) => <BookCart  {...book} key={i} />)
					}
				</Card.Group>
			</Container>
		)
	}
}


