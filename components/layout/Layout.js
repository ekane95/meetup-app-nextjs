import MainNavigation from "./MainNavigation";

const { Fragment } = require("react");

function Layout(props) {
    return <Fragment>
        <MainNavigation />
        <main className="main">
            {props.children}
        </main>
    </Fragment>
}

export default Layout;