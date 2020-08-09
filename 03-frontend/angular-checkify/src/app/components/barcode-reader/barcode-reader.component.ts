import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Quagga from 'quagga';
import { Product } from 'src/app/common/product';
import {BarcodeService} from "src/app/services/barcode.service"


@Component({
  selector: 'app-barcode-reader',
  templateUrl: 'barcode-reader.component.html',
  styleUrls: ['barcode-reader.component.css'],
 
})
export class BarcodeReaderComponent implements AfterViewInit {
  title = 'scanner-classycode';
 
  errorMessage: string;
  barCode: string;
  product: Product;
  receivedCode: string;

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
    this.service.getAll(code);
    Quagga.stop();
  }

   
   
}
