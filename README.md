# Disclaimer
This app have few tests of basic usage MongoDB with Mongoose ODM.

Following features being tested:
 - Connection (`mongoose.connect(...)`)
 - Saving object (`.save(...)`)
 - Search query (`.findOne(...)`)
 - Update query (`.save(...)` after `.findOne(...)` with comparing updated object data`)
 
In case each feature works fine - you'll see this output in console:
```
√ Success connect
√ Success save
√ Success search
√ Success update
√ EVERYTHING WORKS
```

Which looks like this
![image](https://cloud.githubusercontent.com/assets/25591824/25441999/7f76a2fc-2aac-11e7-9bf1-82d55bb1461a.png)

# Running
Clone this repo by executing `git clone https://github.com/eko24ive/mongo-demo-usage.git` in your terminal, or by using your favourite VCS app.  
Install dependencies via `npm install` or `yarn install`.
Run it via `node index.js`
