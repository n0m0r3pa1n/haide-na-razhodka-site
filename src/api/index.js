import axios from 'axios';
import moment from 'moment';

// const SERVER_URL = 'https://haide-na-razhodka-server.herokuapp.com/api';
const SERVER_URL = 'http://localhost:8000/api';

export async function validateToken(token) {
  return axios.post(`${SERVER_URL}/users/me`, {}, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}

export async function getMeetings(page, pageSize, fromDate, toDate) {
  fromDate = moment(fromDate).toISOString();
  toDate = moment(toDate).toISOString();
  return axios.get(`${SERVER_URL}/meetings?page=${page}&pageSize=${pageSize}&fromDate=${fromDate}&toDate=${toDate}`);
}

export async function getMeeting(id) {
  return axios.get(`${SERVER_URL}/meetings/${id}`);
}

export async function createUser(email, socialId, accessToken) {
  const user = {
    email,
    socialId,
    accessToken,
    socialNetwork: "FACEBOOK"
  };

  return axios.post(`${SERVER_URL}/users`, user);
}
