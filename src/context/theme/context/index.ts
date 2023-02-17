import { ContextStore } from '@envie/utilities';
import React from 'react';
import { EnvieTheme } from '../../../types';

export const Context = React.createContext<ContextStore<EnvieTheme> | null>(null);
