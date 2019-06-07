import React from 'react';
import ReactDOM from 'react-dom';
import RoomFields from './views/components/RoomFields';
import renderer from 'react-test-renderer';


it('RoomFields renders without crashing with props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoomFields firstRoom={false} numberOfAdults={3} numberOfChildren={2} selected={true} />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('RoomFields renders without crashing, without props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoomFields />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('RoomFields snapshot test with selected: true', () => {
  const tree = renderer.create(<RoomFields firstRoom={false} numberOfAdults={2} numberOfChildren={2} selected={true} />).toJSON();
  expect(tree).toMatchSnapshot();
})

it('RoomFields snapshot test with selected: false', () => {
  const tree = renderer.create(<RoomFields firstRoom={false} numberOfAdults={2} numberOfChildren={2} selected={false} />).toJSON();
  expect(tree).toMatchSnapshot();
})

it('Verify select inputs are disabled on selected: false', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoomFields selected={false} />, div);
  const selectElements = div.getElementsByTagName('select');
  expect(selectElements[0].disabled).toBe(true);
  expect(selectElements[1].disabled).toBe(true);
})

it('Verify select inputs are enabled on selected: true', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoomFields selected={true} />, div);
  const selectElements = div.getElementsByTagName('select');
  expect(selectElements[0].disabled).toBe(false);
  expect(selectElements[1].disabled).toBe(false);
})
