var express = require("express");
var app = express();
var path = require("path");

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let users = [
    {
        id:1,
        firstname: 'Mary Grace',
        lastname: 'Piatos',
        age: 43
    }
]

app.get('/',function(request,response){
    const filepath = path.join(__dirname, 'public/pages/','index.html')
    response.sendFile(filepath);
    console.log("This is the homepage")
})

app.get('/register',function(request,response){
    const filepath = path.join(__dirname, 'public/pages/','register.html')
    response.sendFile(filepath);
})

app.get('/profile',function(request,response){
    const filepath = path.join(__dirname, 'public/pages/','profile.html')
    response.sendFile(filepath);
})

app.get('/editprofile',function(request,response){
    const filepath = path.join(__dirname, 'public/pages/','editprofile.html')
    response.sendFile(filepath);
})

app.get('/user/:id',function(req,res){
    const id = req.params.id;
    res.send(`ID:${id}. You can edit your profile`);
})

app.post('/register', function(req, res) {
    const fname = req.body.firstname;
    const lname = req.body.lastname;
    const age = req.body.age;
    
    const recordCount = users.length + 1;
    const info = {
        id: recordCount,
        firstname: fname,
        lastname: lname,
        age: age
    };
    
    users.push(info);
    res.json(users);
});

app.delete('/delete-user/:id', function(req,res){
    const user_id=req.params.id;
    const userIndex = users.findIndex(user => user.id === user.id);
    user.splice(userIndex, 1);
    res.json(users);
})

app.get('/show-users',function(req,res){
    res.json(users);
})

app.get('/search-users', function(req, res) {
    const filepath = path.join(
        __dirname,
        'public/pages/',
        'search-users.html'
    );

    res.sendFile(filepath);
});

app.get('/api/search-users', function(req, res) {

    const searchTerm = req.query.name.toLowerCase();

    const results = users.filter(user =>
        user.firstname.toLowerCase().includes(searchTerm) ||
        user.lastname.toLowerCase().includes(searchTerm)
    );

    res.json(results);
});


app.listen(3000, function(){
    console.log('Server running at http://localhost:3000');
})