'use strict';

var isBrowser = require('forbeslindesay-is-browser')
  , core = isBrowser ? require('ericgj-json-schema-core') : require('json-schema-core-component')
  , hyper = isBrowser ? require('ericgj-json-schema-hyper') : require('json-schema-hyper-component')
  , valid = isBrowser ? require('ericgj-json-schema-valid') : require('json-schema-valid-component')
  , Agent = isBrowser ? require('ericgj-json-schema-agent') : require('json-schema-agent-component')
  , request = require('visionmedia-superagent')
  , Schema = core.Schema
  , Service = function(){ return request; }

Schema.use(valid);
Schema.use(hyper);

Agent.service(Service);

module.exports = {
  Schema:  Schema,
  Agent:  Agent,
  Validator: valid,
  HyperSchema: hyper
}

