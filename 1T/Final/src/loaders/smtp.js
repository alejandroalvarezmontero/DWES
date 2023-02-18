const smptpService = require('../services/smtp-service');

module.exports = config => smptpService.setConfig(config);