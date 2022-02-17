import React, { useEffect, useState } from 'react';
import { Alert } from 'antd';
import {  useSelector } from 'react-redux';

export const AlertNotification = () => {
  const notification = useSelector((state) => state.notification);
  const [showIcon, setShowIcon] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  const showSuccessMessage = ({ show, message, type }) => {
    setShowIcon(show);
    setMessage(message);
    setType(type);

    setTimeout(() => {
      setShowIcon(false);
    }, 2000);
  };

  useEffect(() => {
    if (notification?.payload) showSuccessMessage(notification?.payload);
  }, [notification]);

  return (
    <>
      {showIcon && (
        <Alert
          style={{ textAlign: 'center' }}
          message={message}
          type={type}
          showIcon={true}
        />
      )}
    </>
  );
};
