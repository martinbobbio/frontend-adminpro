import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map} from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-breadcumbs',
  templateUrl: './breadcumbs.component.html',
  styles: []
})
export class BreadcumbsComponent implements OnInit {

  title:string;

  constructor(private router:Router, private titlePage:Title, private meta:Meta) {

    this.getDataRoute().subscribe(data => {
      this.title = data.title;
      this.titlePage.setTitle(`${environment.name} - ${this.title}`);
    });

    const metaTag:MetaDefinition = {
      name: 'description',
      content: this.title
    }

    this.meta.updateTag(metaTag);
  }

  ngOnInit() {
  }

  getDataRoute(){

    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null),
      map((event:ActivationEnd)=> event.snapshot.data)
    )

  }

}
