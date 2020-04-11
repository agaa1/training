import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('issue-summary', { path: '/summary' });
  this.route('issue-view', { path: '/issue/:id' });
  this.route('issue-editor', { path: '/issue/edit/:id' });
  this.route('about');
  this.route('test-route');
});

export default Router;

