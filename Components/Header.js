import Link from "next/link";
import { HOME_MENU, ABOUT_US_MENU, BLOG_MENU, DISEASE_MENU, VIDEOS_MENU, CONTACT_MENU, EVENTS_MENU } from "../constant/dataKey";

export default class Header extends React.Component {

    render() {
        let diseaseTypeArray = Object.keys(this.props.diseaseCat);
        console.log("this.props", diseaseTypeArray)
        return (
            <header className="navbar navbar-inverse navbar-fixed-top bs-docs-nav navbar-fixed-top " role="banner">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link href="./">
                            <a>
                                <div className="app-logo" />
                            </a>
                        </Link>

                    </div>
                    <nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
                        <ul className="nav navbar-nav">

                            <li><Link href="/index">{HOME_MENU}</Link></li>

                            <li><Link href="/about">{ABOUT_US_MENU}</Link></li>

                            <li><Link href="#">{BLOG_MENU}</Link></li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {DISEASE_MENU} <b className="caret"></b></a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    {diseaseTypeArray.map(diseaseType =>
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="http://google.com">{diseaseType} <b className="caret"></b></a>
                                            <ul className="dropdown-menu">
                                                {this.props.diseaseCat[diseaseType].map((disease) =>
                                                    <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="#">{disease.disease_name}</a>
                                                       
                                                    </li>
                                                )}
                                               
                                            </ul>
                                        </li>
                                    )}
                                </ul>
                            </li>


                            <li><Link href="#">{VIDEOS_MENU}</Link></li>

                            <li><Link href="#">{EVENTS_MENU}</Link></li>

                            <li><Link href="/contact">{CONTACT_MENU}</Link></li>

                        </ul>
                    </nav>
                </div>

                <style global jsx>{`
                
                    header{
                        
                    }
                    .navbar-inverse{
                        background: #fff;
                        position: fixed;
                        z-index: 1;
                        width: 100%;
                        box-shadow: 0 5px 12px rgba(0,0,0,0.25);
                        border:0;

                    }
                    nav{
                        float:right;
                        padding-top:10px;
                    }
                    .app-logo{
                        width:65px;
                        height:65px;
                        background-image: url(/static/img/kidneycarelogo.png);
                        background-repeat: no-repeat;
                        background-size: contain;
                        display: inline-block;

                    }
                    .navbar-inverse .navbar-nav>li>a{
                        color:#000000a6;
                        font-size:17px;
                    }
                    .navbar-inverse .navbar-nav>li>a:hover {
                        color: #1890ff;
                        background-color: rgba(127, 193, 175, 0.22);
                        border-radius: 0px;
                    }

                    .navbar-inverse .navbar-nav>li>a::after{
                        content: '';
                        width: 0;
                        height: 3px;
                        background: #1890ff;
                        display: block;
                        position: absolute;
                        bottom: 0px;
                        // left: 0;
                        text-shadow: none;
                        -webkit-transition: all 0.60s;
                        -moz-transition: all 0.60s;
                        -o-transition: all 0.60s;
                        transition: all 0.60s;
                    }
                    .navbar-inverse .navbar-nav>li>a:hover::after {
                        width: 100%;
                        -webkit-transition: all 0.60s;
                        -moz-transition: all 0.60s;
                        -o-transition: all 0.60s;
                        transition: all 0.60s;
                    }
                    .navbar-inverse .navbar-nav>.active>a{
                        color:#1890ff;
                        background-color: #ffff;
                    }
                    .navbar-inverse .navbar-nav>.active>a:hover {
                        color: #1890ff;
                        background-color:#ffff;
                    }

                    .navbar-inverse .navbar-nav>.open>a, .navbar-inverse .navbar-nav>.open>a:focus, .navbar-inverse .navbar-nav>.open>a:hover {
                        color: #1890ff;
                        background-color:#ffff;
                    }

                    .navbar-inverse .navbar-nav>li>a:focus, .navbar-inverse .navbar-nav>li>a:hover {
                        color: #1890ff;
                        background-color: #ffff;
                    }

                    .navbar-inverse .navbar-nav>.open>a, .navbar-inverse .navbar-nav>.open>a:focus, .navbar-inverse .navbar-nav>.open>a:hover {
                        color: #1890ff;
                        background: #ffff;
                        -webkit-box-shadow:none;
                        box-shadow:none;
                    }
                    .sub-menu {
                        background-color:#ffff;
                        color:#1890ff;
                        margin-top: 9px !important;
                        text-transform:capitalize;
                    }
                    .test:hover .dropdown-menu{
                        display:block;
                    }
                    
                    .sub-panel li a{
                        text-transform:capitalize;
                        background-color:#ffff;
                        font-size: 17px;
                        font-weight:200;
                    }
                    .sub-panel li a:hover{
                        text-transform:capitalize;
                        background:#ffff;
                        color:#1890ff;
                        font-size: 17px;
                        font-weight:200;
                    }
                    .top-space{
                        margin-top:72px;
                    }
                    .navbar-nav li:hover > ul.dropdown-menu {
                        display: block;
                    }
                    .dropdown-submenu {
                        position:relative;
                    }
                    .dropdown-submenu>.dropdown-menu {
                        top: 0;
                        left: 100%;
                        margin-top:-6px;
                    }
                    
                    /* rotate caret on hover */
                    .dropdown-menu > li > a > b:hover:after {
                        text-decoration: underline;
                        transform: rotate(-90deg);
                    } 
                    
                    
                `}

                </style>
            </header>
        );
    }
}


