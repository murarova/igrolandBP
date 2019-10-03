import React from 'react';
import { Link } from 'react-router-dom';

import s from './AddButton.module.css';

const AddButton = () => (
  <Link to="/dashboard/add">
    <button className={s.btnAdd}>+</button>
  </Link>
);

export default AddButton;