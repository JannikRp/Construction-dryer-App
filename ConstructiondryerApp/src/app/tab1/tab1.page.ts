import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  powerCardOpen = false;
  temperatureCardOpen = false;
  fanCardOpen = false;
  timerCardOpen = false;
  filterCardOpen = false;
  waterCardOpen = false;
  constructor() {


    
  }

  toggleCard(cardName: string) {
    if (cardName === 'power') {
      this.powerCardOpen = !this.powerCardOpen;
    } else if (cardName === 'temperature') {
      this.temperatureCardOpen = !this.temperatureCardOpen;
    }
    // Füge weitere Karten hinzu, wenn benötigt
  }
}
