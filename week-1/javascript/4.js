/**
 * Write a function to display the current date and time in the format
 * 'MM-DD-YYYY HH:MM:SS'.
 * @return {string} The current date and time in the format 'MM-DD-YYYY HH:MM:SS'.
 */
function currentDate() {
    const now = new Date();
    
    const today = (num) => (num < 10 ? '0' + num : num);

    const month = today(now.getMonth() + 1);
    const day = today(now.getDate());
    const year = now.getFullYear();

    const hours = today(now.getHours());
    const minutes = today(now.getMinutes());
    const seconds = today(now.getSeconds());

    return `${month}-${day}-${year} ${hours}:${minutes}:${seconds}`;
}

console.log(currentDate());