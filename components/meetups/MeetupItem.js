import { useRouter } from "next/router";
import { Fragment } from "react";
import Card from "../ui/Card";

function MeetupItem(props) {

    const router = useRouter();

    function showDetailsHandler() {
        router.push('/' + props.id);
    }

    return <Fragment>

        <li>
            {/* <Card> */}
            <div className="card">
                <div className="card__wrapper">
                    <img className="card__wrapper--image" src={props.image} alt={props.title} />
                </div>
                <div className="card__wrapper">
                    <h3 className="card__wrapper--title">{props.title}</h3>
                    <address className="card__wrapper--address">{props.address}</address>
                </div>
                <div className="card__wrapper">
                    <button onClick={showDetailsHandler} className="card__wrapper--button">
                        Show Details
                    </button>
                </div>
            </div>
            {/* </Card> */}
        </li>

    </Fragment>

}

export default MeetupItem;