import React, { Component } from 'react';

class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > this.props.showUnder) {
      this.setState({ isShown: true });
    } else {
      this.setState({ isShown: false });
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: Add smooth scrolling animation
    });
  };

  render() {
    return (
      <div>
        {this.state.isShown && (
          <button onClick={this.scrollToTop}>
            <span>UP</span>
          </button>
        )}
      </div>
    );
  }
}

export default ScrollToTop;
