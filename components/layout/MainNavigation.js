import Link from "next/link";

const { Fragment } = require("react");


function MainNavigation(props) {
    return <Fragment>
        <header className="header">
            <div className="logo">
                React Meetups
            </div>
            <nav>
                <ul className="menu">
                    <li className="menu-item">
                        <Link href="/">All Meetups</Link>
                    </li>
                    <li className="menu-item">
                        <Link href="/new-meetup">Add New Meetup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </Fragment>
}

export default MainNavigation;