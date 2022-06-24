import missionsReducer, {
  changeMissionStats,
  loadMissions,
} from '../redux/missions/missions';
import rocketsReducer from '../redux/rockets/rockets';

describe('Test Missions reducer', () => {
  test('Should return inital state', () => {
    expect(missionsReducer(undefined, {})).toStrictEqual([]);
  });

  test('Should return proper payload', () => {
    // arrange
    const missions = ['mission1', 'mission2'];
    expect(missionsReducer(undefined, loadMissions(missions))).toStrictEqual(
      missions,
    );
  });

  test('Should change reserved status', () => {
    // arrange
    const missions = [
      {
        mission_name: 'mission1',
        mission_id: '1',
        reserved: false,
      },
    ];
    const updated = [
      {
        mission_name: 'mission1',
        mission_id: '1',
        reserved: true,
      },
    ];
    expect(missionsReducer(missions, changeMissionStats('1'))).toStrictEqual(
      updated,
    );
  });
});

describe('Test rockets reducers', () => {
  test('It should create intial state', () => {
    expect(rocketsReducer(undefined, {})).toStrictEqual([]);
  });
  test('It should return list of rockets', () => {
    const rockets = ['rocket1', 'rocket2'];
    expect(rocketsReducer([], {
      type: 'GET_ROCKETS',
      payload: rockets,
    })).toStrictEqual(rockets);
  });
});
