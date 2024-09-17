export const generateDateFormat = (date: string) => {
      const orderDate = new Date(date)

      const convertedDate = orderDate.toLocaleDateString("en-BD", {
            timeZone: 'Asia/Dhaka',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
      })
      return convertedDate
}