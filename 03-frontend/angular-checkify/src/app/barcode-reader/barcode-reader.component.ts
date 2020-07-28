import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Quagga from 'quagga';
@Component({
  selector: 'app-root',
  templateUrl: 'barcode-reader.component.html',
  styleUrls: ['barcode-reader.component.css']
})
export class BarcodeReaderComponent implements AfterViewInit {
  title = 'scanner-classycode';
 
  errorMessage: string;
  code: string;

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
        Quagga.stop();
      }
      console.log(this.code)
    })
}
}
