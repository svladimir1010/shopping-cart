import React from 'react';
import { Menu } from 'semantic-ui-react';

export default ({ setFilter, filterBy }) => {
        
    return (
        <Menu secondary>
            <Menu.Item
                active={filterBy === 'all'}
                onClick={setFilter.bind(this, 'all')}>
                Все
            </Menu.Item>
            <Menu.Item
                active={filterBy === 'price_high'}
                onClick={setFilter.bind(this, 'price_high')}>
                Цена (дорогие)
            </Menu.Item>
            <Menu.Item
                active={filterBy === 'price_low'}
                onClick={setFilter.bind(this, 'price_low')}>
                Цена (дешёвые)
            </Menu.Item>
            <Menu.Item
                active={filterBy === 'author'}
                onClick={setFilter.bind(this, 'author')}>
                Автор
            </Menu.Item>
        </Menu>
    );
};

// export default class Filter extends Component {

// 
// 	render() {
// 		const { filterBy } = this.state

// 		return (

// 		)
// 	}
// }
