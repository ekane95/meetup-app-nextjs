import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from 'next/head'

const { default: NewMeetupForm } = require("@/components/meetups/NewMeetupForm");

function NewMeetupPage() {

    const router = useRouter();

    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        console.log(data);

        router.replace('/');

    }

    return <Fragment>

        <Head>
            <title>Add a new Meetup</title>
            <meta name="description" content="Generated by create next app" />
        </Head>

        <NewMeetupForm onAddMeetup={addMeetupHandler} />

    </Fragment>

}

export default NewMeetupPage;