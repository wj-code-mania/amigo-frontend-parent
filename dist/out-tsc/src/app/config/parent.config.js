import { InjectionToken } from '@angular/core';
export const PARENT_CONFIG = new InjectionToken('parent.config');
export const ParentConfig = {
    /*local*/
    endPoints: {
        server: 'http://172.16.101.135:8081/',
        mananger: 'http://localhost:3000/',
        parent: 'http://localhost:4200/'
    }
    /*****/
    /*server*/
    /****/
};
//# sourceMappingURL=parent.config.js.map