import React from 'react';
import { GridApi } from '../models';

export const GridApiContext = React.createContext<React.MutableRefObject<GridApi> | undefined>(undefined)