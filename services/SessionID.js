const SessionIDtodata = new Map();


function SET_USER(id, user) {
    return SessionIDtodata.set(id, user)


}
function GET_USER(id) {
    return SessionIDtodata.get(id)
};


module.exports = {
    GET_USER, SET_USER
}


