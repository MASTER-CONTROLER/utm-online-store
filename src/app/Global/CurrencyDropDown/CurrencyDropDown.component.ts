import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'embryo-CurrencyDropDown',
  templateUrl: './CurrencyDropDown.component.html',
  styleUrls: ['./CurrencyDropDown.component.scss']
})
export class CurrencyDropDownComponent implements OnInit {

   @Output() selectedCurrency : EventEmitter<any> = new EventEmitter();

   @Input() selectedValue : string = "RM";

   currencyArray : any = [
      {
         code:"RM",
         name:"Malaysian Ringgit",
         image:"assets/images/malaysia.jpeg"
      },
      {
         code:"USD",
         name:"United States Doller",
         image:"assets/images/united-states.png"
      }
   ]

   constructor() { }

   ngOnInit() {
   }

   selectionChange(data) {
      if(data && data.value){
         this.selectedCurrency.emit(data.value);
      }
   }

}
