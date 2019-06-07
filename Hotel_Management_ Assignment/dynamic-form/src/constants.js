
const ROOM_NUMBERS = [1, 2, 3, 4];
const ADULT_ACCOMODATES = [1, 2];
const CHILD_ACCOMODATES = [0, 1, 2];

const INITIAL_STATE = {
    bookingData: ROOM_NUMBERS.map(val => ({
        roomNo: val,
        selected: val === 1 ? true : false,
        numberOfAdults: 1,
        numberOfChildren: 0,
        firstRoom: val === 1 ? true : false,
    }))
}

export {
    ROOM_NUMBERS,
    ADULT_ACCOMODATES,
    CHILD_ACCOMODATES,
    INITIAL_STATE
}