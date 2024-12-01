import { ProductComponent } from './../../pages/product/product.component';
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
constructor(private api:ApiService){}
products:any=[]
ngOnInit(){
  this.api.getData().subscribe((data:any)=>{this.products=data;})
}
}
