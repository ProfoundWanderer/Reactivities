import React, { useState, SyntheticEvent } from 'react';
import { Button, Header, Icon, Item, Label, Modal, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}

export default function ActivityList({activities, selectActivity, deleteActivity, submitting}: Props) {
    const [target, setTarget] = useState('');
    const [open, setOpen] = React.useState(false)

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
                                    basic
                                    onClose={() => setOpen(false)}
                                    onOpen={() => setOpen(true)}
                                    open={open}
                                    size='small'
                                    trigger={<Button
                                        name={activity.id}
                                        loading={submitting && target == activity.id}
                                        floated='right'
                                        content='Delete'
                                        color='red'
                                    />}
                                    >
                                    <Header icon>
                                        <Icon name='archive' />
                                        Archive Old Messages
                                    </Header>
                                    <Modal.Content>
                                        <p>
                                        Your inbox is getting full, would you like us to enable automatic
                                        archiving of old messages?
                                        </p>
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button basic color='red' inverted onClick={() => setOpen(false)}>
                                        <Icon name='remove' /> No
                                        </Button>
                                        <Button color='green' inverted onClick={(e) => {handleActivityDelete(e, activity.id); setOpen(false) }}>
                                        <Icon name='checkmark' /> Yes
                                        </Button>
                                    </Modal.Actions>
                                </Modal>
                                <Label basic content={activity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}