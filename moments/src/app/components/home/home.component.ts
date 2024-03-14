import { Component } from '@angular/core';
import { MomentService } from '../../services/moment.service';
import { Moment } from '../../moments';
import { environment } from '../../../environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  allDevotionals: Moment[] = []
  devotionals: Moment[] = []
  baseApiUrl = environment.baseApiUrl
  search = faSearch
  searchTurn: string = ''
  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          "pt-BR"
        )
      })
      this.allDevotionals = data
      this.devotionals = data
    })
  }
  searching(event: any) {
    const target = event.target as HTMLInputElement
    const value = target.value

    this.devotionals = this.allDevotionals.filter(
      (item) => {
        return item.title!.toLowerCase().includes(value)
      })

  }
}