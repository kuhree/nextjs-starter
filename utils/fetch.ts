import axios from 'axios';

export const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
export const fetch = axios.create({
  baseURL: baseUrl,
  timeout: 10000,

  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})