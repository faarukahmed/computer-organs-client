import React from 'react';

const Blog = () => {
    return (
        <div style={{padding: '50px 10%'}}>
            <div>
                <h1 className='font-bold text-3xl'>How will you improve the performance of a React Application?</h1>
                <p>Optimizing application performance is key for developers who are mindful of keeping a users experience positive to keep them on an app and engaged. According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.</p>
                <p>In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.</p>
            </div>
            <div>
                <h1 className='font-bold text-3xl'>What are the different ways to manage a state in a React application?</h1>
                <h5>So many Way to Manage a State in a react Application</h5>
                <h6>1. React Hook : Context Api</h6>
                <h6>2. Redux - State Management Tools</h6>
            </div>
            <div>
                <h1 className='font-bold text-3xl'>What is Context API ? - React Router Hook Context API ?</h1>
               <p>the Context API helps to avoid prop drilling in our React application. if you don't know about the term prop drilling. So let's understand that first. ________________ In React, we can pass the data only in a single direction, i.e. from top to down (parent to child) via props. Prop drilling is a process where we need to pass down the props at each level in a deeply nested component tree so that we can access them in the component at the lowest level. Context in React just provides a way to pass the data directly to the required components rather than passing them through every level of the component tree. So using React Context, we don't have to pass the props unnecessarily to all those intermediate components that do not need the props.</p>
               <h5>Introduction to React-Redux</h5>
               <p>The ones familiar with react will know that react is a component-based front end library tool that connects the various segments of the web page. In react, we use props (short for properties) in a component which allows the usage of non-static variables. With the help of props, we can pass these variables into various other components (child components) from the parent component. Example: Passing props from parent component to child component:</p>
            </div>
            <div>
                <h1 className='font-bold text-3xl'>How does prototypical inheritance work?</h1>
                <p>In a class-based model, you have Classes, which are represented by the triple “Parents, Variables, Methods”. Where: Parents is the list of classes you’re extending. Classes may only extend other classes; Variables is the number of variable slots that instances will have. For example, a “class Point2d(int x, int y) ” has 2 instance variables; Methods is a table of “name → function” that describes which services each instance of the class will support; Instances (or Objects) in a class-based model are represented with the tuple “Class, Values”. Where: Class is a pointer to the class triple that defines how many variables this instance supports, and what methods you can call on it; Values is a list of the values for each variable the instance has. In this model, Classes only describe how instances look like, and Instances are the only thing you can interact with. Classes cannot be instances, and you can’t inherit from Instances. “Inheritance” just means “a concatenation of the layouts”</p>
            </div>
            <div>
                <h1 className='font-bold text-3xl'>Importing: To use useState you need to import useState from react as shown below:</h1>
                <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."
                </p>
                <p>Modern versions of unit testing can be found in frameworks like JUnit, or testing tools like TestComplete. Look a little further and you will find SUnit, the mother of all unit testing frameworks created by Kent Beck, and a reference in chapter 5 of The Art of Software Testing . Before that, it's mostly a mystery. I asked Jerry Weinberg about his experiences with unit testing -- "We did unit testing in 1956. As far as I knew, it was always done, as long as there were computers".

                Regardless of when and where unit testing began, one thing is for sure. Unit testing is here to stay. Let's look at some more practical aspects of unit testing.</p>
            </div>
            <div>
                <h1 className='font-bold text-3xl'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                <p>The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. Syntax: The first element is the initial state and the second one is a function that is used for updating the state.

                We can also pass a function as an argument if the initial state has to be computed. And the value returned by the function will be used as the initial state.

                Importing: To use useState you need to import useState from react as shown below:</p>
            </div>
        </div>
    );
};

export default Blog;