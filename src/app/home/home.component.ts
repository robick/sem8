import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TextField } from "tns-core-modules/ui/text-field";
@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit {
  public firstTx: string = "";
  
  constructor(private router:Router) { }
//AIzaSyCnP5g1uDElud-1gEKsqb6_1KPJ-Uq3c_Y
  ngOnInit() {
  }
  

    public onTextChange(args) {
        let textField = <TextField>args.object;

        console.log("onTextChange");
        this.firstTx = textField.text;
    }

    public onReturn(args) {
        let textField = <TextField>args.object;

        console.log("onReturn");
        this.firstTx = textField.text;
    }

    public showAlert(result) {
        alert("Text: " + result);
    }

    public submit(username,password) {
      console.log("username"+username);
      this.router.navigate(['main']);
    }
}
