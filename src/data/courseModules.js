const learningModules = [
    {
        id : 1,
        title: "Get Element from DOM",
        description: "We use scripting languages(such as javaScript) to manipulate the Document Object Model(DOM). \n\nTo query and update the DOM cause it re-rendering the web page which can cause the run time longer. But REACT frist copy the DOM, and create a virtual dom. And only re-render if there are state or prop changes or its parent component re-render. ",
        democode : [
            "const root = ReactDOM.createRoot(document.getElementById('root'));\\n\\n",
            "root.render(<h1>Hello, world!</h1>);",
        ],
        url: "/learning/1",
        route: true
    },
    {
        id : 2,
        title: "Using Embedding Expressions in JSX",
        description: " we declare a variable called name and then use it inside JSX by wrapping it in curly braces: ",
        democode : [
            "const task = 'React Sandwich';\n\t",
            "const element = <div>Today, we are making {task}</div>",
        ],
        url: "/learning/2",
        route: true
    },
    {
        id: 3,
        title: "Reusable component",
        description: "Think of it like lego, For Example: import componentName form 'where/foder/component' ",
        democode : [
            "const task = 'React Sandwich';\n\t",
            "const element = <div>Today, we are making {task}</div>",
        ],
        url: "/learning/3",
        route: true
    },
    {
        id: 4,
        title: "Reusable Components with Props in React",
        description: "Props is short for properties. When you need to pass data down from a parent component to a child component, props make this possible. This makes it so easy to create reusable items.",
        democode : [
           "function Square(props) {",
            "return ( ",
            " <button className='square' onClick={props.onClick}>",
            "{props.value}" ,   
            "</button>" , 
            ");",
          "}'",
        ],
        url: "/learning/4",
        route: true
    },
    {
        id: 5,
        title: "Rendering Data from json",
        description:[ "",
        ],
        url: "/learning/5",
        route: true
    },
    {
        title: "react form"
    },
    {
        title: "Multi Step Form With React & Material UI",
        reference: 'https://www.youtube.com/watch?v=zT62eVxShsY'
    }
]

export default learningModules;
