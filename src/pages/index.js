import React from 'react'
import { graphql } from 'gatsby'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../styles.css'
import Category from '../components/category'
import menu from '../data/menu.json'
import Footer from '../components/footer'
import ContactForm from '../components/contactForm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'

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
							src={`/complete-full.png`}
							className="img-fluid mb-5"
							alt="Queen of tarts logo"
						/>

						<h1
							className="display-4"
							style={{
								lineHeight: '1',
								marginBottom: '0'
							}}
						>
							Ph. 8223 1529
						</h1>

						<a
							className="d-inline-block pt-3 animated-icon-trigger"
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.google.com/maps/dir/Current+Location/178+Hutt+St+Adelaide+SA+5000"
						>
							<h2 className="mb-0" style={{ lineHeight: '1' }}>
								178 Hutt Street, Adelaide SA 5000
							</h2>
							<p style={{ lineHeight: '1' }}>
								<small>Need directions to our shop?</small>
								<FontAwesomeIcon
									className="ml-2 animated-icon"
									icon={faShippingFast}
								/>
							</p>
						</a>

						<p
							className="mt-4"
							style={{
								marginBottom: '5rem'
							}}
						>
							No artificial flavours, colours or preservatives{' '}
							<br /> so you only get the real thing!
						</p>

						<ContactForm />
					</div>
				</div>
				<div className="pt-5">
					<div style={{ textAlign: 'center', marginBottom: '2rem' }}>
						<h3 className="menu-sign">MENU</h3>
					</div>
					{Categories}
				</div>
			</div>
			<Footer />
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
