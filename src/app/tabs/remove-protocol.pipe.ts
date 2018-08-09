import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeProtocol'
})
export class RemoveProtocolPipe implements PipeTransform {

  transform(url: string, args?: any): string {
    return ['http://', 'https://'].reduce((url: string, protocol: string) => {
      return url.replace(protocol, '');
    }, url);
  }

}
