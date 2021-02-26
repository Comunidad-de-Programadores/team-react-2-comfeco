import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { isLogin, logout } from '../shared/login';
import apiUser from '../shared/api/userRamdom';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../assets/logo3.png';

const Content = ({ children }) => {
   return <>{children}</>;
};

export default Content;
