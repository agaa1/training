import DS from 'ember-data';
import { computed} from '@ember/object';

export default DS.Model.extend({

  title: DS.attr('string'),
  description: DS.attr('string'),
  createDate: DS.attr('date'),

  createDateFormatted: computed('createDate', function() {
    let createDate = this.get('createDate');
    let day = createDate.getDate();
    let month = createDate.getMonth() + 1;
    let year = createDate.getFullYear() % 100;
    if(day <10) {
      day = '0' + day;
    }
    if(month <10) {
      month = '0' + month;
    }
    return day + '/' + month + '/' + year;
  })
});
