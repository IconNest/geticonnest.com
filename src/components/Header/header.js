import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';
import { OutboundLink } from 'gatsby-plugin-google-analytics'

export default class Header extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      active: false,
    }
  }

  navClose(e) {
    this.setState({ showMenu: false, active: false })
  }

  handleScroll(event) {
    if (window.scrollY > 50) {
      document.body.classList.add('sticky')
    } else {
      document.body.classList.remove('sticky')
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  toggleButton(e) {
    this.setState({
      active: !this.state.active,
      showMenu: !this.state.showMenu,
    });
  }

  render() {
    return (
<header>
  <div className="header-sec">
    <div className="header-logo">
      <h1><a href="/"><span><svg className="icon"><use xlinkHref="#iconNest"></use></svg></span><span>Icon Nest</span></a></h1>

        <div className="mobile-menu-btn">
          <svg id="main-nav-btn">
            <use id="menuSvgIcon" xlinkHref="#menu"/>
          </svg>
        </div>
    </div>

    <div className="header-nav">
      <div className="nav"><ul><a href="https://github.com/IconNest/iconnest/blob/master/README.md">Document</a></ul></div>
      <div className="nav"><ul><a href="https://github.com/IconNest/iconnest">GitHub</a></ul></div>
      <div className="nav"><ul><a href="">Donate</a></ul></div>
    </div>

    <nav className="mobile-navs">
      <div className="mobile-navs-list">
        <div className="nav-item"><a href="https://github.com/IconNest/iconnest/blob/master/README.md">Document</a></div>
        <div className='divider'></div>
        <div className="nav-item"><a href="https://github.com/IconNest/iconnest">GitHub</a></div>
        <div className='divider'></div>
        <div className="nav-item"><a href="">Donate</a></div>
      </div>
    </nav>

  </div>
</header>
    );
  }
}
