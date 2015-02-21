import DS from 'ember-data';

export default DS.Model.extend({
  feedUrl: DS.attr('string'),
  title: DS.attr('string'),
  link: DS.attr('string'),
  language: DS.attr('string'),
  copyright: DS.attr('string'),
  subtitle: DS.attr('string'),
  author: DS.attr('string'),
  explicit: DS.attr('boolean'),
  summary: DS.attr('string'),
  description: DS.attr('string'),
  image: DS.attr('string')
});
