import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

//tsc -w    **equivalente ao npm run watch
//tsc       **equivalente ao npm run build
// asdasdasd

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);
