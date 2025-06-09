import './Contact.css';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
const Contact = ({ isNavBarClosed, setIsNavBarClosed }) => {
    const isActive = location.pathname === '/' || location.pathname === '/home';

    const socialMediaData = [
        {
            id: 1,
            name: 'Kaggle',
            handle: '@pseudophoenix',
            logo: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-kaggle-an-online-community-of-data-scientists-and-machine-learners-owned-by-google-logo-color-tal-revivo.png',
            url: 'https://twitter.com/yourusername'
        },
        {
            id: 2,
            name: 'LinkedIn',
            handle: 'linkedin.com/in/alok-choudhary-9465401ab/',
            logo: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
            url: 'https://www.linkedin.com/in/alok-choudhary-9465401ab/'
        },
        {
            id: 3,
            name: 'GitHub',
            handle: 'github.com/Pseudophoenix',
            logo: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            url: 'https://github.com/Pseudophoenix'
        }
    ];
    const [formData, setFormData] = useState({
        subject: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        alert(`Message sent!\nSubject: ${formData.subject}\nDescription: ${formData.description}`);
        setFormData({ subject: '', description: '' });
    };
    return (

        <div className={`card ${isActive ? 'card-visible' : ''}`}>
            <div className='card-header' style={{ '--clr': ' ' }}>
                <h2>Contact</h2>
                <NavLink to="/" className={isNavBarClosed ? 'cross-button-closed' : 'cross-button-open'} onClick={() => setIsNavBarClosed(!isNavBarClosed)}><FaBars /></NavLink>
            </div>
            <div className="card-content">
                <div className="container">
                    <div className="two-column-container">
                        <div className="column social-column">
                            <h2>Connect With Me</h2>
                            <div className="social-media-list">
                                {socialMediaData.map((social, index) => (
                                    <div
                                        key={social.id}
                                        className={`social-item ${index % 2 === 0 ? 'left-logo' : 'right-logo'}`}
                                    >
                                        {index % 2 === 0 ? (
                                            <>
                                                <div className="social-logo">
                                                    <img src={social.logo} alt={social.name} />
                                                </div>
                                                <div className="social-details">
                                                    <h3>{social.name}</h3>
                                                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                                                        {social.handle}
                                                    </a>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="social-details">
                                                    <h3>{social.name}</h3>
                                                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                                                        {social.handle}
                                                    </a>
                                                </div>
                                                <div className="social-logo">
                                                    <img src={social.logo} alt={social.name} />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="column form-column">
                            <h2>Send Me a Message</h2>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="send-button">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;