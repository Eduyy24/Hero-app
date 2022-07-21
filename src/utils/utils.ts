import numeral from 'numeral';

/**
 * Función para formatear valores a moneda
 * @param number  value to format
 * @return {string} value format to money
 */
export const formatMoney = (number: number | string): string =>
  numeral(number).format('$ #, ## 0');