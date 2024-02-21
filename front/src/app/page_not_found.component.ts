import {Component} from '@angular/core';

@Component({
  selector: 'app-page-404',
  template: `
    <div class='center' style="margin-top: 5rem; display: flex; justify-content: center; align-items: center">
      <a href="/admin/products">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/404-7304110-5974976.png?f=webp" [width]="500" [height]="500"  alt="Page not found image"/>
      </a>
    </div>
  `
})
export class PageNotFoundComponent{}
