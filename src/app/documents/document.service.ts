import { Injectable }                                       from '@angular/core';
import { Subject }                                          from 'rxjs/Subject';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import 'rxjs/Rx';
import {Observable}                                         from 'rxjs/Observable'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Document } from './document.model';

@Injectable()
export class DocumentService {
  documentsChanged = new Subject<Document[]>();
  constructor(private httpClient: HttpClient){}
  
  private documents: Document[];
  
  getDocuments() {
    this.httpClient.get<Document[]>('/api/documents', {
      observe: 'body',
      responseType: 'json'
    })
      .subscribe(
        (documents) => {
          console.log(documents);
          this.setDocuments(documents);
        }
      );
    return this.documents
  }
    
  setDocuments(documents: Document[]) {
    this.documents = documents;
    this.documentsChanged.next(this.documents.slice());
  }
    
  getDocument(id: number) {
      return this.documents[id];
  }
  
  createDocument(document: Document) {
   this.httpClient.post<Document>('/api/documents', document)
    .subscribe(
      (document: Document) => {
        this.documents.splice(0,0, document);
        this.documentsChanged.next(this.documents.slice())
      }
    );
  // this.documentsChanged.next(this.documents.slice())
  }
    
  updateDocument(newDocument: Document, _id: string) {
   this.httpClient.put<Document>('/api/documents/'+_id, newDocument)
    .subscribe();
    // this.documentsChanged.next(this.documents.slice())
  }
  
  deleteDocument(index: number, _id: string) {
    this.httpClient.delete<Document>('/api/documents/'+_id)
    .subscribe();
    this.documentsChanged.next(this.documents.slice())
  }
  
  getId(id:number) {
    return this.documents[id]._id;
  }

}
