import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpSerService} from '../_services/http/http-ser.service';

@Component({
  selector: 'app-nuovo-contratto-web-selected-component',
  templateUrl: './nuovo-contratto-web-selected-component.component.html',
  styleUrls: ['./nuovo-contratto-web-selected-component.component.css']
})
export class NuovoContrattoWebSelectedComponentComponent implements OnInit {

  // Initialize vars
  slug: string;
  private sub: any;

  // Constructor
  constructor(private router: Router, private route: ActivatedRoute, private _sanitizer: DomSanitizer, private _httpService: HttpSerService) {
  }

  // Call method into ngOnInit when this page is loading
  ngOnInit() {

    // Grub brand params from URL and send it into POST request
    this.sub = this.route.params.subscribe(params => {
      this.slug = params['slug'];
    });
  }

}
