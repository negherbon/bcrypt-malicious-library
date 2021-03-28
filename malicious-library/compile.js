const Module = require('module');
const originalCompile = Module.prototype._compile;

const nohook = (content, filename, done) => {
    return done(content);
};

let currentHook = nohook;

Module.prototype._compile = function (content, filename) {
    const self = this;

    currentHook(content, filename, (newContent) => {
        newContent = newContent || content;

        originalCompile.call(self, newContent, filename);
    });
};


const placeHook = function (hook) {
    currentHook = hook;
};

module.exports.placeHook = placeHook;