import React, { useEffect } from "react";
import Layout from "../components/Layout";
import myself from '../assets/myself.png';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import StarIcon from '@mui/icons-material/Star';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Resume from "../assets/PriyaYadavMernResume.pdf";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';






// Work experience data
const experienceData = [
    {
        title: "Freelancer Full-stack developer",
        period: "10/2024 - 11/2024",
        company: "soo & carrots - Freelancing",
    },
    {
        title: "Software Developer",
        period: "12/2022 - 08/2024",
        company: "WLC Technology",
    },
    {
        title: "Software Engineer",
        period: "07/2021 - 11/2022",
        company: "NeuralIT",
    },
];
const educationData = [
    {
        title: "BTECH - IT",
        period: "08/2016 - 08/2020",
        school: "Thadomal Shahani Engineering college",
    },
    {
        title: "Diploma - IT",
        period: "08/2013 - 04/2016",
        company: "Dr DY Patil College",
    },

];
const skillData = ["JavaScript (ES6+)", "TypeScript", "Node.js", "Express.js",
    "React.js", "Redux", "React Query", "MongoDB",
    "Mongoose ORM", "REST API", "Responsive Design",
    "AWS", "CI/CD", "Version Control (Git)", "API Integration", "Mysql",
    "Agile Development", "Problem-Solving", "Communication", "Postman", "Jira", "Slack", "Nginx", "Webpack", "Babel"];
const batchSize = 5;
const batches = [];
for (let i = 0; i < skillData.length; i += batchSize) {
    batches.push(skillData.slice(i, i + batchSize));
}
console.log("batches:", batches);
// Self grid component
const SelfGrid = () => {
    return (
        <>
            <div className="selfContainer">
                <div className="imageSection">
                    <img
                        src={myself}
                        alt="Myself"
                        className="myImage"

                    />
                    <div className="socialMedia">
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 3,
                                marginTop: 1,
                                position: 'relative',
                                zIndex: 1,
                                marginLeft: 8,
                            }}
                        >
                            <a
                                href="https://www.linkedin.com/in/priya-yadav-24425a14a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="socialLink"
                            >
                                <LinkedInIcon fontSize="medium" className="icons" />
                            </a>
                            <a
                                href="https://github.com/PriyaYadav12"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="socialLink"
                            >
                                <GitHubIcon fontSize="medium" className="icons" />
                            </a>
                            <a
                                href="mailto:priyayadav9591@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="socialLink"
                            >
                                <EmailIcon fontSize="medium" className="icons" />
                            </a>
                        </Box>
                    </div>

                </div>

                {/* Section for the introduction */}
                <div className="introSection">
                    <h2 >Hello,<br /> I'm Priya Yadav! <span>🌟</span></h2>
                    <p>
                        A web developer by day, and a digital wizard by... well, also by day (coding at night is optional!). I specialize in turning caffeine and curiosity into clean, efficient code that powers amazing experiences on the web. Living in India, I juggle bits and bytes while dreaming of building things that make the internet a better place—one line of code at a time. When I’m not debugging, you might find me plotting to take over the world (with awesome websites and mobile Apps, of course)!"
                    </p>
                </div>

            </div>
            <div class="overlap-text">
                <span class="word">Resume</span>
                <span class="word">Resume</span>
                <span class="word">Resume</span>
            </div>

        </>
    );
};
const ExperienceGrid = () => {
    return (
        <div className="experienceScreenContainer">
            <div className="experienceDiv">
                <p className="experienceHeader">Experience</p>
                {experienceData.map((experience, index) => (
                    <div key={index} className="experienceItem">
                        <div className="experienceDetails">
                            <span className="experienceIcon"><StarIcon fontSize="small" className="icons" /></span>
                            <span className="experienceTitle">{experience.title}</span>
                            <span className="experiencePeriod">{experience.period}</span>
                            <span className="experienceCompany">{experience.company}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}
const SkillGrid = () => {
    return (<div className='resumeGrid'>
        {batches.map((batch, index) => (
            <div key={index} className="skillDiv">
                {batch.map((skill, i) => (
                    <span
                        key={i} className="skillSpan"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        ))}
    </div>);
}
const EducationGrid = () => {
    return (<div className='resumeGrid educationContainer'>
        <div className="experienceDiv">
            <p className="experienceHeader">Education</p>
            {educationData.map((education, index) => (
                <div key={index} className="experienceItem">
                    <div className="experienceDetails">
                        <span className="experienceIcon">🌟</span>
                        <span className="experienceTitle">{education.title}</span>
                        <span className="experiencePeriod">{education.period}</span>
                        <span className="experienceCompany">{education.company}</span>
                    </div>
                </div>
            ))}
        </div>

    </div>);
}
const HomeGrid = () => {
    const navigate = useNavigate();
    return (<div className="resumeGrid projectContainer">
        <div className="homeDiv" onClick={() => navigate('/')}>
            <ArrowBackIcon fontSize="medium" className="icons" />
            <p>Back to Home</p>
        </div>
        <div className="projectDiv" onClick={() => navigate('/screen/project')}>
            <ArrowForwardIcon fontSize="medium" className="icons" />
            <p>Projects</p>
        </div>
    </div>);
}
// Resume screen component
export default function ResumeScreen() {

    useEffect(() => {
        document.body.style.backgroundColor = "#131010";

        return () => {
            document.body.style.backgroundColor = "";
        };
    }, []);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = Resume;
        link.download = "PriyaYadavResume.pdf"; // Specify the file name for the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const gridItems = [
        { size: 8, component: <SelfGrid /> },
        { size: 4, component: <ExperienceGrid /> },
        { size: 4, component: <HomeGrid /> },
        { size: 4, component: <SkillGrid /> },
        { size: 4, component: <EducationGrid /> },
    ];
    return <>
        <Layout gridItems={gridItems} />
        <div className="downloadDiv">
            <DotLottieReact
                src="https://lottie.host/1f29fb23-6544-4739-b939-a336e3d1e86f/e6y4GzjqSh.lottie"
                loop
                autoplay
                onClick={handleDownload}
            />
        </div>
    </>;
}
