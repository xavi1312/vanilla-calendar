export interface Settings {
  lang?: string
  datesUnaivalable?: Date[]
  startDate?: Date
  selectors: {
    month: string
    body: string
    btnPrev: string
    btnNext: string
  }
}