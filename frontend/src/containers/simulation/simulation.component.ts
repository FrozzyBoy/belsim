import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'belsim-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {

  public tabs: belsim.simulation.ITab[] = [
    { label: 'Производство' },
    { label: 'Запасы' },
    { label: 'Реализация' },
    { label: 'Снабжение' },
    { label: 'Финансы' },
    { label: 'Кредиты' },
    { label: 'Затраты' },
    { label: 'Основные средства' },
    { label: 'Налоги' },
    { label: 'Счета' }
  ];

  public ngOnInit(): void {

  }
}