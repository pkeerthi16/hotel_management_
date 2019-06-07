import React from 'react';
import RoomFields from './components/RoomFields';
import { INITIAL_STATE } from '../constants';
import { Form, Container, Button } from './components/StyledComponents';


class RoomForm extends React.Component {

    constructor() {
        super();
        this.state = localStorage.getItem("appState") ? JSON.parse(localStorage.getItem("appState")) : INITIAL_STATE;
    }

    onCheck = (roomNo, checked) => {
        this.setState(prevState => {
            const { bookingData } = prevState;
            const newData = bookingData.map(room => {
                if (checked) {
                    if (room.roomNo > 1 && room.roomNo <= roomNo) {
                        room.selected = true;
                    }
                } else {
                    if (room.roomNo >= roomNo) {
                        room.selected = false;
                        room.numberOfAdults = 1;
                        room.numberOfChildren = 0;
                    }
                }
                return room;
            })
            return {
                bookingData: newData
            }
        })
    }

    onNumberSelect = (roomNo, count, type) => {
        if (type === 'adult') {
            this.setState(prevState => {
                const { bookingData } = prevState;
                bookingData[roomNo - 1].numberOfAdults = count;
                return {
                    bookingData
                }
            })
        } else {
            this.setState(prevState => {
                const { bookingData } = prevState;
                bookingData[roomNo - 1].numberOfChildren = count;
                return {
                    bookingData
                }
            })
        }
    }

    onSubmit = () => {
        console.log("Submitted");
        localStorage.setItem('appState', JSON.stringify(this.state));
    }

    render() {
        const { bookingData } = this.state;
        return (
            <React.Fragment>
                <Form onSubmit={this.onSubmit}>
                    {
                        bookingData.map((room, key) => <RoomFields key={key} onCheck={this.onCheck} onNumberSelect={this.onNumberSelect} {...room} />)
                    }
                </Form>
                <Container>
                    <Button id="submitButton" style={{ marginLeft: 5 }} type="submit" onClick={this.onSubmit}>Submit</Button>
                </Container>
            </React.Fragment>
        )
    }
}

export default RoomForm;