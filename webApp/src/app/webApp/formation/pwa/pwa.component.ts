import { Component } from '@angular/core';

@Component({
  selector: 'app-pwa',
  templateUrl: './pwa.component.html',
  styleUrls: ['./pwa.component.scss']
})
export class PwaComponent {

  


  // ---------- notif simple --------------------
  public showNotification = () => {

    if ('Notification' in window) {
      console.log('Notifications autorisées');

        Notification.requestPermission(
          (e) => {
            console.log(e);
            if (e==='granted') {

              const options={
                body:'hello Angular',               
                lang: 'fr-FR',
                icon: 'assets/images/avatars/avatar1.jpg',
                vibrate: [200, 100, 200]
              };

              const notif = new Notification('Titre de la notification', options);
            }            
          }
        );
    }
  }


}
