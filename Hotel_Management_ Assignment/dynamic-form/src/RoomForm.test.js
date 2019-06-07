import React from 'react';
import ReactDOM from 'react-dom';
import RoomForm from './views/RoomForm';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import { expect } from 'chai';
import { INITIAL_STATE } from './constants';

configure({ adapter: new Adapter() })

describe('<RoomForm/>', () => {
    beforeAll(() => {
        global.localStorage = null;
    })

    it('RoomForm renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<RoomForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('Testing onSubmit in RoomForm when clicking on Button', () => {
        const component = shallow(<RoomForm />);
        const spy = sinon.spy(component.instance(), 'onSubmit');
        component.instance().forceUpdate();
        component.find('#submitButton').simulate('click');
        expect(spy.calledOnce).to.be.equal(true);
        expect(localStorage['appState']).not.to.be.equal(null);
        expect(localStorage['appState']).to.be.equal(JSON.stringify(INITIAL_STATE));
    })

    it('Testing onCheck in RoomForm', () => {

        // State with all rooms selected
        const EXPECTED_STATE = {
            bookingData: INITIAL_STATE.bookingData.map(room => {
                return {
                    ...room,
                    selected: true
                };
            })
        }
        const component = mount(<RoomForm />);
        const spy = sinon.spy(component.instance(), 'onCheck');
        component.instance().forceUpdate();

        // Selecting the last Checkbox (Room 4)
        component.find('input[type="checkbox"]').last().hostNodes().simulate('change', { target: { checked: true } })
        expect(spy.calledOnce).to.be.equal(true);

        const state = component.instance().state;
        expect(JSON.stringify(state)).to.be.equal(JSON.stringify(EXPECTED_STATE));
    })

    it('Testing onNumberSelect', () => {

        // State with 2 Adults and 2 Children in the first room
        const EXPECTED_STATE = {
            bookingData: [
                {
                    ...INITIAL_STATE.bookingData[0],
                    numberOfAdults: 2,
                    numberOfChildren: 2
                },
                ...INITIAL_STATE.bookingData.splice(1,3)
            ]
        }
        
        const component = mount(<RoomForm />);
        const spy = sinon.spy(component.instance(), 'onNumberSelect');
        component.instance().forceUpdate();
        component.find('select').first().hostNodes().simulate('change', { target: { value: 2 } });
        component.find('select').at(1).hostNodes().simulate('change', { target: { value: 2 } });
        
        expect(spy.calledTwice).to.be.equal(true);
        const state = component.instance().state;
        expect(JSON.stringify(state)).to.be.equal(JSON.stringify(EXPECTED_STATE));
    })    
})
