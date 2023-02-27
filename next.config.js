const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_uri: 'mongodb+srv://endritkanee:hLWBWfAJxCNpAm4T@cluster0.8arpyjj.mongodb.net/meetups?retryWrites=true&w=majority'
      },
    };
  }

  return {
    env: {
      mongodb_uri: 'mongodb+srv://endritkanee:hLWBWfAJxCNpAm4T@cluster0.8arpyjj.mongodb.net/meetups?retryWrites=true&w=majority'
    },
  };
};
