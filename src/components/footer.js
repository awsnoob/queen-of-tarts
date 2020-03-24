import React from 'react'

const Footer = () => {
	return (
		<div
			style={{
				textAlign: 'center',
				marginTop: '4rem'
			}}
		>
			<p>All goods are made on the premises.</p>
			<p>
				NO artificial colourings, flavourings or additives used in our
				foods.
			</p>
			<p>This menu lists some of our regular dishes.</p>
			<p>Our foods change daily and are affected by seasonal produce.</p>
			<p>Delivery available. Courier charge may apply.</p>
			<a
				href="https://www.facebook.com/adelaidequeenoftarts/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={`/facebook-icon-2020.png`}
					style={{
						maxWidth: '2rem'
					}}
					className="mt-3"
					alt="Facebook page"
				/>
			</a>
		</div>
	)
}

export default Footer
