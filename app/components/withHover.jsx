import * as React from "react";

export default function withHover(Component) {
  return class WithHover extends React.Component {
    state = {
      hovering: false,
    };
    mouseOver = () => {
      this.setState({ hovering: true });
    }
    mouseOut = () => {
      this.setState({ hovering: false });
    }
    render() {
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component {...this.props} hovering={this.state.hovering} />
        </div>
      );
    }
  };
}
