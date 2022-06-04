import Card from './Card';

function Cards(props) {
	return (
		<div className='cards'>
			{props.data.map((card, index) => (
				<Card
					key={index}
					index={index}
					name={card.name}
					handle={card.handle}
					initials={card.initials}
					trend={card.trend}
					increasing={card.increasing}
					numOfSales={card.numOfSales}
				/>
			))}
		</div>
	);
}

export default Cards;
