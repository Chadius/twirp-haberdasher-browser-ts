const params = {
    inches: 1
};

fetch(
    'http://localhost:8080/twirp/twirp.example.haberdasher.Haberdasher/MakeHat',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(params)
    }
)
    .then( response => response.json() )
    .then( response => {
        // Do something with response.
        console.log(response);
    } );
