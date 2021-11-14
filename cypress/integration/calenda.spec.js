// @ts-nocheck
import { getMonthAndYear, getNumOfDaysInMonth, isSameDate, getWeekDayNumber } from '../../scripts/utils/dates'

describe('Calendar', () => {
  const LOCALE = 'ca'
  const TODAY = new Date()
  const TODAY_MONTH = TODAY.getMonth()
  const TODAY_YEAR = TODAY.getFullYear()
  const PREV_MONTH = new Date(TODAY_YEAR, TODAY_MONTH - 1, 1)
  const NEXT_MONTH = new Date(TODAY_YEAR, TODAY_MONTH + 1, 1)
  const PREV_YEAR = new Date(TODAY_YEAR - 1, TODAY_MONTH, 1)
  const NEXT_YEAR = new Date(TODAY_YEAR + 1, TODAY_MONTH, 1)

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('show month and year correctly', () => {
    const monthAndYear = getMonthAndYear(LOCALE, TODAY)

    const $monthAndYear = cy.get('[data-test-id="caledar-month"]')

    $monthAndYear.should('have.text', monthAndYear)
  });

  it('shows corect number of days', () => {
    const numOfDaysInMonth = getNumOfDaysInMonth(TODAY_MONTH, TODAY_YEAR)

    cy.get('.calendar__day').should('have.length', numOfDaysInMonth)
  })

  it('shows correct disabled days', () => {
    const disabledDays = [
      new Date(TODAY_YEAR, TODAY_MONTH, 5),
      new Date(TODAY_YEAR, TODAY_MONTH, 10),
      new Date(TODAY_YEAR, TODAY_MONTH, 15),
    ]

    const $disabledDays = cy.get('.calendar__day--disabled')
    $disabledDays.each(([$el], index) => {
      const date = $el.getAttribute('data-date')
      
      expect(isSameDate(new Date(date), disabledDays[index])).to.be.true
    })
  })

  it('shows correct selected day', () => {
    const newDateSelected = new Date(TODAY_YEAR, TODAY_MONTH, 12)
    cy
      .get('.calendar__day--selected')
      .should('have.length', 0)
    
    cy
      .get(`[data-date="${newDateSelected}"]`)
      .click()

    cy
      .get('.calendar__day--selected')
      .should('have.length', 1)


    cy
      .get(`[data-date="${newDateSelected}"]`)
      .should('have.class', 'calendar__day--selected')
  })

  it('shows correct month and year in prev month', () => {
    const $prevMonthBtn = cy.get('[data-test-id="calendar-prev"]')
    $prevMonthBtn.click()

    const monthAndYear = getMonthAndYear(LOCALE, PREV_MONTH)
    const $monthAndYear = cy.get('[data-test-id="caledar-month"]')

    $monthAndYear.should('have.text', monthAndYear)
  })

  it('shows correct month and year in next month', () => {
    const $nextMonthBtn = cy.get('[data-test-id="calendar-next"]')
    $nextMonthBtn.click()

    const monthAndYear = getMonthAndYear(LOCALE, NEXT_MONTH)
    const $monthAndYear = cy.get('[data-test-id="caledar-month"]')

    $monthAndYear.should('have.text', monthAndYear)
  })

  it('shows correct number of days in next month', () => {
    const $nextMonthBtn = cy.get('[data-test-id="calendar-next"]')
    $nextMonthBtn.click()

    const numOfDaysInMonth = getNumOfDaysInMonth(NEXT_MONTH.getMonth(), NEXT_MONTH.getFullYear())

    cy.get('.calendar__day').should('have.length', numOfDaysInMonth)
  })
  
  it('shows correct number of days in previous month', () => {
    const $prevMonthBtn = cy.get('[data-test-id="calendar-prev"]')
    $prevMonthBtn.click()
  
  })
  
  it('shows correct number of days in next year', () => {
    const $nextMonthBtn = cy.get('[data-test-id="calendar-next"]')
    const monthsTONextYeaer = (11 - TODAY.getMonth())

    for (let index = 0; index < monthsTONextYeaer; index++) {
      $nextMonthBtn.click()      
    }
    
    const numOfDaysInMonth = getNumOfDaysInMonth(0, NEXT_YEAR.getFullYear())
  
    cy.get('.calendar__day').should('have.length', numOfDaysInMonth)
  })
  
  it('shows correct number of days in previous year', () => {
    const $prevMonthBtn = cy.get('[data-test-id="calendar-prev"]')
    const monthsTONextYeaer = (TODAY.getMonth() - 11) * -1
  
    for (let index = 0; index < monthsTONextYeaer; index++) {
      $prevMonthBtn.click()      
    }
    
    const numOfDaysInMonth = getNumOfDaysInMonth(0, PREV_YEAR.getFullYear())
  
    cy.get('.calendar__day').should('have.length', numOfDaysInMonth)
  })

  it('append day into correct weekday', () => {
    const dayPosition = getWeekDayNumber(new Date(TODAY_YEAR, TODAY_MONTH, 1))

    cy.get('.calendar__day').eq(dayPosition).should('have.text', '1')
  })
})