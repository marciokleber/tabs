import {Component} from '@angular/core';
import {
  CapacitorBarcodeScanner,
  CapacitorBarcodeScannerOptions,
  CapacitorBarcodeScannerScanResult,
  CapacitorBarcodeScannerTypeHintALLOption
} from "@capacitor/barcode-scanner";


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor() {}

  async scanner() {
    const options: CapacitorBarcodeScannerOptions = {
      hint: CapacitorBarcodeScannerTypeHintALLOption.ALL}
    const value:CapacitorBarcodeScannerScanResult = await CapacitorBarcodeScanner.scanBarcode(options);
    try {
      if (value.ScanResult) {
        console.log(value.ScanResult);
      }
    } catch (e){
      console.error(e);
    }
  }
}
