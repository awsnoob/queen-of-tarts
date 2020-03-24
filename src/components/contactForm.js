import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Message = () => {
	return (
		<div style={{ color: 'red' }}>
			<p>
				<i>Thank you for contacting Queen of Tarts!</i>
			</p>
			<p>
				<i>We will attempt to respond as soon as possible.</i>
			</p>
		</div>
	)
}

const Form = ({ handler }) => {
	return (
		<form
			action="https://getform.io/f/aeee8848-9a78-4c7c-8c15-5b4335b75203"
			method="POST"
			// onSubmit={e => handler(e)}
		>
			<h3>Have a question or special order?</h3>
			<div className="form-group">
				<input
					type="text"
					name="name"
					placeholder="Name"
					className="form-control"
					required
				/>
			</div>
			<div className="form-group">
				<input
					type="text"
					name="phone"
					placeholder="Phone or email"
					className="form-control"
					required
				/>
			</div>
			<div className="form-group">
				<textarea
					name="message"
					className="form-control"
					placeholder="What is your question?"
					rows="4"
					required
				></textarea>
			</div>
			<button type="submit" className="btn btn-outline-danger">
				We'd love to hear from you!{' '}
				{/* <FontAwesomeIcon className="ml-1" icon={faHeart} /> */}
			</button>
		</form>
	)
}

const ContactForm = () => {
	const [submit, setSubmit] = useState(false)

	const formHandler = event => {
		event.preventDefault()
		setSubmit(true)
	}

	if (submit === false) {
		return <Form handler={formHandler} />
	} else {
		return <Message />
	}
}

export default ContactForm
