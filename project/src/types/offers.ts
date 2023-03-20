/*Каждая карточка в списке предложений содержит информацию:

Изображение. Фотография жилья.
Премиальность. Метка «Premium».
Стоимость за ночь. Стоимость всегда отображается в евро.
Заголовок. Краткое описание предложения. Например: «Beautiful & luxurious apartment at great location».
Тип жилья. Одно из нескольких значений: apartment, room, house, hotel.
Рейтинг. Оценка выводится в виде закрашенных звезд.*/

export type OfferCard = {
  id: number;
  img: string;
  premium: string;
  price: number;
  title: string;
  type: string;
  rating: number;
}
