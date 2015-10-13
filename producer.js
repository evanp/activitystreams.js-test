#!/usr/bin/env node

// Copyright 2015 W3C
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var fs = require('fs');
var path = require('path');

var argv = require('yargs').argv;
var as = require('activitystrea.ms');
var through = require('through2');

var as = require('activitystrea.ms');
var through = require('through2');

// FIXME: We should probably handle different kinds of objects

var builder = as.activity(argv.type);

if (argv['actor-id']) {
  builder = builder.actor(argv['actor-id']);
}

if (argv['object-id']) {
  builder = builder.object(argv['object-id']);
}

var act = builder.get();

act.pipe(process.stdout);
