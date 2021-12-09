// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };
  }

  handleCLick = () => {
    // change the state
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    return (
      <div className={this.state.clicked ? "clicked" : null}
        onClick={this.handleCLick}>Hello {this.props.name}</div>
    )
  }
}
