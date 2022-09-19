const learningModules = [
    {
        id : 1,
        title: "Get Element from DOM",
        description: "Whenever a web document — such as HTML is loaded in the browser. We use scripting languages(such as javaScript) to manipulate the Document Object Model(DOM). We query and update the DOM which always cause it re-rndering the web page which can cause the run time longer. But REACT frist copy the DOM, and create a virtual dom. And only re-render if there are state or prop changes or its parent component re-render. ",
        url: "/learning/1",
        route: true
    },
    {
        id : 2,
        title: "Import an Reusable component",
        description: "For Example: import componentName form 'where/foder/component' ",
        url: "/learning/2",
        route: true
    }
]

export default learningModules;
