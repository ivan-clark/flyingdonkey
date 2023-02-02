import { Pipe, PipeTransform } from '@angular/core';
import { TodoItemDto } from './web-api-client';

@Pipe({
  name: 'tagFilter',
  pure: false
})
export class TagFilterPipe implements PipeTransform {
  transform(items: TodoItemDto[], filters: any): TodoItemDto[] {
    let checkedTags = filters.filter(t => t.checked).map(t => t.name.trim());
    return items.filter(i => i.tag.split(',').some(t => checkedTags.includes(t.trim())));
  }
}