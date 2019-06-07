import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: row;
    padding: 20px;
`;

const Container = styled.div`
    padding: 20px;
`;

const Button = styled.button`
    margin-left: 5px;
`;

const RoomContainer = styled.div`
    background: rgba(128, 128, 128, 0.122);
    border-radius: 10px;
    margin: 0 5px;
    padding: 10px;
`;

const Header = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-height: 35px;
`;

const CustomCheckbox = styled.input.attrs(() => ({
    type: 'checkbox',
}))`
    height: 20px;
    width: 20px;
`;

const SelectContainer = styled.div.attrs(({ bgColor }) => ({
    backgroundColor: bgColor,
}))`
    display: flex;
    padding: 5px;
    background-color: ${props => props.bgColor};
`;

const Field = styled.div`
    display: flex;
    flex-direction: column;
    width: 75px;
`;

const Select = styled.select`
    margin-top: 5px;
    width: 35px;
`;

export {
    Form,
    Container,
    Button,
    RoomContainer,
    Header,
    CustomCheckbox,
    SelectContainer,
    Field,
    Select
}