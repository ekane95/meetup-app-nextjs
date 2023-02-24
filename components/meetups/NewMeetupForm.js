import { Fragment, useRef } from "react";


function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        }

        props.onAddMeetup(meetupData);
    }

    return <Fragment>
        <form className="form card" onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required id='title' ref={titleInputRef} />
            </div>

            <div className="form-group">
                <label htmlFor='image'>Meetup Image</label>
                <input type='text' required id='image' ref={imageInputRef} />
            </div>

            <div className="form-group">
                <label htmlFor='address'>Addres</label>
                <input type='text' required id='address' ref={addressInputRef} />
            </div>

            <div className="form-group">
                <label htmlFor='description'>Description</label>
                <textarea ref={descriptionInputRef}></textarea>
            </div>

            <div className="form-group text-right">
                <input type='submit' value="Add Meetup" />
            </div>

        </form>
    </Fragment>
}

export default NewMeetupForm;