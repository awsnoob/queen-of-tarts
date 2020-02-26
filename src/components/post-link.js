import React from "react";

const PostLink = ({ post }) => {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2
	});

	const price = formatter.format(post.frontmatter.price);

	return (
		<div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between"
				}}
			>
				<p>
					<strong>{post.frontmatter.title}</strong>
				</p>
				<p>
					{post.frontmatter.price_xtra
						? `${price}${post.frontmatter.price_xtra}`
						: price}
				</p>
			</div>
			<div dangerouslySetInnerHTML={{ __html: post.html }}></div>
		</div>
	);
};

export default PostLink;
