'use strict';

var util = require('util');
var userMsg = require('./userMsg.js'),
    consts = require('./consts.js');

/**
 *
 *
 */
var BotEnableMsg = function(_user, _botId, _text, _timestamp) {

	userMsg.call(this, _user, _text, _timestamp, 'bot_enable', consts.USER_ACTION_MSG_CLASS);

	var botId = _botId;

	this.getBotId = function() {
		return botId;
	};

};

util.inherits(BotEnableMsg, userMsg);

module.exports = BotEnableMsg;