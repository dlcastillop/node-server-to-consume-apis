# Node.js server to consume APIs

A simple Node.js server to consume APIs for frontend developers.

## How to use

Go to the `index.js` file and follow the instructions:

### 1. Set a port

```js
const PORT = 8000;
```

### 2. Set the API URL

```js
const URL = "https://some-api-url";
```

### 3. Define your endpoint

```js
app.get("/endpoint", (req, res) => {
    ...
});
```

### 4. Set the options to consume the API: method, url, headers, etc.

```js
app.get("/endpoint", (req, res) => {
const options = {
    method: "GET",
    url: URL,
};
...
});
```

Here, you can use the `.env` file to store your API keys and then access them with `process.env.API_KEY`in the headers.

For example:

```js
app.get("/endpoint", (req, res) => {
const options = {
    method: "GET",
    url: URL,
    headers: {
        "key": process.env.API_KEY
    }
};
...
});
```

### 5. Run the Node.js server

Run the Node.js server with the `node index.js` command and go to https://localhost:8000/endpoint to consume the API.

## Contributions

Suggestions and pull requests are welcomed!
