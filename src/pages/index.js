import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Category from "../components/category";

// menu.markdown
const menu = [
	{
		markdown: "beverages",
		name: "Beverages"
	},
	{
		markdown: "canneloni",
		name: "Canneloni"
	},
	{
		markdown: "cocktail-finger-foods",
		name: "Cocktail / Finger Foods"
	},
	{
		markdown: "frittata",
		name: "Frittata"
	},
	{
		markdown: "lasagne",
		name: "Lasagne"
	},
	{
		markdown: "morning-tea-afternoon-tea",
		name: "Morning Tea / Afternoon Tea"
	},
	{
		markdown: "moussaka",
		name: "Moussaka"
	},
	{
		markdown: "pies",
		name: "Pies"
	},
	{
		markdown: "polenta-tarts",
		name: "Polenta Tarts"
	},
	{
		markdown: "quiches",
		name: "Quiches"
	},
	{
		markdown: "salads-risotto",
		name: "Salads / Risoto"
	},
	{
		markdown: "sausage-rolls",
		name: "Sausage Rolls"
	},
	{
		markdown: "spanakopita",
		name: "Spanakopita"
	},
	{
		markdown: "sweets-tarts-cakes",
		name: "Sweet Tarts and Cakes"
	},
	{
		markdown: "wraps",
		name: "Wraps"
	}
];

const IndexPage = ({
	data: {
		allMarkdownRemark: { edges }
	}
}) => {
	const Categories = menu.map(category => {
		const Posts = edges.filter(
			edge => edge.node.frontmatter.category === category.markdown
		);
		return (
			<Category key={category.markdown} info={category} posts={Posts} />
		);
	});

	return (
		<div
			style={{
				maxWidth: "1024px",
				margin: "0 auto"
			}}
		>
			{Categories}
		</div>
	);
};

export default IndexPage;

export const pageQuery = graphql`
	query {
		allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
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
`;
