const AWS = require('aws-sdk')
const s3 = new AWS.S3()
const moment = require('moment')
const fileType = require('file-type')
const sha1 = require('sha1')
const unixTime = require('unixtime')
const mime = require('mime-types')
