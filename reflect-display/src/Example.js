// React components are organized in modules. Example.js is a module here.
//  App.js: where we define how all modules are organized
//          need to import components there, often explicitly naming the components being imported
//  index.js: import content from App.js. 
//            this is where the React root component are created can "connect" (kind of) to div#root in index.html and components are rendered

// In each modules, can define multiple components. 'export' in declaration so App.js can use them

export function Example1(props) {
    // Treat these like normal functions. Can include variables, ifs, loops, etc.
    console.log("Render for Example1 completed");
    
    const num = 1;
    const author = "Ha";

    // Always need to return a React element (often in form similar to html tags) according to how we want the component to appear
    // code this like how we code html
    // {} to include inline expressions (i.e. variables, etc. defined in component)
    return (
        <div>
            <p>This is an example component number {num} created by {author}</p>
        </div>
    )
}


export function Example2(props) {
    // props: naming by convention. An js object (format ~dictionary) details passed to React component so it know what and how to render content
    // using name=value syntax (similar to html attribute, but can name them arbitrarily)
    // Can see how it's used when component are called in App.js

    console.log("Render for Example2 completed");
    
    const num = props.num;
    const author = props.author;

    // To avoid having to call props in front of all properties like above, can assign the prop object properties to the variables
    // --"object destructuring" will need to learn more about this concept. 2 options
    //      1. const {num, author} = props;
    //      2. Use {num, author} as the argument for the declaration for the function
    //         => export function Example2({num, author})
    // --comment out because can only use one of the three ways
 
    return (
        <div>
            <p>This is an example component number {num} created by {author}. Utilizing props.</p>
        </div>
    )

}