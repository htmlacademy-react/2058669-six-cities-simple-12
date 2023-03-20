/*
Каждый отзыв содержит:

Аватар автора.
Имя автора.
Оценку. Оценка выводится в виде закрашенных звезд. Максимальное количество звёзд — 5.
Дата отзыва в формате: Месяц Год. Например: April 2019.
Текст отзыва.*/
export type CommentDate = {
  month: string;
  year: number;
}

export type ReviewCard = {
  id: number;
  avatar: string;
  name: string;
  raiting: number;
  date: CommentDate[];
  comment: string;
}
