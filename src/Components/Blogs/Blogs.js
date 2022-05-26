import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="my-5 p-6">
                <h1 className=" text-2xl text-white bg-contain p-2 font-bold bg-sky-700">How will you improve the performance of a react application??</h1>
                <p className="text-lg font-semibold bg-sky-200 p-4">When it's necessary, keep component state local. <b p-4r />
To avoid unwanted re-renders, memorize the react component. <br />
Dynamic import is used to separate the code. <br />
In react, windowing or list virtualization is used. <br />
In React, ignore lazily loading pictures.</p>
            </div>
            <div className="my-5 p-6">
                <h1 className=" text-2xl text-white bg-contain p-2 font-bold bg-sky-700">What are the different ways to manage a state in a react application??</h1>
                <p className="text-lg font-semibold bg-sky-200 p-4">There are four different ways to manage a state in react application.  <br />
1. Local State. <br />
2. Global State.  <br />
3. Server State  <br />
4. URL state</p>
            </div>
            <div className="my-5 p-6">
                <h1 className=" text-2xl text-white bg-contain p-2 font-bold bg-sky-700">What is a unit test? Why should write unit tests?</h1>
                <p className="text-lg font-semibold bg-sky-200 p-4">Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure..</p>
            </div>
            <div className="my-5 p-6">
                <h1 className=" text-2xl text-white bg-contain p-2 font-bold bg-sky-700">How Does prototypical inheritance Work?</h1>
                <p className="text-lg font-semibold bg-sky-200 p-4">Prototypal Inheritance is a feature of JS that allows you to add methods and properties to objects. <br />
It's a method that allows one object to inherit the properties and methods of another. <br />
Object getprototype of an object is traditionally used to get and set the prototype of an object..</p>
            </div>
            <div className="my-5 p-6">
                <h1 className=" text-2xl text-white bg-contain p-2 font-bold bg-sky-700">Why you do not set the state directly in React?
For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                <p className="text-lg font-semibold bg-sky-200 p-4">One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.</p>
            </div>
        </div>
    );
};

export default Blogs;