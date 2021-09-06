// What sort of helpers might I need?
// Convert time of post or comment posted to readable time

module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
    }
};