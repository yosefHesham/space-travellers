import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import JoinedMissions from '../components/profile/joinedMissions';
import Profile from '../components/profile/profile';
import ReservedRockets from '../components/profile/reservedRockets';
import store from '../redux/configure_store';
import Rockets from '../components/rockets/rockets';
import Missions from '../components/missions/missions';

const createComponent = (component) => <Provider store={store}>{component}</Provider>;

describe('Test for components', () => {
  test('Profile page should render correctly', () => {
    const component = renderer
      .create(createComponent(<Profile />))
      .toJSON();

    expect(component).toMatchSnapshot();
  });
  test('ReservedRockets should render correctly', () => {
    const component = renderer
      .create(createComponent(<ReservedRockets />))
      .toJSON();

    expect(component).toMatchSnapshot();
  });
  test('joinedMissions  should render correctly', () => {
    const component = renderer
      .create(createComponent(<JoinedMissions />))
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  test('rocket page should render properly', () => {
    const component = renderer.create(createComponent(<Rockets />)).toJSON();

    expect(component).toMatchSnapshot();
  });
  test('Missions page should render properly', () => {
    const component = renderer.create(createComponent(<Missions />)).toJSON();

    expect(component).toMatchSnapshot();
  });
});
