const getMonth = (givenMonth) => {
  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  }
  return months[givenMonth]
}

export const getHumanDate = (date) => {
  const stamp = new Date(Number(date))
  return `${stamp.getDate()} ${getMonth(stamp.getMonth())} ${stamp.getFullYear()}`
}
