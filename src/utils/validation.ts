const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const emailErrorMessages = new Map()
  .set('required', 'Укажите почту')
  .set('pattern', 'Проверьте почту — похоже, тут ошибка');

export {
  emailPattern,
  emailErrorMessages,
};
