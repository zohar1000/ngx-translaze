import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/base-classes/base.component';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent extends BaseComponent
{
  mdClass = `
   \`\`\`typescript
export class MyComponent {
  userName;
  age;
  .
  .

  ngOnInit() {
        this.apiService.getUser().subscribe(data => {
            userName = data.userName;  //  <== 'John';
            age = data.age;  //  <== 35;
        }
}
   \`\`\`
 `;

  mdTemplate = `
   \`\`\`html
<div>{name} is {age} years old | translaze:{ name: userName, age }</div>
   \`\`\`
 `;

  mdFeatureModule = `
   \`\`\`typescript
import { TranslazeFeatureModule } from 'ngx-translaze';

@NgModule({
  imports: [
        TranslazeFeatureModule
  ]
})
   \`\`\`
 `;

}
