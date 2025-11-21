import { Injectable } from '@angular/core';

export interface Employee {
  owner: string;
  status: number;
}

export interface Status {
  id: number;
  name: string;
}

const statuses: Status[] = [{
  id: 1, name: 'Not Started',
}, {
  id: 2, name: 'In Progress',
}, {
  id: 3, name: 'Deferred',
}, {
  id: 4, name: 'Need Assistance',
}, {
  id: 5, name: 'Completed',
},
];

@Injectable()
export class Service {
  getStatuses(): Status[] {
    return statuses;
  }

  getEmployee(): Employee {
    return {
      owner: 'John Heart',
      status: 1,
    };
  }
}
