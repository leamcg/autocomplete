import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {

  transform(value: any, ...args: any): unknown {
    if (!args || !args.length) {
      return value;
    }

    const regex = new RegExp(args, "gi");
    const match = value.match(regex);

    if (!match) {
      return value;
    }

    return value.replace(regex, `<span class="bold">${match[0]}</span>`);
  }

}
