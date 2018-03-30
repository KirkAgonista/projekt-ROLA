import { Component, OnInit, OnDestroy }         from '@angular/core';
import { ActivatedRoute, Params, Router }       from '@angular/router';
import { FormGroup, FormControl,  Validators }  from '@angular/forms';
import { Subscription }                         from 'rxjs/Subscription';
import { Location }                             from '@angular/common';

import { Document }         from '../document.model';
import { DocumentService }  from '../document.service';

@Component({
  selector: 'app-documents-edit',
  templateUrl: './documents-edit.component.html',
  styleUrls: ['./documents-edit.component.css']
})
export class DocumentsEditComponent implements OnInit, OnDestroy {
  id;
  _id: string;
  editMode = false;
  documentForm: FormGroup;
  document: Document;
  subscribeParams: Subscription;
  subscribeQueryParams: Subscription;
  show = false;
  
  placements: string[] = ['top', 'left', 'right', 'bottom'];
  popoverTitle: string = 'Czy jesteś pewny?';
  popoverMessage: string = 'Ale tak na 100% pewien?';
  confirmText: string = 'Tak';
  cancelText: string = 'Nie';
  confirmClicked: boolean = false;
  cancelClicked: boolean = false;
  
  constructor(private route: ActivatedRoute, private router: Router, private documentService: DocumentService, private _location: Location) { }

  ngOnInit() {
    this.subscribeQueryParams = this.route.queryParams.subscribe((params)=> {
        this.id = params['id'];
      });
    this.subscribeParams = this.route.params
      .subscribe(
          (params: Params) => {
            this._id = params['_id'];
            this.editMode = params['_id'] != null;
            this.initForm();
          }
        );
  }
  
   onSubmit() {
    const newDocument = new Document(
      this.documentForm.value['name'],
      this.documentForm.value['url']
    )
  if (this.editMode) {
    this.documentService.updateDocument(newDocument, this._id)
  }
  else {
    console.log(newDocument)
    this.documentService.createDocument(newDocument)
    }
    this._location.back();
  }
  
  private initForm() {
    let name = '';
    let url = '';
    
    if (this.editMode) {
      this.document = this.documentService.getDocument(this.id);
      name = this.document.name;
      url = this.document.url;
    }
    
    this.documentForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'url': new FormControl(url, Validators.required),
    })
  }

  onCancel(){
    this._location.back();
  }

  onDeleteDocuments() {
    this._id = this.documentService.getId(this.id);
    this.documentService.deleteDocument(this.id, this._id);
    this.documentService.getDocuments();
    this.onCancel();
  }
  
  ngOnDestroy() {
    this.subscribeParams.unsubscribe();
    this.subscribeQueryParams.unsubscribe();
  }
 
}
