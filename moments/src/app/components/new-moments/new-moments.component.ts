import { Component, OnInit } from '@angular/core';
import { Moment } from '../../moments';
import { MomentService } from '../../services/moment.service';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrl: './new-moments.component.css'
})
export class NewMomentsComponent implements OnInit {
  btnText = 'Compartilhar'
  ngOnInit(): void { }
  constructor(private devotionalService: MomentService) {

  }
  async createHandler(devotional: Moment) {
    const formData = new FormData()
    formData.append('title', devotional.title)
    formData.append('description', devotional.description)
    if (devotional.image) {
      formData.append('image', devotional.image)
    }
    this.devotionalService.createMoment(formData).subscribe()

  }
  //to-do
  //Enviar para o Service
  // Exibir mensagem 
  // Redirect
}
