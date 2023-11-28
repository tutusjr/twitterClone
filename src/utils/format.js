export const numberFormat= value => {
   let config = {}
   if (value > 9999){
      config = {
         notation : 'compact',
         maximumFtactionDigits: 1
      }
   }
   return Intl.NumberFormat('tr',config).format(value)
}