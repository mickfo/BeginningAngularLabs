import { Component } from '@angular/core';
import { Bug } from '../icons/bug';
import { Cake } from '../icons/cake';
import { Broom } from '../icons/broom';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [Bug, Cake, Broom, RouterLink, RouterLinkActive],
  selector: 'app-page-header',
  styleUrl: './page-header.css',
  templateUrl: './page-header.html',
})
export class PageHeader {}
