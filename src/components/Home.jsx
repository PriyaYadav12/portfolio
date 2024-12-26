import React from 'react';
import Profile from './Profile';
import Projects from './Projects';
import Resume from './Resume';
import Template from './Templates';
import Welcome from './Welcome';
import Layout from './Layout';


export default function Home() {
    const gridItems = [
        { size: 8, component: <Welcome /> },
        { size: 4, component: <Profile /> },
        { size: 4, component: <Resume /> },
        { size: 4, component: <Projects /> },
        { size: 4, component: <Template /> },
      ];
    return (
        <Layout gridItems={gridItems} />
    );
};    