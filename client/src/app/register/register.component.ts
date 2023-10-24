import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { right } from '@popperjs/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter(); // from child to parent
  model: any = {}

  constructor( private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  register(){
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancel();
      },
      error: error => {
        this.toastr.error(error.error);
      }
    })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}