import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppState } from 'src/app/app.reducers';
import { showAlert } from 'src/app/helpers/alert';
import { User } from 'src/app/model/auth';
import { Postulation } from 'src/app/model/risk';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-modal-description',
  templateUrl: './modal-description.component.html',
  styleUrls: ['./modal-description.component.css'],
})
export class ModalDescriptionComponent implements OnInit, OnDestroy {
  @Output() isClosed = new EventEmitter<boolean>();
  @Output() postulation = new EventEmitter<Postulation>();
  formHelp: FormGroup;
  subscription: Subscription = new Subscription();
  user: User;
  userShow: User;
  loading: boolean = false;

  createFormHelp(): FormGroup {
    return new FormGroup({
      description: new FormControl('Hola hp hp malparido hph', [
        Validators.required,
        Validators.maxLength(200),
        Validators.minLength(20),
      ]),
    });
  }

  constructor(
    private store: Store<AppState>,
    private studentService: StudentService
  ) {
    this.formHelp = this.createFormHelp();
  }

  ngOnInit(): void {
    this.subscription = this.store
      .pipe(
        map(({ auth, ui }) => ({ auth, ui })),
        filter(({ auth }) => auth.user !== null)
      )
      .subscribe(({ auth, ui }) => {
        this.user = auth.user;
        this.userShow = ui.userActive;
      });
  }

  async onSubmit() {
    this.loading = true;
    const postulator = this.user.rol === 'estudiante' ? null : this.user;
    const { programa, correo, rol, nombre, apellido } = this.userShow;
    const dataPostulation: Postulation = {
      ...this.formHelp.value,
      date: new Date().toISOString(),
      student: {
        programa,
        correo,
        rol,
        nombre: `${nombre} ${apellido}`,
      },
      postulator,
    };
    const { data, msg } = await this.studentService.generatePostulation(
      dataPostulation
    );
    this.postulation.emit(data);
    showAlert('success', msg);
    this.loading = false;
    this.close();
  }

  onClick({ target }) {
    if (target.className === 'wrapper_alert') {
      this.close();
    }
  }

  close() {
    this.formHelp.reset();
    this.isClosed.emit(false);
  }

  get description() {
    return this.formHelp.get('description');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
