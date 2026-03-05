export interface ScheduleEvent {
  id: string
  date: string
  label: string
  description: string
  category: string
}

/** Parse date string to comparable value. Returns [year, month] or null for "YYYY+". */
function parseDate(dateStr: string): { year: number; month: number } | 'future' | null {
  if (dateStr.endsWith('+')) return 'future'
  const m = dateStr.match(/^(\d{4})(?:-(\d{1,2}))?/)
  if (!m) return null
  const year = parseInt(m[1], 10)
  const month = m[2] ? parseInt(m[2], 10) : 1
  return { year, month }
}

/** True if event is in the future or current month (coming schedule). */
export function isComingEvent(dateStr: string, now: Date): boolean {
  const parsed = parseDate(dateStr)
  if (parsed === 'future') return true
  if (!parsed) return false
  const eventDate = new Date(parsed.year, parsed.month - 1, 1)
  const startOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1)
  return eventDate >= startOfCurrentMonth
}
