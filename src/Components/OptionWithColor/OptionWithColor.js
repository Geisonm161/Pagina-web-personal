import React from 'react';
import classNames from 'classnames';

const OptionWithColor = ({ innerProps, label, data }) => {
  const { color } = data;

  return (
    <div {...innerProps} className="flex items-center">
      <div
        className={classNames('w-4 h-4 rounded-full mr-2', {
          'bg-red-500': color === 'red',
          'bg-green-600': color === 'green',
          'bg-blue-800': color === 'blue',
          'bg-black': color === 'black',
          'bg-yellow-500': color === 'yellow',
          'bg-white': color === 'white',
          'bg-pink-500': color === 'pink',

        })}
      />
      {label}
    </div>
  );
};

export default OptionWithColor;