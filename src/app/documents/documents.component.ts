import { Component, OnInit, OnDestroy }   from '@angular/core';
import { Subscription }                   from 'rxjs/Subscription';

import { Document }         from './document.model';
import { DocumentService }  from './document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit, OnDestroy {
  public documents;
  subscription: Subscription;
  
  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.subscription = this.documentService.documentsChanged
      .subscribe(
        (documents: Document[]) => {
          this.documents = documents;
        }
      );
    this.documents = this.documentService.getDocuments();
  }
    
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
