// line 2 selects all items with a class of .list-item
const items = document.querySelectorAll('.list-item');

// line 5-6 adds event listener of onClick to all .list-items 
items.forEach(item => {
    item.addEventListener('click', () => {
        
        // line 8-9 add .active class to clicked on .list-item while removing .active from others
        items.forEach(e => e.classList.remove('active'));
        item.classList.add('active');
        getData(item.innerHTML.toLowerCase());
    })
});

// line 16-17 get data from our data.json file while referencing jQuery
const getData = (dateType) => {
    const data = $.getJSON("data.json", (data) => {
        data.forEach((item) => {
            // lines 20-22 assign variables to item.title, and current and previous timeframes
            const title = item.title.toLowerCase();
            const current = item.timeframes[dateType].current;
            const previous = item.timeframes[dateType].previous;
            
            handleInnerHTML(title, current, previous);
        });
    })
}

const handleInnerHTML = (title, current, previous) => {
    if (title === 'self care') {
        const currentHours = document.querySelector(`.self-care-hours`);
        const prevHours = document.querySelector(`.self-care-previous`);
        currentHours.innerHTML = `${current}hrs`;
        prevHours.innerHTML = `Previous - ${previous}hrs`;
    } else {
        const currentHours = document.querySelector(`.${title}-hours`);
        const prevHours = document.querySelector(`.${title}-previous`);
        currentHours.innerHTML = `${current}hrs`;
        prevHours.innerHTML = `Previous - ${previous}hrs`;
    }
}
