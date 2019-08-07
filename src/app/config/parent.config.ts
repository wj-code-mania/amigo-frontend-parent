import { InjectionToken } from '@angular/core';
import { IParentConfig } from './iparent.config';

export const PARENT_CONFIG = new InjectionToken('parent.config');
export const ParentConfig: IParentConfig = {

    /*local*/
    endPoints : {
        server: 'http://localhost:8081/',
        mananger: 'http://localhost:3000/',
        parent: 'http://localhost:4200/'
    }
    /*****/

    /*server*/
        
    /****/

};
