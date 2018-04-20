import axios from 'axios';

const SERVER_URL = 'https://haide-na-razhodka-server.herokuapp.com/api';

export async function getMeetings(page, pageSize, fromDate, toDate) {
  return axios.get(`${SERVER_URL}/meetings?page=${page}&pageSize=${pageSize}&fromDate=${fromDate}&toDate=${toDate}`);
}

export async function getMeeting(id) {
  return axios.get(`${SERVER_URL}/meetings/${id}`);
}
