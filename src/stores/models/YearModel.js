import { action, observable } from 'mobx';
import { serializable, identifier, list, object } from 'serializr';
import { TermModel } from './TermModel';
import { ID } from '../../utils/id';

export class YearModel {

  @observable
  @serializable
  title = '';

  @observable
  @serializable(list(object(TermModel)))
  terms = [];

  @observable
  @serializable(identifier())
  id = '';

  @observable
  dropdownOpen = false;

  constructor(
    title = 'Nth Year',
    terms = [],
  ) {
    this.title = title;
    this.terms = terms;
    this.dropdownOpen = false;
    this.id = ID();
  }

  @action.bound setTitle(title) {
    this.title = title;
  }

  @action.bound addTerm(
    title = 'Fall',
    courses = [],
  ) {
    this.terms.push(new TermModel(title, courses));
  }

  @action.bound toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}

