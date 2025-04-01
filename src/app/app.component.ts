import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Certifique-se de que o componente é standalone
  imports: [RouterModule], // Importa o RouterModule para usar <router-outlet>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loja de Peças para Desktop';
}
