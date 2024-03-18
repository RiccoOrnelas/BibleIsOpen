import { Component } from '@angular/core';
import { Moment } from '../../moments';
import { MomentService } from '../../services/moment.service';
import { environment } from '../../../environments/environment';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-edit-devotional',
  templateUrl: './edit-devotional.component.html',
  styleUrl: './edit-devotional.component.css'
})
export class EditDevotionalComponent {
  moment?: Moment
  btnText: string = 'Editar'
  baseApiUrl = environment.baseApiUrl
  constructor(private DevService: MomentService, private route: ActivatedRoute, private message: MessagesService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.DevService.getDevotionals(id).subscribe((data) => {
      this.moment = data.data
    })
  }
  async editHandler(devotionalData: Moment) {
    const id = this.moment?.id
    const title = this.moment?.title
    const formData = new FormData
    formData.append('title', devotionalData.title)
    formData.append('description', devotionalData.description)
    if (devotionalData.image) {
      formData.append('image', devotionalData.image)
    }
    await this.DevService.updateDevotional(id!, formData).subscribe()
    this.message.add(`Devocional ${title} foi atualizado com sucesso`)

  }
}
