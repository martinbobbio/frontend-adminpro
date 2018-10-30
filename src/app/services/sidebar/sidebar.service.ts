import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      title: 'Principal', icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'ProgressBar', url: '/progress' },
        { title: 'Graphics', url: '/graphic' },
        { title: 'Promises', url: '/promises' },
        { title: 'RXJS', url: '/rxjs' },
      ]
    },
    {
      title: 'Entities', icon: 'mdi mdi-folder-lock-open',
      submenu: [
        { title: 'Users', url: '/users' },
        { title: 'Hospitals', url: '/hospitals' },
        { title: 'Doctors', url: '/doctors' },
      ]
    }
  ]

  constructor() {}

}
