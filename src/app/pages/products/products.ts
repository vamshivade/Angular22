import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  // imports: [RouterLink],
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products = [
    {
      id: 1,
      name: 'Laptop',
      price: 55000,
      description: 'High-performance laptop for developers.',
    },
    {
      id: 2,
      name: 'Mobile Phone',
      price: 25000,
      description: 'Latest smartphone with powerful features.',
    },
    {
      id: 3,
      name: 'Headphones',
      price: 5000,
      description: 'Wireless headphones with noise cancellation.',
    },
    {
      id: 4,
      name: 'Keyboard',
      price: 3000,
      description: 'Mechanical keyboard for developers and gamers.',
    },
  ];

  private router = inject(Router);

  viewDetails(productId: number, productName: string, productPrice: number) {
    this.router.navigate(['/pages/products', productId], {
      queryParams: {
        name: productName,
        price: productPrice,
      },
    });
  }
}
