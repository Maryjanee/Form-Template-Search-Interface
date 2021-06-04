import axios from 'axios';

export const Axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export function handleError(error) {
  if (axios.isAxiosError(error)) {
    const { data, status } = error.response;
    return { error: data.error, status };
  }
  return { error: error.message, status: 500 };
}

