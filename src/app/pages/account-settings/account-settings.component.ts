import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _settingsService:SettingsService) { }

  ngOnInit() {
    this.loadCheck();
  }

  changeColor(theme:string,link:any){

    this.activateCheck(link);
    this._settingsService.applyTheme(theme);

  }

  activateCheck(link:any){

    let selectors:any = document.getElementsByClassName('selector');
    for(let ref of selectors){
      ref.classList.remove('working');
    }

    link.classList.add('working');

  }

  loadCheck(){

    let selectors:any = document.getElementsByClassName('selector');
    let theme = this._settingsService.settings.theme;

    for(let ref of selectors){
      ref.classList.remove('working');
      if(ref.getAttribute('data-theme')=== theme){
        ref.classList.add('working');
      }
    }

  }


}
