import React, { useState, SyntheticEvent } from 'react';
import { Button, Header, Icon, Item, Image, Label, Modal, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityList({activities, selectActivity, deleteActivity, submitting}: Props) {
    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as="a">{activity.title}</Item.Header>
                            <Item.Meta>{activity.startDateTime}</Item.Meta>
                            <Item.Meta>{activity.endDateTime}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.address}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(activity.id)} floated='right' content='View' color='blue' />
                                <Modal
                                    trigger={<Button
                                        name={activity.id}
                                        loading={submitting && target == activity.id}
                                        floated='right'
                                        content='Delete'
                                        color='red'
                                    />}
                                    header={
                                        <Header icon>
                                            <Icon name='trash alternate outline' />
                                            Are you sure that you want to delete the following event?
                                        </Header>
                                    }
                                    content={
                                        <p style={{paddingLeft: '5%', paddingTop: '2%', paddingBottom: '.75%'}}>
                                            <b>Title:</b> {activity.title}<br/>
                                            <b>Category:</b> {activity.category}<br/>
                                            <b>Address:</b> {activity.address}<br/>
                                            <b>Description:</b> {activity.description}<br/>
                                            <b>Start Date and Time:</b> {activity.startDateTime}<br/>
                                            <b>End Date and Time:</b> {activity.endDateTime}<br/>
                                        </p>
                                    }
                                    actions={
                                        [
                                            { key: 'deny', content: 'No', negative: true },
                                            { key: 'confirm', content: 'Yes', positive: true, onClick:(e:any) => {handleActivityDelete(e, activity.id)} },
                                        ]
                                    }
                                />
                                <Label basic content={activity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}