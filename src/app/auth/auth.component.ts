import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: "ns-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  emailControlIsValid = true;
  passwordControlIsValid = true;
  isLogin = true;

  constructor(private router: RouterExtensions) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, {
        updateOn: "change",
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl(null, {
        updateOn: "change",
        validators: [Validators.required, Validators.minLength(6)],
      }),
    });

    this.form.get("email").statusChanges.subscribe((status) => {
      this.emailControlIsValid = status === "VALID";
    });

    this.form.get("password").statusChanges.subscribe((status) => {
      this.passwordControlIsValid = status === "VALID";
    });
  }

  onSubmit() {
    const email = this.form.get("email").value;
    const password = this.form.get("password").value;

    this.form.reset();
    this.emailControlIsValid = true;
    this.passwordControlIsValid = true;
    this.router.navigate(["/challenges"]);
  }

  onSwitch() {
    this.isLogin = !this.isLogin;
  }

  onChallenges() {
    this.router.navigate(["/challenges"]);
  }
}
