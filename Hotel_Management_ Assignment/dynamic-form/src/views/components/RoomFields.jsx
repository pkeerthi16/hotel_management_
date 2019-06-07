import React from 'react';
import PropTypes from 'prop-types';
import { CHILD_ACCOMODATES, ADULT_ACCOMODATES } from '../../constants';
import { RoomContainer, SelectContainer, Header, CustomCheckbox, Field, Select } from './StyledComponents';


const RoomFields = (props) =>
    <RoomContainer>
        <Header className="header">
            {props.firstRoom ? null : <CustomCheckbox name="roomSelected" checked={props.selected} onChange={(event) => props.onCheck(props.roomNo, event.target.checked)} />}
            <h4>Room {props.roomNo}</h4>
        </Header>
        <SelectContainer bgColor={props.selected ? 'white' : 'transparent'}>
            <Field>
                <label>Adults (18+)</label>
                <Select disabled={!props.selected} name="numberOfAdults" value={props.numberOfAdults} onChange={(event) => props.onNumberSelect(props.roomNo, parseInt(event.target.value), 'adult')}>
                    {
                        ADULT_ACCOMODATES.map(val =>
                            <option key={val} value={val}>{val}</option>
                        )
                    }
                </Select>
            </Field>
            <Field>
                <label>Children (0-17)</label>
                <Select disabled={!props.selected} name="numberOfChilds" value={props.numberOfChildren} onChange={(event) => props.onNumberSelect(props.roomNo, parseInt(event.target.value), 'child')}>
                    {
                        CHILD_ACCOMODATES.map(val =>
                            <option key={val} value={val}>{val}</option>
                        )
                    }
                </Select>
            </Field>
        </SelectContainer>
    </RoomContainer>;

RoomFields.propTypes = {
    firstRoom: PropTypes.bool,
    selected: PropTypes.bool.isRequired,
    numberOfAdults: PropTypes.number.isRequired,
    numberOfChildren: PropTypes.number.isRequired,
    onCheck: PropTypes.func,
    onNumberSelect: PropTypes.func,
}

RoomFields.defaultProps = {
    firstRoom: false,
    selected: false,
    numberOfAdults: 1,
    numberOfChildren: 0,
}

export default RoomFields;