import { Component, OnInit } from "@angular/core";
import { RulesService } from "src/app/services/data/rules.service";

@Component({
  selector: "app-rules",
  templateUrl: "./rules.component.html",
  styleUrls: ["./rules.component.scss"],
})
export class RulesComponent implements OnInit {
  constructor(private readonly rulesService: RulesService) {}

  ngOnInit(): void {}

  openDialog(): void {
    // this.rulesService.choiseTemplate(false).subscribe();
  }
}
