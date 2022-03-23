const create = require("../actions/create");

module.exports = (option, cb = null) => {
    switch (option.toUpperCase()) {
        case 'L': console.log('list'); break;
        case 'R': console.log('read'); break;
        case 'C': create(cb); break;
        case 'D': console.log('delete'); break;
        case 'E': break;
        default: cb();
    }
}