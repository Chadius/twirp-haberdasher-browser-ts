# Browser example
Start your twirp server. Probably in the `twirp-haberdasher-server` folder.
This project assumes it runs on port 8080.
`go run cmd/server/main.go`

Start this project. By default, it goes to port 3000.
`npm run dev`

Go to `localhost:3000` and open the console. You should see a hat in the console logs.

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
