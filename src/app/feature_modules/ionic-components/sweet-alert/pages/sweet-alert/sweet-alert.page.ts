/**
 * Ionic Capacitor Full App in Angular  (https://store.enappd.com/product/capacitor-full-app-with-ionic-angular)

 *
 * Copyright © 2020-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { SWEET_ALERT_DATA } from '../../data/sweet-alert';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.page.html',
  styleUrls: ['./sweet-alert.page.scss'],
})
export class SweetAlertPage {
  public showAlertData: Array<any>;

  constructor() {
    this.showAlertData = SWEET_ALERT_DATA;
  }

  callMethod(methodName: string) {
    this[methodName]();
  }

  normalAlert() {
    Swal.fire({
      title: 'Good job!',
      text: 'You clicked the button!',
      icon: 'success',
      heightAuto: false
    });
  }


  basicMessage() {
    Swal.fire({ title: 'Welcome To Enappd', heightAuto: false });

  }

  titleWithText() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      heightAuto: false
    });
  }

  errorMessage() {
    Swal.fire({
      title: 'Oops...',
      text: 'Something went wrong!',
      icon: 'error',
      heightAuto: false
    });
  }

  callForAttention() {
    Swal.fire({
      title: 'I will shake when you click outside!',
      heightAuto: false,
      allowOutsideClick: () => {
        const popup = Swal.getPopup();
        popup.classList.remove('swal2-show');
        setTimeout(() => {
          popup.classList.add('animated', 'swing', 'faster');
        });
        setTimeout(() => {
          popup.classList.remove('animated', 'swing', 'faster');
        }, 500);
        return false;
      }
    });
  }

  modalWithTitleError() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>',
      heightAuto: false
    });
  }

  windowModal() {
    Swal.fire({
      imageUrl: 'https://placebear.com/300/300',
      imageHeight: 300,
      imageAlt: 'A tall image',
      heightAuto: false
    });
  }

  customHtml() {
    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      icon: 'info',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="//sweetalert2.github.io">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i> Nope!',
      cancelButtonAriaLabel: 'Thumbs down',
      heightAuto: false
    });
  }


  customTopEnd() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
      heightAuto: false
    });
  }

  customCenter() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: true,
      timer: 1500,
      heightAuto: false
    });
  }
  customBottom() {
    Swal.fire({
      position: 'bottom',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
      heightAuto: false
    });
  }

  animationTada() {
    Swal.fire({
      title: 'Custom animation with Animate.css',
      showClass: {
        popup: 'animated tada '
      },
      heightAuto: false,
      showCloseButton: true,
      allowOutsideClick: true
    });
  }

  animationSwing() {
    Swal.fire({
      title: 'Custom animation with Animate.css using swing Effect',
      showClass: {
        popup: 'animated swing faster'
      },
      heightAuto: false
    });
  }

  animationJello() {
    Swal.fire({
      title: 'Custom animation with Animate.css using jello Effect',
      showClass: {
        popup: 'animated jello faster'
      },
      heightAuto: false
    });
  }
  animationFlip() {
    Swal.fire({
      title: 'Custom animation with Animate.css using flip Effect',
      showClass: {
        popup: 'animated flip faster'
      },
      heightAuto: false
    });
  }

  confirmDialogFunction() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      heightAuto: false,
      confirmButtonText: 'Yes, delete it!'
    });
  }

  confirmDialogPassingparameter() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true,
    });

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      heightAuto: false,
      reverseButtons: true
    });
  }

  confirmDialogWithImage() {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal with a custom image.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      heightAuto: false
    });
  }

  ajaxRequest() {
    Swal.fire({
      title: 'Submit your Github username',
      input: 'text',
      backdrop: true,
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      heightAuto: false,
      showLoaderOnConfirm: true,
      preConfirm: (login) => fetch(`https://api.github.com/users/${login}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch(error => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          }),
      allowOutsideClick: () => !Swal.isLoading()
    })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url,
            heightAuto: false
          });
        }
      });

  }

  dynamicQuery() {
    const ipAPI = 'https://api.ipify.org?format=json';

    Swal.fire({
      title: 'Your public IP',
      confirmButtonText: 'Show my public IP',
      text:
        'Your public IP will be received ' +
        'via AJAX request',
      heightAuto: false,
      backdrop: true,
      showLoaderOnConfirm: true,
      preConfirm: () => fetch(ipAPI)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch(error => {
            Swal.showValidationMessage(`Unable to get your public IP`);
          }),
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.ip} is your IP`,
          heightAuto: false
        });
      }
    });
  }


  timerFunction() {
    let timerInterval;
    Swal.fire({
      title: 'Auto close alert!',
      html:
        'I will close in <b></b> seconds.<br/><br/>' +
        '<button id=\'increase\' class=\'btn btn-warning\'>' +
        'I need 5 more seconds!' +
        '</button><br/>' +
        '<button id=\'stop\' class=\'btn btn-danger\'>' +
        'Please stop the timer!!' +
        '</button><br/>' +
        '<button id=\'resume\' class=\'btn btn-success\' disabled>' +
        'Phew... you can restart now!' +
        '</button><br/>' +
        '<button id=\'toggle\' class=\'btn btn-primary\'>' +
        'Toggle' +
        '</button>',
      timer: 5000,
      timerProgressBar: true,
      heightAuto: false,
      didOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getHtmlContainer();
          if (content) {
            const b = content.querySelector('b');
            if (b) {
              b.textContent = (Swal.getTimerLeft() / 1000).toString();
            }
          }
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {

      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('Closed by the timer');
      }
    });
  }


}
