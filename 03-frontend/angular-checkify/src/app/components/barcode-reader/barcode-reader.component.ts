import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Quagga from 'quagga';
import { Product } from '/Users/Vladi/checkify/03-frontend/angular-checkify/src/app/common/product';
import {BarcodeService} from "src/app/services/barcode.service"
import { Barcode } from 'src/app/common/barcode';


@Component({
  selector: 'app-barcode-reader',
  templateUrl: 'barcode-reader.component.html',
  styleUrls: ['barcode-reader.component.css'],
 
})
export class BarcodeReaderComponent  {
  title = 'scanner-classycode';
 
  errorMessage: string;
  barcode: Barcode;
  
  

  constructor(private service: BarcodeService){
    this.barcode = new Barcode();
  }
  ngOnInit(): void {

    if (!navigator.mediaDevices || !(typeof navigator.mediaDevices.getUserMedia === 'function')) {
      this.errorMessage = 'getUserMedia is not supported';
      return;
    }
    Quagga.init({
      inputStream : {
        name : "Live",
        type : "LiveStream",
        target: document.querySelector('#yourElement')    // Or '#yourElement' (optional)
      },
      decoder : {
        readers : ["code_128_reader",
                    "ean_reader"]
      }
    }, (err) => {
        if (err) {
            console.log(err);
            return
        }else{
          Quagga.start();
          Quagga.onDetected((res) => {
            this.onBarcodeScanned(res.codeResult.code);
          });
        }
    });
  
  }

  onBarcodeScanned(code: string) {
    console.log('this is code: ' + code);
    console.log("before getAll()");
    this.barcode.setCode(code);
    this.service.getAll(this.barcode);
    console.log("after getAll()");
    Quagga.stop();
    console.log("after Stop");
  }

  

   
   
}
