# Bucket List 



## Description
Designed to collect websites and group them together into a single buckets. Inspired by my journey as a software developer, which relies on learning concepts from various sources. This tool allows online learners to easily keep track of related websites and create lists to reference later. Does not currently support PWA url's.
## Deployment
https://lovely-banoffee-8811b7.netlify.app/
## Screenshots

![CollectURL-walkthrough](https://user-images.githubusercontent.com/90432404/232636238-2372cc53-97c3-4192-aaf0-48429981336f.gif)

## User Story
```
As I user 
I want to create a List of Websites,
When I add a URL to a list, a styled card is automatically generated using meta dat from the submitted site,
When I save the list item I see it in the respective list and it saves to local storage, 
When I want to add another list, I am prompted to sign in or create an account,
when I succesfully sign in, that list is saved to a 'General Bucket',
Then I am presented with a library view of all my buckets with the general bucket highlighted at the top;
When I click the '+' button I am presented with a modal that asks which bucket I want to use or create new bucket and the title of the list.
When that form is submitted the newly created list will open up in single page mode.
When i click the color pallete in the navabar I can change the theme of the sight.(coming soon)
When I click explore I see other peoples lists (coming soon)
```

## Data Model Flow
![image](https://user-images.githubusercontent.com/90432404/203458014-41553033-bedf-4b4b-93d8-20ab1535afc8.png)

## Collections
### User
| Field     | Type              | Misc.                       | Reference                 |
| --------- | ----------------- | --------------------------- | ------------------------- |
| _id       | ObjectId          |                             |                           |
| username  | String            | Required,unique,trimmed     |                           |
| Lists     | array of document | required, maxLength-280     | List through listName     |
| createdAt | Date              | default to when its created |                           |
| bucket    | document          |                             | bucket through bucketName |
|           |                   |                             |                           |
|           |                   |                             |                           |
### Bucket
| Field             | Type               | Misc.                       | Reference             |
| ----------------- | ------------------ | --------------------------- | --------------------- |
| _id               | ObjectId           |                             |                       |
| bucketName        | String             | Required,unique,trimmed     |                       |
| bucketDescription | String             | required, maxLength-280     |                       |
| createdBy         | ObjectId           |                             |                       |
| createdAt         | Date               | default to when its created |                       |
| lists             | array of documents |                             | List through ObjectId |
| lastUpdate        | Date               | Default to now              |                       |
### List
| Field           | Type          | Misc.                       | Reference               |
| --------------- | ------------- | --------------------------- | ----------------------- |
| _id             | ObjectId      |                             |                         |
| listName        | String        | Required,unique,trimmed     |                         |
| listDescription | String        | required, maxLength-280     |                         |
| createdBy       | ObjectId      |                             |                         |
| createdAt       | Date          | default to when its created |                         |
| bucket          | document      |                             | List through bucketName |
| listItems       | array of docs | uses item schema            |                         |
### Item (Schema Only)
| Field       | Type             | Misc.                       | Reference  |
| ----------- | ---------------- | --------------------------- | ---------- |
| itemId      | ObjectId         |                             |            |
| itemName    | String           | Required,trimmed            |            |
| url         | String           | required                    |            |
| description | String           | required, maxLength-280     |            |
| createdAt   | Date             | default to when its created |            |
| tasks       | Array of Strings |                             | To do list |
