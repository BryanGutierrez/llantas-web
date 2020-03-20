import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppService } from "./app.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Búsqueda';
  busqueda: FormGroup;
  producto = {
    codigo: '',
    SKU: '',
    descripcion: ''
  }

  constructor(private fb: FormBuilder, private service: AppService) {
    this.create();
  }

  create() {
    this.busqueda = this.fb.group({
      busqueda: [''],
      token: ['']
    })
  }

  Busqueda() {
    let token = this.busqueda.value.token;
    let busqueda = this.busqueda.value.busqueda;
    if (token === '') {
      alert('Token no especificado.');
    } else if (busqueda == '') {
      alert('Parámetro de búsqueda no especificado.')
    } else {
      this.service.busqueda(busqueda, token).subscribe(
        data => {
          if (data['error']) {
            alert(data['error'])
          } else {
            this.producto.codigo = data['codigo'],
            this.producto.SKU = data['SKU'],
            this.producto.descripcion = data['descripcion']
            alert('Búsqueda exitosa.')
          }

        }, error => {
          alert(error);
        }
      )
    }
  }

}
