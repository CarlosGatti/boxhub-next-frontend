/* eslint-disable @typescript-eslint/restrict-plus-operands */
import moment from 'moment-timezone'

/* export const dateToStringFormatted = (date: Date) => {
  const newDate = new Date(date)

  const currentDate = new Date()

  const timeDifference = currentDate - newDate
  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  const month = day * 30
  const year = month * 12

  if (timeDifference < minute) {
    return 'Agora mesmo'
  } else if (timeDifference < hour) {
    const minutes = Math.round(timeDifference / minute)
    return `${minutes} min${minutes > 1 ? 's' : ''} ago`
  } else if (timeDifference < day) {
    const hours = Math.round(timeDifference / hour)
    return `${hours} hour${hours > 1 ? 's' : ''} ago`
  } else if (timeDifference < month) {
    const days = Math.round(timeDifference / day)
    return `${days} day${days > 1 ? 's' : ''} ago`
  } else if (timeDifference < year) {
    const months = Math.round(timeDifference / month)
    return `${months} month${months > 1 ? 's' : ''} ago`
  } else {
    const years = Math.round(timeDifference / year)
    return `${years} year${years > 1 ? 's' : ''} ago`
  }
} */

export const dateToStringFormatted = (data: Date | string) => {
  const newDate = new Date(data)
  const now = moment()
  const then = moment(newDate)
  const difference = moment.duration(now.diff(then))

  if (difference.years() > 0) {
    return then.format('D [de] MMM, YYYY')
  } else if (difference.months() > 0) {
    return then.format('D [de] MMM')
  } else if (difference.days() > 0) {
    if (difference.days() === 1) {
      return 'Ontem'
    } else {
      return then.format('D [de] MMM')
    }
  } else if (difference.hours() > 0) {
    return `${difference.hours()}h`
  } else if (difference.minutes() > 0) {
    return `${difference.minutes()}m`
  } else {
    return `${difference.seconds()}s`
  }
}

/* export const dateToStringFormatted = (data: Date) => {
  const agora = new Date()
  const então = new Date(data)
  const diferençaEmSegundos = (agora - então) / 1000
  const diferençaEmMinutos = diferençaEmSegundos / 60
  const diferençaEmHoras = diferençaEmMinutos / 60
  const diferençaEmDias = diferençaEmHoras / 24
  const diferençaEmMeses = diferençaEmDias / 30
  const diferençaEmAnos = diferençaEmMeses / 12

  if (diferençaEmAnos >= 1) {
    return então.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  } else if (diferençaEmMeses >= 1) {
    return então.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'short',
    })
  } else if (diferençaEmDias >= 1) {
    if (diferençaEmDias === 1) {
      return 'Ontem'
    } else {
      return então.toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'short',
      })
    }
  } else if (diferençaEmHoras >= 1) {
    return `${Math.round(diferençaEmHoras)}h`
  } else if (diferençaEmMinutos >= 1) {
    return `${Math.round(diferençaEmMinutos)}m`
  } else {
    return `${Math.round(diferençaEmSegundos)}s`
  }
} */

/* export const dateToStringFormatted = (date: Date) => {
   const newDate = new Date(date)
  if (differenceInSeconds(new Date(), date) < 60)
    return `${differenceInSeconds(new Date(), date)} seg`
  if (differenceInMinutes(new Date(), date) < 60)
    return `${differenceInMinutes(new Date(), date)} min`
  if (differenceInHours(new Date(), date) < 24)
    return `${differenceInHours(new Date(), date)} horas`
  return `${differenceInDays(new Date(), date)} dias`
} */

export const formatHtml = (value: string): string => {
  const valueTextarea = value
    .split('\n')
    /*   .filter((linha) => linha.trim()) para deixarr sem linhas */
    .map((linha) => `<div>${linha}</div>`)
    .join('\n')
  return valueTextarea
}

export const formatCPF = (value: string) => {
  return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
}

export const formatCell = (value: string) => {
  return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
}

const addZero = (value: number | string) => {
  if (Number(value) <= 9) {
    return '0' + value
  } else {
    return value
  }
}

export const formatDate = (date: string) => {
  const newDate = new Date(date)
  let formatted = ''
  formatted =
    addZero(newDate.getDate().toString()) +
    '-' +
    addZero((newDate.getMonth() + 1).toString()) +
    '-' +
    newDate.getFullYear()
  return formatted
}

export const formatHour = (hours: string) => {
  const newDate = new Date(hours)
  let formatted = ''
  formatted = newDate.getHours() + ':' + newDate.getMinutes()
  return formatted
}
