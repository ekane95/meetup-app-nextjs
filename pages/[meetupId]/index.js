import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from 'next/head'

function MeetupDetails(props) {
    const { meetupData } = props;

    return <Fragment>

        <Head>
            <title>{meetupData.title}</title>
            <meta name="description" content={meetupData.description} />
        </Head>

        <MeetupDetail
            image={meetupData.image}
            title={meetupData.title}
            address={meetupData.address}
            description={meetupData.description}
        />

    </Fragment>

}

export async function getStaticPaths() {

    const client = await MongoClient.connect(
        'mongodb+srv://endritkanee:hLWBWfAJxCNpAm4T@cluster0.8arpyjj.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();
    const meetupCollection = db.collection('meetups');

    const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

    client.close();

    return {
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup._id.toString()
            }
        })),
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(
        'mongodb+srv://endritkanee:hLWBWfAJxCNpAm4T@cluster0.8arpyjj.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();
    const meetupCollection = db.collection('meetups');

    const selectedMeetup = await meetupCollection.findOne({
        _id: new ObjectId(meetupId),
    });

    client.close();

    //fetch the data for a single meetup
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                description: selectedMeetup.description,
                image: selectedMeetup.image
            }
        }
    }
}

export default MeetupDetails;