import React from 'react'
import { Menu } from 'semantic-ui-react'


export default ({ setFilter, filterBy }) => {
	const {  } = props


	handleItemClick = (e, { name }) => {
		setFilter(name)
	}


	return (
		<Menu secondary>
			<Menu.Item
				name='all'
				active={activeItem === 'all'}
				onClick={setFilter}
			>
				Все
				</Menu.Item>
			<Menu.Item
				name='popular'
				active={activeItem === 'popular'}
				onClick={setFilter}
			>
				Популярные
				</Menu.Item>
			<Menu.Item
				name='price_high'
				active={activeItem === 'price_high'}
				onClick={setFilter}
			>
				Цена (дорогие)
				</Menu.Item>
			<Menu.Item
				name='price_low'
				active={activeItem === 'price_low'}
				onClick={setFilter}
			>
				Цена (дешёвые)
				</Menu.Item>
			<Menu.Item
				name='autor'
				active={activeItem === 'autor'}
				onClick={setFilter}
			>
				Автор
				</Menu.Item>
		</Menu>
	)
}

// export default class Filter extends Component {

// 	handleItemClick = (e, { name }) => { 
// 		const { setFilter } = this.props
// 		setFilter(name)
// 	}

// 	render() {
// 		const { activeItem } = this.state

// 		return (

// 		)
// 	}
// }
