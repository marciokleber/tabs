import {Component} from '@angular/core';

export interface TabsCustomEvent extends CustomEvent {
  detail: { tab: string };
  target: HTMLIonTabsElement;
}


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  tabCurrent: string ='';

  constructor() {}

  onTabChanged(event:any) {
    console.log('onTabChanged', event);
    this.tabCurrent = event.tab;
  }

  protected readonly CustomEvent = CustomEvent;
}
