// @ts-check

import axios from 'axios';
import React, { useEffect, useState } from 'react';

import routes from '../routes.js';

const getAuthHeader = () => {
  const userId = JSON.parse(localStorage.getItem('userId'));

  if (userId && userId.token) {
    return { Authorization: `Bearer ${userId.token}` };
  }

  return {};
};

const PrivatePage = () => {
// BEGIN (write your solution here)
  const [content, setContent] = useState(null);
  useEffect(() => {
    axios.get(routes.usersPath(), { headers: getAuthHeader() })
      .then(({ data }) => setContent(data));
  }, []);
  return content && <div>{content}</div>;
// END
};

export default PrivatePage;
