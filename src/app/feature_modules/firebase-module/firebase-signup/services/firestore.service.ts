import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BaseDatabaseModel } from '../models/base-dto.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  public userid: any;

  constructor(
    public store: AngularFirestore,
    private util: UtilService
  ) {
    this.util.userid.subscribe(res => {
      this.userid = res;
    });
  }


  public create<T extends BaseDatabaseModel>(collection: string, data: T): Promise<void> {
    return this.store.doc<T>(`${collection}/${data.id}`).set(data);
  }

  public get<T extends BaseDatabaseModel>(collection: string): Observable<T[]> {
    return this.store.collection<T>(collection, ref => ref.where('uid', '==', `${this.userid}`)).valueChanges();
  }

  public getOne<T extends BaseDatabaseModel>(collection: string, id: string): Observable<T> {
    return this.store.doc<T>(`${collection}/${id}`).valueChanges();
  }

  public update<T extends BaseDatabaseModel>(collection: string, id: string, document: Partial<T>): Promise<void> {
    return this.store.doc<T>(`${collection}/${id}`).update(document);
  }

  public runQuery<T extends BaseDatabaseModel>(collection: string, query: FirestoreQuery): Observable<T[]> {
    return this.store.collection<T>(collection, ref => ref.where(query.field, query.operation, query.searchKey)).valueChanges();
  }

  public delete<T extends BaseDatabaseModel>(collection: string, id: string): Promise<any> {
    return this.store.doc<T>(`${collection}/${id}`).delete();
  }

  public uploadFile(folderName: string, downloadUrl: string, fileName: string): Promise<any> {
    return this.store.collection<{ downloadUrl: string; fileName: string; uid: string }>(`fileReferences`).add({ downloadUrl, fileName, uid: this.userid });
  }
  public getImages(): Observable<any> {
    return this.store.collection('fileReferences', ref => ref.where('uid', '==', `${this.userid}`)).snapshotChanges().pipe(map(actions => actions.map(a => {
        const data: any = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      })));
  }
}


export interface FirestoreQuery {
  field: string;
  operation: firebase.firestore.WhereFilterOp;
  searchKey: string;
}
