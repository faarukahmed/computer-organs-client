import React from "react";

const Portfolio = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <div className="flex-1">
            <img src="https://thumbs.dreamstime.com/b/man-formal-suit-man-formal-suit-white-background-107682590.jpg" alt="" />
            <h1 className="text-3xl font-bold">I'm Hasan Mahmud</h1>
            <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
        </div>
        <div>
            <div className="flex-1">
                <h1 className="text-3xl font-bold">Expertise🥇</h1>
                <li>JavaScript</li>
                <li>React Js</li>
                <li>Styled Component</li>
                <li>Tailwind</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>React BootStrap</li>
                <li>JWT-Auth</li>
                <li>Firebase</li>
                <li>Context API</li>
            </div>
            <div>
                <h1 className="text-3xl font-bold">Comfortable</h1>
                <li>Node js</li>
                <li>Express js</li>
                <li>MongoDB</li>
            </div>
            <div>
                <h1 className="text-3xl font-bold">Tools & Technologies</h1>
                <li>Github</li>
                <li>VS Code</li>
                <li>Heroku</li>
                <li>Netlify</li>
                <li>Figma</li>
            </div>
        </div>
    </div>
  );
};

export default Portfolio;
