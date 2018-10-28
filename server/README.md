# Homelike server for assignment

## Background information

###run
- edit /config/default.json
- provide mongodb connection path [mongodb://localhost:27017/assignment by default]
- npm install
- npm start

###current endpoints
- `/users`
- `/apartments`
- `/locations`
- `/graphql`
- `/graphiql`

##What to do - for backend engineers
1. add new endpoint /countries which should represent the data from the `countries` collection - `Done`
1. add `countries` to /graphql endpoint- `Done`
1. add `country` to `locations.graphql.schema` as a representative of `country` information- `Done`
1. add functionality to use `limit` and `skip` as a parameters to fetch data through `/graphql` endpoint- `Done`
1. If you run the following query, location will always be `null`. Please figure out why this is happening.
After you found out how this happens, please describe the reason and how you found the issue. - `Done - The issue is not just with the following query. location by _id queries were also returning null. Reason being that the values assigned to the _id field are valid bson keys. feathers-mongo library converts this _id to MongoDb ObjectId before passing it to MongoDB. One difference I noticed among the values assigned to _id of other colletions to that of locations collection is that none of them were valid bson keys. Changing all the _ids in locations collection and the reference in apartment collection fixed the issue.`
```query RootQuery($owner: String) {  
      apartments(owner: $owner) {  
        items {  
          location {  
            title  
          }  
        }  
      }  
    }
```  
