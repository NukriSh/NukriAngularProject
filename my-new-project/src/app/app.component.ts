import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponentTestComponent } from './my-component-test/my-component-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyComponentTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-new-project';
  parentMessage: string = "Hello from Parent!";
  message: string = '';

  receiveMessage(message: string) {
    this.message = message;
  }
}
