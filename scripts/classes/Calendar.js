import { getDaysInMonth, getMonthAndYear, isSameDate, nextMonth, prevMonth } from '../utils/dates'
import { h } from '../utils/utils'

const userLang = window.navigator.language

const SELECTOR_MONTH = '#calendar-month'
const SELECTOR_BODY = '#calendar-body'
const SELECTOR_BTN_PREV = '#calendar-prev'
const SELECTOR_BTN_NEXT = '#calendar-next'
class Calendar {
  /**
   * @param {string} locale
   * @param {Date[]} daysUnaivalable
  */
  constructor (locale = userLang, daysUnaivalable = []) {
    this.locale = locale
    this.date = new Date()
    /** @type {Date[]} daysUnaivalable */
    this.daysUnaivalable = daysUnaivalable
    /** @type {HTMLElement|null} */
    this.daySelected = null

    this.storeHTMLElements()
    this.addEventListeners()
    this.init()
  }

  init () {
    this.setMonthToHeader(this.date)

    const days = getDaysInMonth(this.date)
    const $days = this.getDOMDays(days)
    this.appendDaysToBody($days)
  }

  storeHTMLElements () {
    /** @type {HTMLElement} */
    this.$calendarMonth = document.querySelector(SELECTOR_MONTH)
    /** @type {HTMLElement} */
    this.$calendarBody = document.querySelector(SELECTOR_BODY)
    /** @type {HTMLElement} */
    this.$calendarPrevMonthBtn = document.querySelector(SELECTOR_BTN_PREV)
    /** @type {HTMLElement} */
    this.$calendarNextMonthBtn = document.querySelector(SELECTOR_BTN_NEXT)
  }

  addEventListeners () {
    this.$calendarPrevMonthBtn.addEventListener('click', this.onClickPrevMonth.bind(this))
    this.$calendarNextMonthBtn.addEventListener('click', this.onClickNextMonth.bind(this))
  }

  /** @param {Date} date */
  setMonthToHeader (date) {
    this.$calendarMonth.innerText = getMonthAndYear(this.locale, date)
  }

  /**
   * @param {{day: number, date: Date}[]} days
   * @return HTMLElement
  */
  getDOMDays (days) {
    const $days = days.map((day) => {
      const isDayDisabled = this.daysUnaivalable.some((unaivalableDate) => isSameDate(unaivalableDate, day.date))

      const $day = h('span', {
        'data-date': day.date,
        class: `calendar__day ${isDayDisabled ? 'calendar__day--disabled' : ''}`
      }, day.day)

      !isDayDisabled && $day.addEventListener('click', this.onClickDay.bind(this))

      return $day
    })

    return $days
  }

  onClickPrevMonth () {
    console.log('prev ')

    const newDate = prevMonth(this.date)

    this.date = newDate
    this.init()
  }

  onClickNextMonth () {
    console.log('next month')

    const newDate = nextMonth(this.date)

    this.date = newDate
    this.init()
  }

  /**
   * @param {Event} ev
  */
  onClickDay (ev) {
    this.daySelected?.classList.remove('calendar__day--selected')
    /** @type {HTMLElement} */
    const $day = ev.target
    const date = $day.getAttribute('data-date')

    this.daySelected = $day
    this.daySelected.classList.add('calendar__day--selected')

    console.log(date)
  }

  /** @param {HTMLElement[]} $days */
  appendDaysToBody ($days) {
    this.$calendarBody.innerHTML = ''
    $days.forEach(($day) => {
      this.$calendarBody.appendChild($day)
    })
  }
}

export { Calendar }
