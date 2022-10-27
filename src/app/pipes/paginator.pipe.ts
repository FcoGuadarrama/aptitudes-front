import { Pipe, PipeTransform } from '@angular/core';
import {Aptitud} from "../models/aptitud";

@Pipe({
  name: 'paginator'
})
export class PaginatorPipe implements PipeTransform {

  transform(aptitudes: Aptitud[], page_size: number, page_number: number): Aptitud[] {
    if (!aptitudes.length) return [];

    page_size = page_size || 10;
    page_number = page_number || 1;

    --page_number;

    return aptitudes.slice(page_number * page_size, (page_number + 1) * page_size);
  }
}
