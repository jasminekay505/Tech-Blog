//Helper to format date as HH:MM MM/DD/YYYY
module.exports = {
   format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
}
