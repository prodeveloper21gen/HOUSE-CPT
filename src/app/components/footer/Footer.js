import React from 'react';
import Button from '../button/Button';

const linkBlok1 = [
    { text: 'Home' },
    { text: 'About' },
    { text: 'Gallery' },
    { text: 'Service' },
];

const lb2 = [
    { text: 'E-mail' },
    { text: 'Mobile' },
    { text: 'Whatsapp' },
    { text: 'Fax' },
];

const lb3 = [
    { text: 'Job' },
    { text: 'Part-time' },
    { text: 'Internship' },
    { text: 'Service' },
];

const lb4 = [
    { text: 'Affiliate' },
    { text: 'Collaboration' },
    { text: 'Investment' },
    { text: 'People' },
];

const Footer = () => {
    return (
        <footer className="bg-[#023047] text-white py-10 rounded-t mt-10">
            <div style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }} className="max-w-screen-xl mx-auto px-5 grid gap-6">
                <div className="footer-brand">
                    <h2 className="text-3xl mb-4">DB-</h2>
                    <p className="text-sm text-gray-400 mb-5">Lienzo street number 12<br />Jakarta, Indonesia</p>
                    <Button text='Get directions' />
                </div>

                <div className="footer-section">
                    <h3 className="text-lg font-semibold mb-5">Menu</h3>
                    <ul>
                        {linkBlok1.map((link, i) => (
                            <li key={i} className="mb-3">
                                <a href='#' className="text-sm text-gray-400 hover:text-white transition duration-300">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="text-lg font-semibold mb-5">Contact</h3>
                    <ul>
                        {lb2.map((link, i) => (
                            <li key={i} className="mb-3">
                                <a href='#' className="text-sm text-gray-400 hover:text-white transition duration-300">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="text-lg font-semibold mb-5">Career</h3>
                    <ul>
                        {lb3.map((link, i) => (
                            <li key={i} className="mb-3">
                                <a href='#' className="text-sm text-gray-400 hover:text-white transition duration-300">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="text-lg font-semibold mb-5">Business</h3>
                    <ul>
                        {lb4.map((link, i) => (
                            <li key={i} className="mb-3">
                                <a href='#' className="text-sm text-gray-400 hover:text-white transition duration-300">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="footer-bottom text-center text-sm text-gray-400 mt-10">
                <p>2021 - Copyright ZHB Studio</p>
            </div>
        </footer>
    );
};

export default Footer;
