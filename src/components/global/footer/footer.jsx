import React from 'react'
import "./footer.scss";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import CustomButton from '../button/button';

const citiesNameList = [
    { name: "San Francisco" },
    { name: "Miami" },
    { name: "San Diego" },
    { name: "East Bay" },
    { name: "Long Beach" },
    { name: "Los Angeles" },
    { name: "Washington DC" },
    { name: "Seattle" },
    { name: "Portland" },
    { name: "Nashville" },
    { name: "New York City" },
    { name: "Orange County" },
    { name: "Atlanta" },
    { name: "Charlotte" },
    { name: "Denver" },
    { name: "Chicago" },
    { name: "Phoenix" },
    { name: "Las Vegas" },
    { name: "Sacramento" },
    { name: "Oklahoma City" },
    { name: "Columbus" },
    { name: "New Mexico" },
    { name: "Albuquerque" },
    { name: "Sacramento" }, // Duplicate, included intentionally
    { name: "New Orleans" }
];
const linkList =
    [
        {
            "section": "COMPANY",
            "links": [
                { "title": "About Us", "link": "/about-us" },
                { "title": "Team", "link": "/team" },
                { "title": "Careers", "link": "/careers" },
                { "title": "Blog", "link": "/blog" }
            ]
        },
        {
            "section": "CONTACT",
            "links": [
                { "title": "Help & Support", "link": "/help-support" },
                { "title": "Partner with us", "link": "/partner-with-us" },
                { "title": "Ride with us", "link": "/ride-with-us" },
                { "title": "Ride with us", "link": "/ride-with-us" }
            ]
        },
        {
            "section": "LEGAL",
            "links": [
                { "title": "Terms & Conditions", "link": "/terms-and-conditions" },
                { "title": "Refund & Cancellation", "link": "/refund-cancellation" },
                { "title": "Privacy Policy", "link": "/privacy-policy" },
                { "title": "Cookie Policy", "link": "/cookie-policy" }
            ]
        },
        {
            "section": "LEGAL",
            "links": [
                { "title": "Terms & Conditions", "link": "/terms-and-conditions" },
                { "title": "Refund & Cancellation", "link": "/refund-cancellation" },
                { "title": "Privacy Policy", "link": "/privacy-policy" },
            ]
        }
    ]

export default function Footer() {

    return (
        <footer className='footerPart'>
            <div className='cityPart'>
                <h3>OUR TOP CITIES</h3>
                <ul>
                    {
                        citiesNameList.map((item) => (
                            <li>
                                <a href="#">
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <hr />
            <div className='linkListPart'>
                {linkList.map((section, i) => (
                    <div key={i}>
                        <h2>{section.section}</h2>
                        <ul>
                            {section.links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.link}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className='socialMediaPart'>
                <div className='socialMediaLinks'>
                    <h2>FOLLOW US</h2>
                    <ul>
                        <li>
                            <a href="#">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaTwitter />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='mailbox'>
                    <p>
                        Receive exclusive offers and
                        discounts in your mailbox
                    </p>
                    <form className="inputWrapper">
                        <div className='input'>
                            <span>
                                <IoMail />
                            </span>
                            <input type="email" placeholder='Enter Email' required />
                        </div>
                        <CustomButton btnType='submit'  btnTxt={"Subscribe"}/>
                    </form>
                </div>
            </div>
            <hr />
            <div className="copyRightPart">
                <span>
                    All rights Reserved © Your Company, 2021
                </span>
            </div>
        </footer>
    )
}
