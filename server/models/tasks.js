'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 50
    },
    creationDate: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamp: {
      createdAt: 'creationDate',
      updatedAt: 'updateDate'
    }
  }
);

module.exports = mongoose.model('Task', schema);
