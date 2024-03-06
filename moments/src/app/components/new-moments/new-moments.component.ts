import { Component, OnInit } from '@angular/core';
import { Moment } from '../../moments';
import { MomentService } from '../../services/moment.service';
import { MessagesService } from '../../services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrl: './new-moments.component.css'
})
export class NewMomentsComponent implements OnInit {
  btnText = 'Compartilhar'
  ngOnInit(): void { }
  constructor(private devotionalService: MomentService, private messageService: MessagesService, private router: Router) {

  }
  async createHandler(devotional: Moment) {
    const formData = new FormData()
    formData.append('title', devotional.title)
    formData.append('description', devotional.description)
    if (devotional.image) {
      formData.append('image', devotional.image)
    }
    //to-do
    //Enviar para o Service
    await this.devotionalService.createMoment(formData).subscribe()
    this.messageService.add('Glória a Deus! Devocional Criado com Sucesso!!')
    this.router.navigate(['/'])

  }




  // Redirect
}
