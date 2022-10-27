import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import classNames from 'classnames';
import Home from './Home';
import Blog from './Blog';
import Portfolio from './Portfolio';
import BlogDetail from './Blog-Detail';
import PortfolioItem from '../components/Portfolio-Item';
import Contact from './Contact';
import Footer from '../components/Footer';
import SvgHome from "../components/icons/Home";
import SvgSuitcaseFilled from "../components/icons/SuitcaseFilled";
import SvgWritingFilled from "../components/icons/WritingFilled";
import SvgCvFilled from "../components/icons/CvFilled";
import SvgContactFilled from "../components/icons/ContactFilled";
import SvgHomeFilled from "../components/icons/HomeFilled";
import SvgSuitcase from "../components/icons/Suitcase";
import SvgWriting from "../components/icons/Writing";
import SvgCv from "../components/icons/Cv";
import SvgContact from "../components/icons/Contact";

interface MenuItem {
    text: string;
    path: string;
    icon: any;
    iconHover: any;
}

const menuItems = [
    {
        text: 'Home',
        path: '/',
        icon: <SvgHome/>,
        iconHover: <SvgHomeFilled/>
    },
    {
        text: 'Portfolio',
        path: '/portfolyo',
        icon: <SvgSuitcase/>,
        iconHover: <SvgSuitcaseFilled/>
    },
    {
        text: 'Blog',
        path: '/blog',
        icon: <SvgWriting/>,
        iconHover: <SvgWritingFilled/>
    },
    {
        text: 'CV',
        path: '/files/bilal-ucar-cv.pdf',
        icon: <SvgCv/>,
        iconHover: <SvgCvFilled/>
    },
    {
        text: 'Contact',
        path: '/contact',
        icon: <SvgContact/>,
        iconHover: <SvgContactFilled/>
    }
];

class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            active: '/'
        };
    }

    _handleClick(menuItem: MenuItem) {
        this.setState({ active: menuItem.path });
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div id="header" className="header">
                        <div className="header__menu">
                            {menuItems.map(menuItem => {
                                const classes = classNames({
                                    'header__menu-item': true,
                                    'active': this.state.active === menuItem.path
                                });
                                return <Link
                                    key={menuItem.path}
                                    className={classes}
                                    onClick={this._handleClick.bind(this, menuItem)}
                                    to={menuItem.path}>
                                    {this.state.active === menuItem.path ? menuItem.iconHover : menuItem.icon} <span>{menuItem.text}</span>
                                </Link>
                                }
                            )}
                        </div>
                    </div>

                    <Routes>
                        <Route  path="/" element={<Home/>}/>
                        <Route  path="/portfolyo" element={<Portfolio/>}/>
                        <Route  path="/blog" element={<Blog/>}/>
                        <Route  path="/blog/:postId" element={<BlogDetail/>}/>
                        <Route  path="/portfolyo/:portfolioId" element={<PortfolioItem/>}/>
                        <Route  path="/contact" element={<Contact/>}/>
                    </Routes>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default App;
