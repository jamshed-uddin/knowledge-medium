import React from "react";

const Questions = () => {
  return (
    <div>
      <div className="py-6 ">
        <h1 className="font-bold text-4xl pl-3">
          QnA<span className="text-3xl font-semibold">s</span>
        </h1>
      </div>
      <div className="py-3">
        <h1
          className="border-l-8 border-blue-700
         py-2 px-3 text-2xl font-bold bg-gradient-to-r from-slate-200"
        >
          Props vs State
        </h1>
        <p className="my-3 px-2 text-xl">
          <span className="font-semibold text-2xl">Props</span> stand for
          properties.Props is an object that carries different types of data
          from parant component to child component.Props is read only that means
          it is immutable and it is unidirectional.We can pass data from parent
          to child components.It takes data by HTML attribute and the data get
          stored as object in props. <br />
          <span className="font-semibold text-2xl">State</span> is used when we
          need to store data that may change.When data changes react rerender
          it's DOM.Data in state is mutable.State allows to manage changing
          data.We can declare useState() to store changing data.
        </p>
      </div>
      <div className="py-3">
        <h1
          className="border-l-8 border-blue-700
         py-2 px-3 text-2xl font-bold bg-gradient-to-r from-slate-200"
        >
          How does useState works?
        </h1>
        <p className="my-3 px-2 text-xl">
          <span className="font-semibold text-2xl">useState</span> is a react
          hook which is used for store state or data that may change.useState
          returns two values.First one is initial state and another one is a
          function to set state.We use useState for chaning data because it
          re-renders the component whenever data changes.Here is the difference
          between a variable and useState.If we store a changing data in
          variable it will not re-render the data when data changes but useState
          does.
        </p>
      </div>
      <div className="py-3">
        <h1
          className="border-l-8 border-blue-700
         py-2 px-3 text-2xl font-bold bg-gradient-to-r from-slate-200"
        >
          What is the purpose of useEffect other than fetching data?
        </h1>
        <p className="my-3 px-2 text-xl">
          <span className="font-semibold text-2xl">useEffect</span> is a react
          hook that runs after every render.We can stop that by giving it a
          dependency.When there is a change in dependency code inside function
          of useEffect will execute.Without dependency it will run after evey
          render.useEffect takes two value first one is a function another one
          is dependency.There is few other use case of useEffect other than
          fetching data.useEffect runs once while fetch data.In other case it
          runs when there is changes in dependency.On state change useEffect
          used for validating input field,live filter,and other use case where a
          function need to execute on state change.
        </p>
      </div>
      <div className="py-3">
        <h1
          className="border-l-8 border-blue-700
         py-2 px-3 text-2xl font-bold bg-gradient-to-r from-slate-200"
        >
          How does react works?
        </h1>
        <p className="my-3 px-2 text-xl">
          <span className="font-semibold text-2xl">React</span> is a javascript
          library for building user interfaces.It use reuseable code snippet
          called components.React devides a user interface into components.React
          has some core features like JSX, virtual DOM, props,useState,useEffect
          eventhandler.Components are pure javascript function that returns
          JSX.Props is a object to pass data from parent components to child
          components.React has virtual DOM in it's memory.It renders every
          component not the entire DOM tree.
        </p>
      </div>
    </div>
  );
};

export default Questions;
