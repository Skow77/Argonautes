import { ListdataService } from './services/listdata.service';
import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'argaunotes';
  name = new UntypedFormControl('');
  list : any = [];
  options: AnimationOptions = {
    path: 'https://assets10.lottiefiles.com/packages/lf20_5nulgsrm.json',
  };

  constructor(private listService:ListdataService){
    this.Get();
  }

  Get(): void{
    this.listService.get().subscribe((res)=> {
      console.log(res);
      this.list = res;
    })
  }

  Envoyer(): void
  {
    console.log(this.name.value);
    this.listService.post(this.name.value).subscribe();
    this.Get();
  } 
}
