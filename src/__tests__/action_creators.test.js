import { changeMissionStats, loadMissions } from "../redux/missions/missions";

describe("Test missions action creators", () => {
  test("Test get missions should return proper action type", () => {
    // arrange
    const missions = ["mission1", "mision2"];
    const action = {
      type: "LOAD_MISSIONS",
      missions,
    };

    expect(loadMissions(missions)).toStrictEqual(action);
  });
  test("Test get missions should return proper action type", () => {
    // arrange
    const id = "1";
    const action = {
      type: "CHANGE_MISSION_STATUS",
      payLoad: id,
    };

    expect(changeMissionStats(id)).toStrictEqual(action);
  });
});
