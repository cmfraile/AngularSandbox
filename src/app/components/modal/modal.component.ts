import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription , combineLatest } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnDestroy {

  name:string|undefined = undefined
  img:string|undefined = undefined
  subscriptions:Subscription[] = [];
  
  private eventsDeploy(){
    const _combine = combineLatest([
      this.modalService.onShow,
      this.modalService.onShown,
      this.modalService.onHide,
      this.modalService.onHidden
    ]).subscribe(() => this.changeDetection.markForCheck());
 
    this.subscriptions.push(
      this.modalService.onShow.subscribe(() => {
        console.log(`onShow event has been fired`);
      })
    );
    this.subscriptions.push(
      this.modalService.onShown.subscribe(() => {
        console.log(`onShown event has been fired`);
      })
    );
    this.subscriptions.push(
      this.modalService.onHide.subscribe((reason: string | any) => {
        if (typeof reason !== 'string') {
          reason = `onHide(), modalId is : ${reason.id}`;
        }
        const _reason = reason ? `, dismissed by ${reason}` : '';
        console.log(`onHide event has been fired${_reason}`);
      })
    );
    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: string | any) => {
        if (typeof reason !== 'string') {
          reason = `onHide(), modalId is : ${reason.id}`;
        }
        const _reason = reason ? `, dismissed by ${reason}` : '';
        console.log(`onHidden event has been fired${_reason}`);
        this.unsubscribe();
      })
    );
 
    this.subscriptions.push(_combine);
  }

  private unsubscribe() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }

  constructor(
    public bsModalRef: BsModalRef,
    private modalService: BsModalService,
    private changeDetection: ChangeDetectorRef,
  ){ this.eventsDeploy() }

  ngOnDestroy(): void { this.unsubscribe() }


}
