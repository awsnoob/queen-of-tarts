import React from 'react'

const PostLink = ({ post }) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2
	})

	const price = formatter.format(post.frontmatter.price)

	return (
		<div style={{ marginBottom: '.75rem' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between'
				}}
			>
				<p>
					<strong>{post.frontmatter.title}</strong>
				</p>
				<p style={{ whiteSpace: 'nowrap', paddingLeft: '3rem' }}>
					<strong>
						{post.frontmatter.price_xtra
							? `${price}${post.frontmatter.price_xtra}`
							: price}
					</strong>
				</p>
			</div>
			<div dangerouslySetInnerHTML={{ __html: post.html }}></div>
		</div>
	)
}

export default PostLink
