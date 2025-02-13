// ❓ DESCRIPTION:

// You have a group chat application, but who is online!?
// You want to show your users which of their friends are online and available to chat!
// Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

// ✅ SOLUTION:

function whosOnline(friends) {
    result = {}
    for(let i = 0; i < friends.length; i++){
        let status = friends[i].status;
        const username = friends[i].username;
        if (status === 'online' && friends[i].lastActivity > 10){
            status = 'away';
        }
        if (!result.hasOwnProperty(status)){
            result[status] = []
        }
        result[status].push(username)
    }
    return result;
}

