import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CatFactsService } from './service/catfacts.service';
import { CatfactSearchComponent } from './components/catfact-search/catfact-search.component';
import { DeadendComponent } from './components/deadend/deadend.component';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'YetAnotherCatfactsTest';
}
