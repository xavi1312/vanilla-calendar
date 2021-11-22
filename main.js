import { Calendar } from './scripts/classes/Calendar'
import './style.css'

const CURRENT_MONTH = new Date().getMonth()
const CURRENT_YEAR = new Date().getFullYear()

const disabledDays = [
  new Date(CURRENT_YEAR, CURRENT_MONTH, 5),
  new Date(CURRENT_YEAR, CURRENT_MONTH, 10),
  new Date(CURRENT_YEAR, CURRENT_MONTH, 15),
]
const calendar = new Calendar({
  lang: 'ca',
  datesUnaivalable: disabledDays
})
