import { name, company, domain } from './site'

export const title = name
export const titleTemplate = `%s - ${company} ${name}`
export const description = `Income and Expense Tracker of ${company}`
export const siteUrl = `https://${domain}`

export const keywords = 'Trackinex, expense, income, tracker'

export const dangerouslySetAllPagesToNoFollow = true
export const dangerouslySetAllPagesToNoIndex = true
