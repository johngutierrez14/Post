import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-table',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, RouterLink],
  templateUrl: './post-table.component.html',
  styleUrl: './post-table.component.css'
})
export class PostTableComponent {
  page = 1;

  posts = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Título ${i + 1}`,
    description: 'Lorem ipsum dolor sit amet...',
    author: `Autor ${i + 1}`,
  }));
}
