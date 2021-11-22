// @ts-nocheck
const {
  getMonthAndYear,
  getNumOfDaysInMonth,
  getDaysInMonth,
  isSameDate,
  getWeekDayNumber,
  prevMonth,
  nextMonth
} = require('../scripts/utils/dates')

const getDate = (date) => date.toLocaleString().split(',')[0].replace(/\//g, '-')

describe('getMonthAndYear fn', () => {
  it('pass ca locale and 2021-11-01', () => {
    const result = getMonthAndYear('ca', new Date('2021-11-01'))
    expect(result).toEqual('novembre de 2021')
  })

  it('pass es locale and 2022-05-11', () => {
    const result = getMonthAndYear('es', new Date('2022-05-11'))
    expect(result).toEqual('mayo de 2022')
  })

  it('pass en locale and 2022-05-11', () => {
    const result = getMonthAndYear('en', new Date('2022-05-11'))
    expect(result).toEqual('May 2022')
  })
})

describe('getNumOfDaysInMonth fn', () => {
  it('pass year: 2021 month: 11', () => {
    const month = new Date('2021-11-01').getMonth()
    const year = new Date('2021-11-01').getFullYear()

    const result = getNumOfDaysInMonth(month, year)
    expect(result).toEqual(30)
  })

  it('pass year: 2021 month: 01', () => {
    const date = new Date('2021-01-01')
    const month = date.getMonth()
    const year = date.getFullYear()

    const result = getNumOfDaysInMonth(month, year)
    expect(result).toEqual(31)
  })

  it('pass year: 2022 month: 02', () => {
    const date = new Date('2022-02-01')
    const month = date.getMonth()
    const year = date.getFullYear()

    const result = getNumOfDaysInMonth(month, year)
    expect(result).toEqual(28)
  })

  it('pass year: 2024 month: 02', () => {
    const date = new Date('2024-02-01')
    const month = date.getMonth()
    const year = date.getFullYear()

    const result = getNumOfDaysInMonth(month, year)
    expect(result).toEqual(29)
  })
})

describe('getDaysInMonth fn', () => {
  it('pass 2021-02-01', () => {
    const result = getDaysInMonth(new Date('2021-02-01'))
    const expected = [
      {
        day: 1,
        date: new Date('2021-02-01')
      },
      {
        day: 2,
        date: new Date('2021-02-02')
      },
      {
        day: 3,
        date: new Date('2021-02-03')
      },
      {
        day: 4,
        date: new Date('2021-02-04')
      },
      {
        day: 5,
        date: new Date('2021-02-05')
      },
      {
        day: 6,
        date: new Date('2021-02-06')
      },
      {
        day: 7,
        date: new Date('2021-02-07')
      },
      {
        day: 8,
        date: new Date('2021-02-08')
      },
      {
        day: 9,
        date: new Date('2021-02-09')
      },
      {
        day: 10,
        date: new Date('2021-02-10')
      },
      {
        day: 11,
        date: new Date('2021-02-11')
      },
      {
        day: 12,
        date: new Date('2021-02-12')

      },
      {
        day: 13,
        date: new Date('2021-02-13')
      },
      {
        day: 14,
        date: new Date('2021-02-14')
      },
      {
        day: 15,
        date: new Date('2021-02-15')
      },
      {
        day: 16,
        date: new Date('2021-02-16')
      },
      {
        day: 17,
        date: new Date('2021-02-17')
      },
      {
        day: 18,
        date: new Date('2021-02-18')
      },
      {
        day: 19,
        date: new Date('2021-02-19')
      },
      {
        day: 20,
        date: new Date('2021-02-20')
      },
      {
        day: 21,
        date: new Date('2021-02-21')
      },
      {
        day: 22,
        date: new Date('2021-02-22')
      },
      {
        day: 23,
        date: new Date('2021-02-23')
      },
      {
        day: 24,
        date: new Date('2021-02-24')
      },
      {
        day: 25,
        date: new Date('2021-02-25')
      },
      {
        day: 26,
        date: new Date('2021-02-26')
      },
      {
        day: 27,
        date: new Date('2021-02-27')
      },
      {
        day: 28,
        date: new Date('2021-02-28')
      },
    ]

    expected.forEach(({day, date}, index) => {
      expect(day).toEqual(result[index].day)
      expect(getDate(date)).toEqual(getDate(result[index].date))
    })
  })

  it('pass 2024-02-01', () => {
    const result = getDaysInMonth(new Date('2024-02-01'))
    const expected = [
      {
        day: 1,
        date: new Date('2024-02-01')
      },
      {
        day: 2,
        date: new Date('2024-02-02')
      },
      {
        day: 3,
        date: new Date('2024-02-03')
      },
      {
        day: 4,
        date: new Date('2024-02-04')
      },
      {
        day: 5,
        date: new Date('2024-02-05')
      },
      {
        day: 6,
        date: new Date('2024-02-06')
      },
      {
        day: 7,
        date: new Date('2024-02-07')
      },
      {
        day: 8,
        date: new Date('2024-02-08')
      },
      {
        day: 9,
        date: new Date('2024-02-09')
      },
      {
        day: 10,
        date: new Date('2024-02-10')
      },
      {
        day: 11,
        date: new Date('2024-02-11')
      },
      {
        day: 12,
        date: new Date('2024-02-12')

      },
      {
        day: 13,
        date: new Date('2024-02-13')
      },
      {
        day: 14,
        date: new Date('2024-02-14')
      },
      {
        day: 15,
        date: new Date('2024-02-15')
      },
      {
        day: 16,
        date: new Date('2024-02-16')
      },
      {
        day: 17,
        date: new Date('2024-02-17')
      },
      {
        day: 18,
        date: new Date('2024-02-18')
      },
      {
        day: 19,
        date: new Date('2024-02-19')
      },
      {
        day: 20,
        date: new Date('2024-02-20')
      },
      {
        day: 21,
        date: new Date('2024-02-21')
      },
      {
        day: 22,
        date: new Date('2024-02-22')
      },
      {
        day: 23,
        date: new Date('2024-02-23')
      },
      {
        day: 24,
        date: new Date('2024-02-24')
      },
      {
        day: 25,
        date: new Date('2024-02-25')
      },
      {
        day: 26,
        date: new Date('2024-02-26')
      },
      {
        day: 27,
        date: new Date('2024-02-27')
      },
      {
        day: 28,
        date: new Date('2024-02-28')
      },
      {
        day: 29,
        date: new Date('2024-02-29')
      },
    ]

    expected.forEach(({day, date}, index) => {
      expect(day).toEqual(result[index].day)
      expect(getDate(date)).toEqual(getDate(result[index].date))
    })
  })
})

describe('isSameDate fn', () => {
  it('pass same date', () => {
    const date1 = new Date('2020-01-01')
    const date2 = new Date('2020-01-01')
    expect(isSameDate(date1, date2)).toBeTruthy()
  })

  it('pass different month', () => {
    const date1 = new Date('2020-02-01')
    const date2 = new Date('2020-01-01')
    expect(isSameDate(date1, date2)).toBeFalsy()
  })

  it('pass different day', () => {
    const date1 = new Date('2020-02-01')
    const date2 = new Date('2020-02-02')
    expect(isSameDate(date1, date2)).toBeFalsy()
  })

  it('pass different year', () => {
    const date1 = new Date('2021-02-01')
    const date2 = new Date('2020-02-01')
    expect(isSameDate(date1, date2)).toBeFalsy()
  })
})

describe('prevMonth fn', () => {
  it('pass 2020-01-01', () => {
    const date = new Date('2020-01-01')
    const result = prevMonth(date)
    expect(getDate(result)).toEqual('1-12-2019')
  })

  it('pass 2020-10-01', () => {
    const date = new Date('2020-10-01')
    const result = prevMonth(date)
    expect(getDate(result)).toEqual('1-9-2020')
  })
})

describe('nextMonth fn', () => {
  it('pass 2020-12-01', () => {
    const date = new Date('2020-12-01')
    const result = nextMonth(date)
    expect(getDate(result)).toEqual('1-1-2021')
  })

  it('pass 2020-10-01', () => {
    const date = new Date('2020-10-01')
    const result = nextMonth(date)
    expect(getDate(result)).toEqual('1-11-2020')
  })
})

describe('getWeekDayNumber fn', () => {
  it('pass 2021-10-01 expect 4', () => {
    const date = new Date('2021-10-01')
    const result = getWeekDayNumber(date)
    expect(result).toEqual(4)
  })

  it('pass 2021-11-15 expect 4', () => {
    const date = new Date('2021-11-15')
    const result = getWeekDayNumber(date)
    expect(result).toEqual(0)
  })

  it('pass 2021-12-5 expect 6', () => {
    const date = new Date('2021-12-5')
    const result = getWeekDayNumber(date)
    expect(result).toEqual(6)
  })
})