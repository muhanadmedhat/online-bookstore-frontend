import { ApplicationConfig } from '@angular/core';
import { API_URL } from './api.config';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: API_URL,
      useValue: 'http://chapterone-backend-env.eba-7e8ubqnj.us-east-1.elasticbeanstalk.com/',
    },
  ],
};
