import React from 'react';
import Calendly from '../components/Calendly';

function Contact() {
	return (
		<section className="contact">
			<div className="container">
				<div className="container-sm mx-auto w-75 bg-secondary rounded-3">
					<div className="contact-header">
						<h2 class="card-title">Contact Us</h2>
					</div>
					<form id="contact-form">
						<div className="form-group">
							<label>Name</label>
							<input type="text" className="form-control w-25" />
						</div>
						<div className="form-group">
							<label>Email</label>
							<input type="email" className="form-control w-25" />
						</div>
						<div className="form-group">
							<label>Message</label>
							<textarea className="form-control w-50" rows="5" />
						</div>
						<button type="submit" className="contact-submit-btn">
							Submit
						</button>
					</form>
				</div>
				<div>
					<Calendly />
				</div>
			</div>
		</section>
	);
}

export default Contact;