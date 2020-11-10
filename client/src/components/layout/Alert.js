import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

// we are mapping a state from redux to props (here we are using the array of alerts)
// state.alert comes from the root reducer (reducer/index.js)
const mapStateToProps = (state) => ({
  alerts: state.alert,
});

// connect takes first mapStateToProps and then any actions
export default connect(mapStateToProps)(Alert);
