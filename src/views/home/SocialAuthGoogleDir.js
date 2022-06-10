import React from 'react';
import { useParams } from 'react-router';
const SocialAuthGoogleDir = () => {
  const { token } = useParams();
  const newToken = token.replace(/\|+/gi, '.');
  const userToken = { accesstoken: newToken };

  localStorage.setItem('userToken', JSON.stringify(userToken));
  window.location =
    'https://elites-barefoot-fe-git-dev-elites-team.vercel.app/dashboard';
};

export default SocialAuthGoogleDir;
