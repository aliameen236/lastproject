import { Component } from '@angular/core';
import { CardComponent } from "../../ui/card/card.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
