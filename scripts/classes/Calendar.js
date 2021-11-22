import { getDaysInMonth, getMonthAndYear, getWeekDayNumber, isSameDate, nextMonth, prevMonth } from '../utils/dates'
import { h } from '../utils/utils'

/** @typedef {import('../interfaces/settings').Settings} Settings */

/** @param {Settings} Settings */
const defaultSettings = {
  lang: window.navigator.language,
  datesUnaivalable: [],
  startDate: new Date,
  selectors: {
    month: '#calendar-month',
    body: '#calendar-body',
    btnPrev: '#calendar-prev',
    btnNext: '#calendar-next',
  }
}

class Calendar {
  /** @param {Settings} settings */
  constructor (settings) {
    /** @type {Settings} */
    this.settings = { 
      ...defaultSettings, 
      ...settings 
    }
    
    /** @type {Date} */
    this.date = new Date()
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
    this.$calendarMonth = document.querySelector(this.settings.selectors.month)
    /** @type {HTMLElement} */
    this.$calendarBody = document.querySelector(this.settings.selectors.body)
    /** @type {HTMLElement} */
    this.$calendarPrevMonthBtn = document.querySelector(this.settings.selectors.btnPrev)
    /** @type {HTMLElement} */
    this.$calendarNextMonthBtn = document.querySelector(this.settings.selectors.btnNext)
  }

  addEventListeners () {
    this.$calendarPrevMonthBtn.addEventListener('click', this.onClickPrevMonth.bind(this))
    this.$calendarNextMonthBtn.addEventListener('click', this.onClickNextMonth.bind(this))
  }

  /** @param {Date} date */
  setMonthToHeader (date) {
    this.$calendarMonth.innerText = getMonthAndYear(this.settings.lang, date)
  }

  /**
   * @param {{day: number, date: Date}[]} days
   * @return HTMLElement
  */
  getDOMDays (days) {
    const $days = days.map((day) => {
      const isDayDisabled = this.settings.datesUnaivalable.some((unaivalableDate) => isSameDate(unaivalableDate, day.date))

      const $day = h('span', {
        'data-date': day.date,
        class: `calendar__day ${isDayDisabled ? 'calendar__day--disabled' : ''}`
      }, day.day)

      !isDayDisabled && $day.addEventListener('click', this.onClickDay.bind(this))

      return $day
    })

    const numberWeekDays = getWeekDayNumber(new Date(this.date.getFullYear(), this.date.getMonth(), 1))
    const $daysPrevMonth = Array
      .from({length: numberWeekDays})
      .map(() => h('span', {
        class: 'caledar__day'
      }, ''))

    return $daysPrevMonth.concat($days)
  }

  onClickPrevMonth () {
    const newDate = prevMonth(this.date)

    this.date = newDate
    this.init()
  }

  onClickNextMonth () {
    const newDate = nextMonth(this.date)

    this.date = newDate
    this.init()
  }

  /**
   * @param {Event} ev
  */
  onClickDay (ev) {
    /** @type {HTMLElement} */
    const $day = ev.target
    const date = $day.getAttribute('data-date')
    
    this.daySelected?.classList.remove('calendar__day--selected')
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
