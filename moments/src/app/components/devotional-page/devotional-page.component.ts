import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MomentService } from '../../services/moment.service';
import { MessagesService } from '../../services/messages.service';
import { Moment } from '../../moments';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { faTimes, faEdit, faComment } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-devotional-page',
  templateUrl: './devotional-page.component.html',
  styleUrl: './devotional-page.component.css'
})
export class DevotionalPageComponent implements OnInit {
  moment?: Moment
  baseApiUrl: string = environment.baseApiUrl;
  devotional?: Moment
  faTimes: any = faTimes
  faEdit: any = faEdit
  faComment: any = faComment
  constructor(private service: MomentService, private route: ActivatedRoute, private message: MessagesService, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.service.getDevotionals(id).subscribe(moment => {
      this.moment = moment.data
    })
  }

  Comment() { }

  async Delete() {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    if (confirm("Voce Deseja mesmo Apagar este post?")) {
      await this.service.deleteDevotional(id).subscribe(() => {
        this.message.add('Devocional Apagado com Sucesso')
        window.location.reload();
      }, (error) => {
        console.log(error);
        alert(`Error: ${error.status}`)
      });
    }
  }

  Edit() {
    const id = this.moment?.id
    return this.router.navigateByUrl(`devotional/edit/${id}`)
  }
}