import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { AuthModel } from '../../models/auth.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  
  loading$!: Observable<boolean>;
  unauthorized$!: Observable<boolean>;
  errorUnauthorized$!: Observable<String>;
  loginForm!: FormGroup;
  identifiantCtrl!: FormControl;
  passwordCtrl!: FormControl;
  
  constructor(
    private authService: AuthService,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initObservables();
    this.initForm();
  }

  private initObservables(): void {
    this.loading$ = this.authService.loading$;
    this.unauthorized$ = this.authService.unauthorized$;
    this.errorUnauthorized$ = this.authService.errorUnauthorized$;
  }

  private initForm(): void {
    this.identifiantCtrl = this.formbuilder.control('', Validators.required);
    this.passwordCtrl = this.formbuilder.control('', Validators.required);
    this.loginForm = this.formbuilder.group({
      identifiant: this.identifiantCtrl,
      password: this.passwordCtrl
    });
  }

  onSubmit(): void {
    const data = this.loginForm.value as AuthModel;
    if(!data) return;
    this.authService.logIn(data);
  }

  onSignIn(): void {
    return;
  }

  onSignOut(): void {
    return;
  }
}
