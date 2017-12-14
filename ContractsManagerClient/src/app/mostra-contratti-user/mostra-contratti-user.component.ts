import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpSerService} from '../_services/http/http-ser.service';

@Component({
  selector: 'app-mostra-contratti-user',
  templateUrl: './mostra-contratti-user.component.html',
  styleUrls: ['./mostra-contratti-user.component.css']
})
export class MostraContrattiUserComponent implements OnInit {

  // Initialize vars
  slug: string;
  private sub: any;
  req = {'r': 'GetAllUserContracts'};
  contractsList: any;

  constructor(private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private _httpService: HttpSerService) { }

  // Call method into ngOnInit when this page is loading
  ngOnInit() {
    this.GetAllContracts(this.req);
  }

  GetAllContracts(req) {

    // POST method request
    this._httpService.postMethod(req)
      .subscribe(
        response => {

          // print post method response
          console.log(response);

          // if post response is succesful, transfers into devicesJSONList the result, else redirects at page-not-found
          if (response['response']) {
            this.contractsList = JSON.parse(response['contractsList']);
          } else {
            this.router.navigate(['/page-not-found']);
          }
        }
      );
  }
}
