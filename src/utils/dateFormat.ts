import moment from 'moment';

const dateFormat = (
  date: Date | string | moment.Moment,
  formatType: number = 1
): string => {
  const momentDate = moment(date);

  switch (formatType) {
    case 1:
      return momentDate.format('DD-MM-YYYY');
    case 2:
      return momentDate.format('DD-MM-YYYY HH:mm:ss');
    case 3:
      return momentDate.format('DD/MM/YYYY HH:mm:ss');
    case 4:
      return momentDate.format('DD/MM/YYYY');
    case 5:
      return momentDate.format('YYYY-MM-DD');
    default:
      console.warn('Invalid format type passed to dateFormat');
      return momentDate.format();
  }
};

const subtractDaysFromToday = (
  days: number = 3,
  formatType: number = 1
): string => {
  const newDate = moment().subtract(days, 'days');
  return dateFormat(newDate, formatType);
};

const addDaysToToday = (days: number = 3, formatType: number = 1): string => {
  const newDate = moment().add(days, 'days');
  return dateFormat(newDate, formatType);
};

export { dateFormat, subtractDaysFromToday, addDaysToToday };
