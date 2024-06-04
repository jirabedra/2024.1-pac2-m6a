import { Component, OnInit } from '@angular/core';
import { CatFactsService } from '../../service/catfacts.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'catfact-search',
  templateUrl: './catfact-search.component.html',
  styleUrls: ['./catfact-search.component.css'],
  standalone: true,
  providers:[CatFactsService, SharedModule]

})
export class CatfactSearchComponent implements OnInit {

  constructor(private catfactService:CatFactsService) { }

  ngOnInit(): void {
  }

  getCatFact(){
    this.catfactService.getCatFact();
  }
}
