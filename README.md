# nps-api

Create surveys to send to users and calculate the nps based on the surveys.
_Test use only_

### Install all the dependencies

```shell
npm install
```

or

```shell
yarn install
```

##### Exexcute the migrations

```shell
npm run typeorm migration:run
```

or

```shell
yarn typeorm migration:run
```

##### Configure the .env file as the .env.example

```
URL_MAIL = http://localhost:3000/answers
```

### USAGE

```shell
npm run dev
```

or

```shell
yarn dev
```

##### ENDPOINTS

###### POST (JSON) /users

Create a new user to send the vurveys

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

**return:** The created user as object

```json
{
  "id": "uuid",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "created_at": "timestamp"
}
```

###### POST (JSON) /surveys

Create a survey to send to the users

```json
{
  "title": "We want to know your opinion!",
  "description": "From 0 to 100, how much would you recommend?"
}
```

**return:** The created survey as object

```json
{
  "id": "uuid",
  "title": "We want to know your opinion!",
  "description": "From 0 to 100, how much would you recommend?",
  "created_at": "timestamp"
}
```

###### GET /surveys

**return:** Array with all the surveys

```json
[
  {
    "id": "uuid",
    "title": "We want to know your opinion!",
    "description": "From 0 to 100, how much would you recommend?",
    "created_at": "timestamp"
  }
]
```

###### POST (JSON) /sendMail

Send the email with the survey selected

```json
{
  "email": "johndoe@example.com",
  "survey_id": "uuid"
}
```

**return:** The user's survey

```json
{
  "id": "uuid",
  "user_id": "uuid",
  "survey_id": "uuid",
  "created_at": "timestamp"
}
```

###### GET /nps/survey_id

_survey_id = id of the survey you want to have the nps _
Calculate the nps for the survey selected
**return:**

```json
{
  "detractor": 2,
  "promoter": 1,
  "passive": 0,
  "totalAnswers": 3,
  "nps": 33.33
}
```
