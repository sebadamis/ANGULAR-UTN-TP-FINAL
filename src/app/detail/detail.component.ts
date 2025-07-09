import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../services/product.service';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class Detail {
  product_id: string = "";
  private productService = inject(ProductService)
  producto_seleccionado: Product | undefined = undefined
  loading : boolean = true
  error : string | null = null

  constructor(private route: ActivatedRoute){
    
  }
  ngOnInit(){
    this.route.paramMap.subscribe(
      (params) => {
        this.product_id = params.get("product_id") || ""
        const prod_detail_Obs = this.productService.getProductById(Number(this.product_id))
        prod_detail_Obs.subscribe(
          {
            next: (prod_detail) => {
            this.producto_seleccionado = prod_detail;
            this.loading = false;
            },
            error: (error) => {
              console.error("el observable fallo en ejecucion", error)
              this.error = 'Fallo al buscar el producto';
              this.loading = false;
            }
          }
        )
      }
    )
  }

}
