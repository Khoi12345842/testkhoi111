import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-page1',
  standalone: false,
  
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {
  @Input() message: string = ''; // Nhận dữ liệu từ Cha
}
