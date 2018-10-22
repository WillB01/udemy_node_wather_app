const getUser = (id, callback) => {
    const user = {
        id: id,
        name: 'Joe'
    };

    setTimeout(() => {
        callback(user);
    }, 2000);
    
};

getUser(31, (userObject) => {
    console.log(userObject);
});