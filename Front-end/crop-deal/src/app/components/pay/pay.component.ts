import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

 //rId:number;
 amount:number;
 registerForm: FormGroup;
//   pay:Payment= new Payment();


constructor( private route : Router, private apiService : PaymentService,private act:ActivatedRoute) { 
this.registerForm = new FormGroup({
  amount:new FormControl(null),
  cardnumber:new FormControl(null,Validators.required),
  name: new FormControl(null,Validators.required),
  exp: new FormControl(null, Validators.required),
  cVV: new FormControl(null, Validators.required),
  
  
});
}

isValid(controlName) {
return this.registerForm.get(controlName).invalid && (this.registerForm.get(controlName).touched || this.registerForm.get(controlName).dirty);
}


ngOnInit(): void {
  

}
saveit(){
if(this.registerForm.valid){
  this.apiService.makePayment(this.registerForm.value).subscribe(
    (data)=>{
      if(data){
        console.log("Payment completed")
        //localStorage.setItem('userdetails',JSON.stringify(this.registerForm.value) )
        Swal.fire("Success !!" , 'Payment Done Successfully','success');
        this.route.navigate(['/thank']);
      }
      else{
        alert("Error is Making Payment")
      }
    },error =>{
      console.log(error +"error")
      Swal.fire("Error",'Server Error','error');
    }
  )
  }
 }
}