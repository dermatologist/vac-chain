module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
    networks: {
        development: {
            host: "192.168.0.250",
            port: 7545,
            network_id: "*" // Match any network id
        }
    }
};
