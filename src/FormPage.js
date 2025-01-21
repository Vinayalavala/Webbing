import React from 'react';
import Footer from './Footer';

function FormPage({ addCard, cards, deleteCard }) {
    return (
        <div className="form-page">
            <h2>Add Candidate</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const newCard = {
                        name: formData.get('name'),
                        role: formData.get('role'),
                        email: formData.get('email'),
                        phone: formData.get('phone'),
                        course: formData.get('course'),
                        status: formData.get('status'),
                    };
                    addCard(newCard);
                    e.target.reset();
                }}
            >
                <label>Name:</label>
                <input name="name" placeholder="Enter your name" required />

                <label>Role:</label>
                <input name="role" placeholder="Enter your role" required />

                <label>Email:</label>
                <input name="email" placeholder="Enter your email" required />

                <label>Phone Number:</label>
                <input name="phone" placeholder="Enter your phone number" required />

                <label>Course:</label>
                <select name="course" required>
                    <option value="">Select a course</option>
                    <option value="Course 1">Web Development</option>
                    <option value="Course 2">UI/UX Design</option>
                    <option value="Course 3">React Basics</option>
                </select>

                <label>Status:</label>
                <select name="status" required>
                    <option value="Unplaced">Unplaced</option>
                    <option value="Placed">Placed</option>
                </select>

                <div>
                <button type="submit">Submit</button>
                </div>
            </form>

            <div className="card-container">
                {cards.map((card, index) => (
                    <div key={index} className="card">
                        <p>Name: {card.name}</p>
                        <p>Role: {card.role}</p>
                        <p>Email: {card.email}</p>
                        <p>Phone: {card.phone}</p>
                        <p>Course: {card.course}</p>
                        <p>Status: {card.status}</p>
                        <button onClick={() => deleteCard(index)}>Delete</button>
                    </div>
                ))}
            </div>

            <Footer/>
        </div>
    );
}

export default FormPage;
