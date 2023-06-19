import { parseISO, format } from 'date-fns'

export default function Date({ dateString, className }) {
  const date = parseISO(dateString)
  if (!dateString) {
    return ''
  } else {
    return <time dateTime={dateString} className={'text-[#949494]' + (className ? ` ${className}`: '')}>{format(date, 'MMM dd, yyyy')}</time>
  }
}
