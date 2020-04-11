import DS from 'ember-data';
import { computed} from '@ember/object';

export default DS.Model.extend({

  title: DS.attr('string'),
  description: DS.attr('string'),
  createdAt: DS.attr('date'),

  createDateFormatted: computed('createdAt', function() {
    let createdDate = this.get('createdAt');
    let day = createdDate.getDate();
    let month = createdDate.getMonth() + 1;
    let year = createdDate.getFullYear() % 100;
    if(day <10) {
      day = '0' + day;
    }
    if(month <10) {
      month = '0' + month;
    }
    return day + '/' + month + '/' + year;
  })
});
