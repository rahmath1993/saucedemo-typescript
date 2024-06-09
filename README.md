## Prerequisite
Before run the automation test, you need install:
- [NodeJS and NPM](https://nodejs.org/en/)

Check if node and npm are successfuly installed:
```bash
  node -v
  npm -v
```

## Installation
1. Open terminal
2. Clone this repository
3. Open terminal, go to repository
```bash
  cd web-automation
```
4. Copy .env file
```bash
  cp env.sample .env
```
5. Install npm
```bash
  npm install
```
    
## Running Tests
To run scenario, run the following command
```bash
  npm run web.test "<@tag_cucumber>"
```
Example:
```bash
  npm run web.test "@example"
```
