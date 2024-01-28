import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about">
            <div className="container">
            <h1>About Me</h1>
            <p>What’s up, everyone? Thanks for stopping by!</p>
            <p>My name is Alex Mostaghni. I’m a nonprofit event coordinator and donor relations expert turned full stack web and game developer. The first code I ever wrote was HTML with inline styling for my MySpace page. I didn’t start coding again until enrolling in <a href="https://deepdivecoding.com/fullstack-web-development/" target="_blank">Deep Dive Coding’s Full Stack Web Development Bootcamp</a> in October 2022. Fast forward to today, I’ve built a handful of web applications and one video game while another game is in development. I’m also an active member of the Rubber Ducks, Google Developer Group, and Albuquerque Software Social Club, as well as an alumni mentor for the bootcamp.</p>
            <p>When I’m not coding or partaking in developer-related shenanigans, I'm:
                <ul>
                    <li>rewatching Bob’s Burgers for the nth time.</li>
                    <li>ordering pineapple on my pizza.</li>
                    <li>going on outdoor adventures with my two rescue pug-mixes.</li>
                    <li>butchering <a href="https://open.spotify.com/playlist/5WW9MqpL8CiTVeWRi0eXot?si=08b5cd5a9a804937" target="_blank"> beloved songs</a> during karaoke.</li>
                    <li>brainstorming/researching tattoo ideas/artists for my next appointment.</li>
                </ul>
            </p>
            <p>I’m always down to learn a new programming language and collaborate on a project. Reach out so we can work together!</p>
            </div>
        </section>
    );
};

export default About;