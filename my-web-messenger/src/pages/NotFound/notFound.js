import Handlebars from 'handlebars';
import { notFoundTmpl } from './notFound.tmpl';

export const NotFound = () => Handlebars.compile(notFoundTmpl)({ name: 'Not Found' });