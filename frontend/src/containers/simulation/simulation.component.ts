import { Component, ViewEncapsulation } from '@angular/core';

import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'belsim-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: [
    './../../../node_modules/@angular/material/core/theming/prebuilt/indigo-pink.css',
    './material-icons.css',
    './simulation.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class SimulationComponent {

  public languages: belsim.localization.ILanguage[] = [
    { key: 'en', value: 'English' },
    { key: 'ru', value: 'Русский' }
  ];

  public selectedLanguage: string = 'ru';

  public constructor(private translateService: TranslateService) {

  }

  public changeLanguage(languageKey: string) {
    this.translateService.use(languageKey);
  }

}
