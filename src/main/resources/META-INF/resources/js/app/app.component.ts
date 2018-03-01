import { Component } from '@angular/core';
import {ConfirmDialogModule} from 'primeng-wl/confirmdialog';
import {ConfirmationService} from 'primeng-wl/api';

 
@Component({
	selector: 'app',
	templateUrl: '/o/test3-integracion-tema-liferay/js/app/app.html',
	providers: [ConfirmationService]
})
export class AppComponent {

	caption = 'hola mutual!';
	images: any[];
	display_dialog: boolean = false;
	display_sidebar: boolean = false;

	constructor(private confirmationService: ConfirmationService) {
		this.images = [];
        this.images.push({source:'https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg', thumbnail:"https://t1.ea.ltmcdn.com/es/images/5/4/7/img_por_que_mi_gato_no_se_deja_tocar_22745_paso_0_600.jpg", title:'Sopranos 1'});
        this.images.push({source:'https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg', thumbnail:"https://t1.ea.ltmcdn.com/es/images/5/4/7/img_por_que_mi_gato_no_se_deja_tocar_22745_paso_0_600.jpg", title:'Sopranos 2'});
        this.images.push({source:'https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg', thumbnail:"https://t1.ea.ltmcdn.com/es/images/5/4/7/img_por_que_mi_gato_no_se_deja_tocar_22745_paso_0_600.jpg", title:'Sopranos 3'});
        this.images.push({source:'https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg', thumbnail:"https://t1.ea.ltmcdn.com/es/images/5/4/7/img_por_que_mi_gato_no_se_deja_tocar_22745_paso_0_600.jpg", title:'Sopranos 4'});
	}


    showDialog() {
        this.display_dialog = true;
    }
    
	confirm() {
        this.confirmationService.confirm({
			message: 'Are you sure that you want to perform this action?',
			header: 'Confirmation',
			icon: 'fa-question-circle',
            accept: () => {
            },
            reject: () => {
            }
        });
	}

}