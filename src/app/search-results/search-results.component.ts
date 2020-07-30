import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass']
})
export class SearchResultsComponent {
  @Input() movies;
  @Input() totalRecords;
  @Input() response;
  @Input() hasNext;
  @Input() hasPrev;
  @Input() searchQuery;

  constructor(private router: Router) {}

  changePage = strategy => searchQuery => {
    const { page, ...copiedSearchQuery } = searchQuery;
    const pageAsInt = parseInt(page, 10);

    copiedSearchQuery['page'] = strategy(pageAsInt);

    this.router.navigate(['/search'], {
      queryParams: copiedSearchQuery
    });
  };

  addPage = this.changePage(page => (page += 1));
  remPage = this.changePage(page => (page -= 1));
}
