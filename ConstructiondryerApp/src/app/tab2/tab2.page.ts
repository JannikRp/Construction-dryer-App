import { Component, ViewChild, ElementRef } from '@angular/core';
import { Barcode } from '@capacitor-mlkit/barcode-scanning';
import { ToastController, LoadingController, Platform } from '@ionic/angular';
import jsQR from 'jsqr';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('video', { static: false })
  video: ElementRef;
  @ViewChild('canvas', { static: false })
  canvas: ElementRef;
  @ViewChild('fileinput', { static: false })
  fileinput: ElementRef;
  isSupported = false;
  barcodes: Barcode[] = [];


  canvasElement: any;
  videoElement: any;
  canvasContext: any;
  scanActive = false;
  scanResult :any ;
  loading : HTMLIonLoadingElement  = null ;

  constructor(private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private plt: Platform) {
      const isInStandaloneMode = () =>
      'standalone' in window.navigator && window.navigator['standalone'];
    if (this.plt.is('ios') && isInStandaloneMode()) {
      console.log('I am a an iOS PWA!');
      // E.g. hide the scan functionality!
    }
  }

  

  reset() {
    this.scanResult = null;
    this.startScan();
  }
  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
    this.videoElement = this.video.nativeElement;
    this.startScan();
  }
  


  async startScan() {
    // Not working on iOS standalone mode!
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    });
  
    this.videoElement.srcObject = stream;
    // Required for Safari
    this.videoElement.setAttribute('playsinline', true);
  
    this.loading = await this.loadingCtrl.create({});
    await this.loading.present();
  
    this.videoElement.play();
    requestAnimationFrame(this.scan.bind(this));
  }
  
  async scan() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.scanActive = true;
      }
  
      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;
  
      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });
  
      if (code) {
        this.scanActive = false;
        this.scanResult = code.data;
      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }


  
  handleFile(event) {
    const file = event.target.files;
  
    var img = new Image();
    img.onload = () => {
      this.canvasContext.drawImage(img, 0, 0, this.canvasElement.width, this.canvasElement.height);
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });
  
      if (code) {
        this.scanResult = code.data;
      }
    };
    img.src = URL.createObjectURL(file);
  }
}



