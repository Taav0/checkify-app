import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Quagga from 'quagga';
import { Product } from '/Users/Vladi/checkify/03-frontend/angular-checkify/src/app/common/product';
import {BarcodeService} from "src/app/services/barcode.service"


@Component({
  selector: 'app-barcode-reader',
  templateUrl: 'barcode-reader.component.html',
  styleUrls: ['barcode-reader.component.css'],
 
})
export class BarcodeReaderComponent implements AfterViewInit {
  title = 'scanner-classycode';
 
  errorMessage: string;
  code: string;
  product: Product;

  constructor(private service: BarcodeService){
    this.product = new Product();
  }

  


  ngAfterViewInit(): void {
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
    }, function(err) {
        if (err) {
            console.log(err);
            return
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
    });

    Quagga.onDetected(function(result){
      if(this.code === null){
        
      }else{
        this.code = result.codeResult.code;
        console.log(this.code)
        Quagga.stop();
      
      }
      
    })
    this.service.getAll(this.code);
    
}
}
