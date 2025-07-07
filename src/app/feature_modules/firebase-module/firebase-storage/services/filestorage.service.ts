import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(
    public storage: AngularFireStorage,
    public baseFs: FirestoreService
  ) {
  }

  public uploadContent(file: any, fileName: any): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        if (file) {
          return this.storage.upload(`uploads/${fileName}`, file).then(
            success => this.storage.ref(`uploads/${fileName}`).getDownloadURL().subscribe(url => this.baseFs.uploadFile('uploads', url, fileName)
                  .then(() => {
                    resolve({ url, fileName });
                  })
                  .catch(err => {

                    reject(err);
                  })),
            failure => {

              reject(failure);
            }
          )
            .catch(err => {

              reject(err);
            });
        } else {
          reject(new Error(' choice key not given'));
        }
      } catch (e) {

        reject(e);
      }

    });
  }
}

