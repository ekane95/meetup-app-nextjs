import { Fragment } from "react";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {

    return <Fragment>

        <ul>
            {props.meetups.map((meetup) => (
                <MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                />
            )
            )}
        </ul>

    </Fragment>

}

export default MeetupList;