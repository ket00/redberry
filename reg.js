
axios.get('https://pcfy.redberryinternship.ge/api/teams')
    .then(response => {
        // handle success
        console.log(response.data.data)
        response.data.data.forEach(el => {
            team.innerHTML += `<option value="${el.Id}">${el.name}</option>`
            console.log(el)
        });

    })
    .catch(error => {
        // handle error
        console.log(error);
    });
axios.get('https://pcfy.redberryinternship.ge/api/positions')
    .then( response => {
        response.data.data.forEach(el => {
            positions.innerHTML += `<option valu="${el.Id}">${el.name}</option>`
            console.log(el)

        });
        console.log(response);
    })
    .catch( error => {
        // handle error
        console.log(error);
    });
