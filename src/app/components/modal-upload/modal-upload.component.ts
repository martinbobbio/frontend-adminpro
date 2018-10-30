import { Component, OnInit } from "@angular/core";
import { UploadFileService } from "../../services/upload-file/upload-file.service";
import { ModalUploadService } from "./modal-upload.service";

@Component({
  selector: "app-modal-upload",
  templateUrl: "./modal-upload.component.html",
  styles: []
})
export class ModalUploadComponent implements OnInit {
  hidden: boolean = false;
  imageUpload: File;
  imageTemporal: string;

  constructor(public _uploadFileService: UploadFileService,public _modalUploadService: ModalUploadService) {}

  ngOnInit() {}

  uploadImage() {
    this._uploadFileService.uploadFile(this.imageUpload, this._modalUploadService.type, this._modalUploadService.id)
      .then(response => {
        this._modalUploadService.notification.emit(response);
        this.closeModal();
      });
  }

  closeModal() {
    this.imageTemporal = null;
    this.imageUpload = null;
    this._modalUploadService.hideModal();
  }

  selectImage(file) {
    if (!file) {
      this.imageUpload = null;
      return;
    }

    if (file.type.indexOf("image") < 0) {
      swal("Only Images", "The file must be an image", "error");
      this.imageUpload = null;
      return;
    }

    this.imageUpload = file;

    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.imageTemporal = reader.result.toString();
    };
  }
}
