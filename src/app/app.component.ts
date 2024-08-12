import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { RegistrationformComponent } from './registrationform/registrationform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,RegistrationformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StudentForm';
}
