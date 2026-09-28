import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
// export class ProductDetails implements OnInit {
//   private route = inject(ActivatedRoute);

//   productId = signal<number>(0);

//   ngOnInit(): void {
//     this.route.paramMap.subscribe((params) => {
//       const id = params.get('id');
//       console.log(id);
//       this.productId.set(Number(id));
//     });
//   }
// }
export class ProductDetails implements OnInit {
  private router = inject(ActivatedRoute);

  productId = signal<number>(0);

  productName = signal<string>('');
  productPrice = signal<string>('');

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (id) {
        this.productId.set(Number(id));
      }

      this.router.queryParamMap.subscribe((queryParams) => {
        const name = queryParams.get('name');
        const price = queryParams.get('price');

        this.productName.set(name ?? '');
        this.productPrice.set(price ?? '');
      });
    });
  }
}
