# NPM -> it's package manager, it will manage all the packages that we will install in our system and sometime this packages also known as dependecies.

# Package.json -> It's configurtion for NPM.it keeps a track of what version of the packge is installed in our system.

# Dev Dependices -> it's generally required in development phase.

# normal Dependices -> used in production phase.

# vvip-> ^ (caret) and tilde (~) in package.json-> ^ -> minor update, ~ -> major update

# Package-lock.json -> it keeps a track of exact version of the packge is installed in our system.

# node modules -> it conation all the code which we fetched form npm.... it's a collection of depencies.it's kind of database for all our packages , all our files, all our code, all our dependecies.

# trasative dependicy ->

# if we have package.json and packagelock.json , we can re generate node modules, even if i delet my node modules.

# npx -> executing our package.

# JSX -> JavaScript syntax which is easier to create react element. It's a html like syntax ..it's not html

# config driven ui

# React hooks -> it's normal js utility function

# most imp hooks -> useState(),useEffect()

# whenever state varible change react will re render the component.It keeps data layer sync with ui layer.

# React Working principle ->

React uses Reconcilation algorithem it's also known as React fiber.

Virtual Dom is not a reat dom, it's a representaion of actual dom.Its' basic react element which is js object.
Actaul dom are basically tags whice are <div></div><img/>etc..

DIiff alog -> it's basically find out the diffrence between updateded VM vs previous DOM.

Redux Adv -> 1. handling data, managing your store,when we use redux it's east to debug application by using redux dev tools

Redux store -> it's a big object,its kept in a central global space.which devide into slices.
Slice in redux;

# redux flow for write data===> click on react app -> dispatch (action)-> reducer function ()=>{}-> updates the slice of redux store.

# redux flow for read data==> selector(subscribing to the store)

# Redux Toolkit

-Install @reduxjs/toolkit, react-redux
-build store
-connect store to our app
-slice creation (cart)
-dispatch action

- Selector

# types of testing (devloper can do)

-Unit Testing (Major)-> React componet test in isolation || one unit of code or small compoennt
-Integration Testing (Major) -> testign the intrgration of component or where multiple componetnt affect by using some action
-End to End Testing - e2e --> testing the app as soon as user landing to page , whatever user will do throughout the journey

# React Testing Library uses jest behind the scene

# Setting up testing ij our app

- install react testing library
- install jest
- install babel jedepency for jest
- configure babel
- config parcel config file tp disable default babel transpilation
