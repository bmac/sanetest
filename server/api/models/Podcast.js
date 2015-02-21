/**
* Podcast.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    feedUrl : { type: 'string' },

    title : { type: 'string' },

    link : { type: 'string' },

    language : { type: 'string' },

    copyright : { type: 'string' },

    subtitle : { type: 'string' },

    author : { type: 'string' },

    explicit : { type: 'boolean' },

    summary : { type: 'string' },

    description : { type: 'string' },

    image : { type: 'string' }
  }
};

