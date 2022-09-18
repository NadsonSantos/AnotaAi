import { Component, OnInit } from '@angular/core';
import { ListService } from './services/list.service';
import { Item } from './model/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: Item[] = [];
  private initialData: Item[] = [];

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.getList();
  }

  onSearch(value: string): any {
    if (!value) return (this.data = this.initialData);

    this.data = this.initialData.filter(
      item => item.title.includes(value) || item.description.includes(value)
    );
  }

  onDelete = (index: number) => this.data.splice(index, 1);

  private getList(): void {
    this.listService.getData().subscribe(
      data => {
        this.data = data;
        this.initialData = data;
      },
      error => console.error(error?.error?.message)
    );
  }
}
