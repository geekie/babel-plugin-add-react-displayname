import React from 'react';

const MyButton = React.forwardRef(function () {
  const component = function MyButton(props, ref) {
    return React.createElement(
      'div',
      { ref: ref },
      props.text
    );
  };

  component.displayName = 'MyButton';
  return component;
}());

const MyMemoComponent = React.memo(function () {
  const component = function (props) {
    return React.createElement(
      'div',
      null,
      props.text
    );
  };

  component.displayName = 'MyMemoComponent';
  return component;
}());

const MyArrowFnComponent = React.forwardRef(function () {
  const component = (props, ref) => {
    return React.createElement(
      'div',
      { ref: ref },
      props.text
    );
  };

  component.displayName = 'MyArrowFnComponent';
  return component;
}());

// These patterns don't need especial wrapping

function MyPreviouslyDeclaratedButton(props, ref) {
  return React.createElement(
    'div',
    { ref: ref },
    props.text
  );
}

MyPreviouslyDeclaratedButton.displayName = 'MyPreviouslyDeclaratedButton';
MyButtonWithRef = React.forwardRef(MyPreviouslyDeclaratedButton);
