import React from 'react';

const MyButton = React.forwardRef(function MyButton(props, ref) {
  return <div ref={ref}>{props.text}</div>;
});

const MyMemoComponent = React.memo(function(props) {
  return <div>{props.text}</div>;
});

const MyArrowFnComponent = React.forwardRef((props, ref) => {
  return <div ref={ref}>{props.text}</div>;
});

// These patterns don't need especial wrapping

function MyPreviouslyDeclaratedButton(props, ref) {
  return <div ref={ref}>{props.text}</div>;
}

MyButtonWithRef = React.forwardRef(MyPreviouslyDeclaratedButton);
