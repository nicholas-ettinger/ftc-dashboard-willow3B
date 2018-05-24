export const GET_ROBOT_STATUS = 'GET_ROBOT_STATUS';
export const RECEIVE_ROBOT_STATUS = 'RECEIVE_ROBOT_STATUS';

export const getRobotStatus = () => ({
  type: GET_ROBOT_STATUS
});

export const receiveRobotStatus = (data) => ({
  type: RECEIVE_ROBOT_STATUS,
  data
});