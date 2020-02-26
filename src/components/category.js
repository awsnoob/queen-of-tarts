import React from "react";
import PostLink from "./post-link";

const Category = ({ info, posts }) => {
	const Posts = posts.map(post => {
		return <PostLink post={post.node} />;
	});
	return (
		<div>
			<h1>{info.name}</h1>
			{Posts}
		</div>
	);
};

export default Category;
