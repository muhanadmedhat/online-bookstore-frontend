import { ApplicationConfig } from '@angular/core';
import { API_URL } from './api.config';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: API_URL,
      useValue: 'https://koyav7nd34.execute-api.us-east-1.amazonaws.com/',
    },
  ],
};
