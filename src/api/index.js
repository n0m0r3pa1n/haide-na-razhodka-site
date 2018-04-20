import axios from 'axios';
import moment from 'moment';

const SERVER_URL = 'https://haide-na-razhodka-server.herokuapp.com/api';

export async function getMeetings(page, pageSize, fromDate, toDate) {
  fromDate = moment(fromDate).toISOString();
  toDate = moment(toDate).toISOString();
  return axios.get(`${SERVER_URL}/meetings?page=${page}&pageSize=${pageSize}&fromDate=${fromDate}&toDate=${toDate}`);
}

export async function getMeeting(id) {
  return axios.get(`${SERVER_URL}/meetings/${id}`);
}
