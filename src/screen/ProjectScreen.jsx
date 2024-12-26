import React,{useEffect} from "react";
import dashboard from '../assets/dashboard.png';
import signup from '../assets/signup.png';
import signin from '../assets/signin.png'; 
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

const templateData = [
    {
        title: "Dashboard",
        description: "A dashboard for a web app. This is perfect for SaaS products",
        image: dashboard
    },
    {
        title: "Login",
        description: "A simple login page with a username and password field, it also has Oauth and forgot password links",
        image: signin
    },
    {
        title: "SignUp",
        description: "A simple login page with a username and password field, it also has Oauth and terms and services checkbox",
        image: signup
    }
]

export default function ProjectScreen (){
    useEffect(() => {
        document.body.style.backgroundColor = "#fff";
        document.body.style.overflow = "visible";

        return () => {
            document.body.style.backgroundColor = "";
            document.body.style.overflow = "hidden";
        };
    }, []);
    const navigate = useNavigate();

    return <>
        <div className="template-container">
            {/* Navbar */}
            <nav className="navbar">
                <div>
                    <AcUnitIcon fontSize="medium" className="unit-icon" />
                    <h1 className="header">Projects</h1>
                </div>
                <HomeIcon fontSize="large" className="home-icon" onClick={() => navigate('/')}/>
            </nav>
            <hr className="divider" />
            {/* Main Content */}
            <div className="template-content">
                {templateData.map((template, i) => (
                    <div key={i} className="template-card">
                        <img src={template.image} alt={template.title} className="template-image" />
                        <div className="template-overlay">
                            <p className="template-title">{template.title}</p>
                            <p className="template-description">{template.description}</p>
                        </div>
                    </div>

                )
                )}
            </div>

        </div>
    </>
}