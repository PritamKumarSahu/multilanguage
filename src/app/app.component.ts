import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translateService: TranslateService) {
    localStorage.setItem('lang' , 'en')
}
  title = 'multilang-layout';
  selectedLang : any ="en"
  langList : any = [
    {name : 'English', value : 'en'},
    {name :'Arabic', value : 'ar'}
  ]

  books : any = [
    {name : "Maths book", description : 'A good maths book ', author : 'RS Aggrwal'},
    {name : "Maths book", description : 'A good maths book ', author : 'RS Aggrwal'},
    {name : "Maths book", description : 'A good maths book ', author : 'RS Aggrwal'},
    {name : "Maths book", description : 'A good maths book ', author : 'RS Aggrwal'},
    {name : "Maths book", description : 'A good maths book ', author : 'RS Aggrwal'},
    {name : "Maths book", description : 'A good maths book ', author : 'RS Aggrwal'},
    {name : "Maths book", description : 'A good maths book ', author : 'RS Aggrwal'},
    {name : "Maths book", description : 'A good maths book ', author : 'RS Aggrwal'}
  ]

  onLangChange(event) { 
    localStorage.setItem('lang' , event)
    this.translateService.use(event)
  }

  getDirection() {
    let lang = localStorage.getItem('lang') 
    if(lang) {
      return (lang == 'en'? 'ltr' : 'rtl')
    } else {
      return ('ltr')
    }
    
  }
}
