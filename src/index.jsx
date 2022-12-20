import { createRoot } from 'react-dom/client';
import React from 'react';

import Component from './App.js';

const container = document.getElementById('container');
const root = createRoot(container);
root.render(<Component />);