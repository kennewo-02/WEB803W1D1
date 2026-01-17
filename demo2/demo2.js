class HelloMessage extends React.Component {
    render () {
        return React.createElement (
            "div",
            null,
            "Hello ",
            this.props.name
        );
    }
}

ReactDom.render (React.createElement(HelloMessage, 
    {name: "Westcliff" }),
document.getElementById('Hello-example'));