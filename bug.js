```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{ "counter": -1}});
//The above code will work fine only when the counter field is present in the document.
//If counter is not present in the document, the $inc operator will not throw an error. Instead, it will simply add the counter field with value -1
//Correct usage to handle missing counter field
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{ "counter": -1}}, {upsert:true});
```