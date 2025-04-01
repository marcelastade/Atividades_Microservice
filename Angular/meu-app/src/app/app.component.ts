import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FirstComponentComponent} from './components/first-component/first-component.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Marcela Stade';
  status: string = 'sucesso';
}