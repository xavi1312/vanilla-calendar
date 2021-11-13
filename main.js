import { Calendar } from './scripts/classes/Calendar'
import './style.css'

const disabledDays = [
  new Date('2021-11-05')
]
const calendar = new Calendar('ca', disabledDays)

console.log(calendar)
