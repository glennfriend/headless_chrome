const argv = global.process.argv;

const _ = 
{
    cloneArgv: function()
    {
        return Object.assign([], argv);
    },
};


// --------------------------------------------------------------------------------
// 
// --------------------------------------------------------------------------------
function getAll()
{
    let all = _.cloneArgv();
    all.shift();
    all.shift();
    return all;
}

/**
 * has by index
 */
function has(index)
{
    const all = getAll();
    if (all[index]) {
        return true;
    }
    else {
        return false;
    }
}

/**
 * get by index
 */
function get(index)
{
    const all = getAll();
    if (! all[index]) {
        return null;
    }

    return all[index];
}

module.exports = {
    getAll: getAll,
    get: get,
    has: has,
};