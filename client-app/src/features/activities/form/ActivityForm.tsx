import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

export default function ActivityForm() {
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Title' />
                <Form.TextArea placeholder='Description' />
                <Form.Input placeholder='Category' />
                <Form.Input placeholder='Start Date/Time' />
                <Form.Input placeholder='End Date/Time' />
                <Form.Input placeholder='Address' />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button floated='right' positive content='Cancel' />
            </Form>
        </Segment>
    )
}