fetch ('data.json')
    .then(results => results.json())
    .then((data) => {
       
        const dailyCurrent = data[0].timeframes.daily.current;
        const dailyPrevious = data[0].timeframes.daily.previous;

        document.querySelector('.card__daily-hours').innerHTML = dailyCurrent + 'hrs';
        document.querySelector('.card__previous-hours').innerHTML = dailyPrevious + 'hrs';

        console.log(dailyCurrent);
        console.log(dailyPrevious);
    });
