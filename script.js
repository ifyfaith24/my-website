document.addEventListener("DOMContentLoaded", function() {
    const utcTimeElement = document.getElementById("utc-time");
    const currentDayElement = document.getElementById("current-day");

    if (!utcTimeElement || !currentDayElement) {
        console.error("One or more elements with the specified IDs were not found.");
        return;
    }

    function updateDateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(" ")[4];
        const currentDay = now.toLocaleString('en-us', { weekday: 'long' });

        utcTimeElement.textContent = utcTime;
        currentDayElement.textContent = currentDay;
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();
});