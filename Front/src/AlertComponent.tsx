import React from 'react';

interface AlertProps {
  message: string;
}

const AlertComponent: React.FC<AlertProps> = ({ message }) => {
  return (
    <div id="liveAlertPlaceholder">
      <div className="alert alert-danger alert-dismissible" role="alert">
        <div>{message}</div>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default AlertComponent;