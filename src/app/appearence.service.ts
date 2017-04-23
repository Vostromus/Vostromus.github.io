import {Injectable} from '@angular/core';

import {Appearence} from './appearence';
import {APPEARENCES} from './mock-appearence';

@Injectable()

export class AppearenceService {
    getAppearences(): Promise<Appearence[]> {
        return Promise.resolve(APPEARENCES);
    }
}

