const basicInfo = require('./basicInfo.js');
const components = require('./components.js');
const tasks = require('./tasks.js')

module.exports = {
    ...basicInfo,
    ...components,
    ...tasks,
};
