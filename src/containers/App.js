import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as booksActions from '../actions/actionBook'
import * as filterActions from '../actions/actionFilter'
import App from '../components/App'

const mapStateToProps = ({ books }) => ({
	books: books.items,
	isReady: books.isReady
})

// const mapDispatchToProps = dispatch => ({
// 	setBooks: books => dispatch(setBooks(books))
// })

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(booksActions, dispatch),
	...bindActionCreators(filterActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
  