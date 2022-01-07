# Browser example
Start your twirp server. I assume it's on port 8080.

Start a second server to host your files. I assume it's on port 7800.

In a terminal, go to this project and start your browser. I use python3.
`python3 -m http.server 7800`

Go to the `src/index.html` file and open the console. You should see a hat in the console logs.

## What's the target URL?
https://twitchtv.github.io/twirp/docs/routing.html

Assuming the server is running on: `http://localhost:8080/`
With the twirp server endpoint: `twirp/`
And the proto file uses the package: `twirp.example.haberdasher`
And the service is named `Haberdasher`
With the message/endpoint `MakeHat`

The url is `http://localhost:8080/twirp/twirp.example.haberdasher.Haberdasher/MakeHat`

## cURL
https://twitchtv.github.io/twirp/docs/curl.html

If you're getting tripped by CORS, try using cURL directly.

```curl --request "POST" \
--header "Content-Type: application/json" \
--data '{"inches":1}' \
http://localhost:8080/twirp/twirp.example.haberdasher.Haberdasher/MakeHat```
