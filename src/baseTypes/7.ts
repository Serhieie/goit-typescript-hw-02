/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  Sunday = "sunday",
  Monday = "monday",
  Tuesday = "tuesday",
  Wednesday = "wednesday",
  Thursday = "thursday",
  Friday = "friday",
  Saturday = "saturday",
}

function isWeekend(day: DayOfWeek): boolean {
  switch (day) {
    case DayOfWeek.Sunday:
    case DayOfWeek.Saturday:
      return true;
    default:
      return false;
  }
}
