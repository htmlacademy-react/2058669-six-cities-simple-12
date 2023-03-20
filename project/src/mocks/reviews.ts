import { ReviewCard } from '../types/reviews';

export const reviews: ReviewCard[] = [
  {
    id: 1,
    avatar: 'img/avatar-max.jpg',
    name: 'Max',
    raiting: 5,
    date: [{
      month: 'April',
      year: 2019,
    }],
    comment:  'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  },
  {
    id: 2,
    avatar: 'img/avatar-angelina.jpg',
    name: 'Angelina',
    raiting: 4,
    date: [{
      month: 'May',
      year: 2018,
    }],
    comment:  'Donec rutrum, libero quis viverra imperdiet, turpis magna varius purus, vitae suscipit eros tellus sit amet orci. ',
  },
  {
    id: 3,
    avatar: 'img/avatar-max.jpg',
    name: 'Alex',
    raiting: 4,
    date: [{
      month: 'June',
      year: 2019,
    }],
    comment:  'Nullam sem ipsum, pharetra quis mauris id, dapibus porttitor ipsum. ',
  },
  {
    id: 4,
    avatar: 'img/avatar-angelina.jpg',
    name: 'Alina',
    raiting: 4,
    date: [{
      month: 'September',
      year: 2021,
    }],
    comment:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit ',
  },
  {
    id: 5,
    avatar: 'img/avatar-angelina.jpg',
    name: 'Polina',
    raiting: 3,
    date: [{
      month: 'October',
      year: 2022,
    }],
    comment:  'Pellentesque ac risus eu justo sagittis suscipit. ',
  },

];
