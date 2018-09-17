import React from 'react'
import { Card, Image } from 'semantic-ui-react'

export default ({ title, author, price, image }) => (
	<Card>
		<Image src={image} />

		<Card.Content>

			<Card.Header>
				{title}
			</Card.Header>

			<Card.Meta>
				{author}
			</Card.Meta>
		</Card.Content>
		<Card.Content extra>
			<a>
				{price} &nbsp; &#x20b4;
			</a>
		</Card.Content>
	</Card>
)