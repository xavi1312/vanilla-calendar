/**
 * @param {string} locale
 * @param {Date} date
 *
 * @returns {string}
 * */
function getMonthAndYear (locale, date) {
  const monthAndYear = Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(date)

  return monthAndYear
}

/**
 *  @parem {number} month
 *  @parem {number} year
 *  @returns {number}
*/
function getNumOfDaysInMonth (month, year) {
  return new Date(year, month + 1, 0).getDate()
}

/**
 *  @parem {Date} date
 * @return {{day: number, date: Date}[]}
*/
function getDaysInMonth (date) {
  const month = date.getMonth()
  const year = date.getFullYear()
  const numOfDaysInMonth = getNumOfDaysInMonth(month, year)

  const daysInMonth = Array.from({ length: numOfDaysInMonth }, (_, i) => {
    const day = i + 1
    const date = new Date(year, month, day)
    return {
      day,
      date
    }
  })

  return daysInMonth
}

/**
 *
 * @param {Date} date1
 * @param {Date} date2
 * @returns {boolean}
 */
function isSameDate (date1, date2) {
  return date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
}

export {
  getMonthAndYear,
  getDaysInMonth,
  getNumOfDaysInMonth,
  isSameDate
}
