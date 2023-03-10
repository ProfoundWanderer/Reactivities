import React, { ChangeEvent, useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props{
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}

export default function ActivityForm({activity: selectedActivity, closeForm, createOrEdit}: Props) {

    const initialState = selectedActivity || {
        id: '',
        title: '',
        description: '',
        category: '',
        startDateTime: '',
        endDateTime: '',
        address: '',
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoCompete='off'>
                <Form.Input placeholder='Title' value={activity.title} name='title' onChange={handleInputChange} />
                <Form.TextArea placeholder='Description' value={activity.description} name='description' onChange={handleInputChange} />
                <Form.Input placeholder='Category' value={activity.category} name='category' onChange={handleInputChange} />
                <Form.Input placeholder='Start Date/Time' value={activity.startDateTime} name='startDateTime' onChange={handleInputChange} />
                <Form.Input placeholder='End Date/Time' value={activity.endDateTime} name='endDateTime' onChange={handleInputChange} />
                <Form.Input placeholder='Address' value={activity.address} name='address' onChange={handleInputChange} />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button onClick={closeForm} floated='right' positive content='Cancel' />
            </Form>
        </Segment>
    )
}