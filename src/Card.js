const colors = ['#5285ec', '#bb271a', '#f19d38', '#8c29f5'];

function Card(props) {
	const pClassName = props.increasing ? 'small' : 'small red';
	const initialsColor = {
		backgroundColor: colors[props.index % colors.length],
	};
	return (
		<div className='card'>
			<div className='member-info'>
				<div className='card-initials' style={initialsColor}>
					{props.initials}
				</div>
				{props.name}
				<br />
				{props.handle}
			</div>
			<div className='card-sales'>
				<p className={pClassName}>
					{props.increasing ? '\u2B06' : '\u2B07'} {props.trend}
				</p>
				<p>{props.numOfSales} Sales</p>
			</div>
			<div className='card-links'>
				<button>ONLINE</button>
				<button>PROFILE</button>
			</div>
		</div>
	);
}

export default Card;
