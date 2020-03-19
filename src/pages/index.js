import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../styles.css'
import Category from '../components/category'

// menu.markdown
const menu = [
	{
		markdown: 'beverages',
		name: 'Beverages'
	},
	{
		markdown: 'canneloni',
		name: 'Canneloni'
	},
	{
		markdown: 'cocktail-finger-foods',
		name: 'Cocktail / Finger Foods'
	},
	{
		markdown: 'frittata',
		name: 'Frittata'
	},
	{
		markdown: 'lasagne',
		name: 'Lasagne'
	},
	{
		markdown: 'morning-tea-afternoon-tea',
		name: 'Morning Tea / Afternoon Tea'
	},
	{
		markdown: 'moussaka',
		name: 'Moussaka'
	},
	{
		markdown: 'pies',
		name: 'Pies'
	},
	{
		markdown: 'polenta-tarts',
		name: 'Polenta Tarts'
	},
	{
		markdown: 'quiches',
		name: 'Quiches'
	},
	{
		markdown: 'salads-risotto',
		name: 'Salads / Risoto'
	},
	{
		markdown: 'sausage-rolls',
		name: 'Sausage Rolls'
	},
	{
		markdown: 'spanakopita',
		name: 'Spanakopita'
	},
	{
		markdown: 'sweets-tarts-cakes',
		name: 'Sweet Tarts and Cakes'
	},
	{
		markdown: 'wraps',
		name: 'Wraps'
	}
]

const IndexPage = ({
	data: {
		allMarkdownRemark: { edges }
	}
}) => {
	const Categories = menu.map(category => {
		const Posts = edges.filter(
			edge => edge.node.frontmatter.category === category.markdown
		)
		return (
			<Category key={category.markdown} info={category} posts={Posts} />
		)
	})

	return (
		<div className="wrapper">
			<div className="left-right-grid">
				<div>
					<div className="left-section">
						<img
							src={`/complete.png`}
							className="img-fluid mb-5"
							alt="Queen of tarts logo"
						/>
						<p>178 Hutt Street, Adelaide SA 5000 </p>
						<h2>Ph. 8223 1529</h2>
						<p className="mt-5">
							No artificial flavours, colours or preservatives{' '}
							<br /> so you only get the real thing!
						</p>
						<a
							href="https://www.facebook.com/adelaidequeenoftarts/"
							target="_blank"
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
				</div>
				<div>
					<div style={{ textAlign: 'center', marginBottom: '2rem' }}>
						<h3>MENU</h3>
					</div>
					{Categories}
				</div>
				{/* <div>
					<div>
						<img src={`/queen.png`} className="img-fluid" alt="" />
					</div>
				</div> */}
			</div>
			<div
				style={{
					textAlign: 'center',
					marginTop: '4rem'
				}}
			>
				<p>All goods are made on the premises.</p>
				<p>
					NO artificial colourings, flavourings or additives used in
					our foods.
				</p>
				<p>This menu lists some of our regular dishes.</p>
				<p>
					Our foods change daily and are affected by seasonal produce.
				</p>
				<p>Delivery available. Courier charge may apply.</p>
			</div>
		</div>
	)
}

export default IndexPage

export const pageQuery = graphql`
	query {
		allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___price] }) {
			edges {
				node {
					id
					html
					frontmatter {
						title
						price
						category
						price_xtra
					}
				}
			}
		}
	}
`
