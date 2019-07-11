import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

export default function GridPlaceholder({ repeatCount }) {
  const howMany = Array.from(Array(repeatCount).keys());
  return (
    <>
      {howMany.map(placeholder => (
        <li key={placeholder}>
          <div style={{ alignSelf: 'center' }}>
            <Skeleton width={250} height={250} />
          </div>
          <strong>
            <Skeleton />
          </strong>
          <span>
            <Skeleton />
          </span>
          <button type="button">
            <div>
              <Skeleton />
            </div>

            <span />
          </button>
        </li>
      ))}
    </>
  );
}

GridPlaceholder.propTypes = {
  repeatCount: PropTypes.number,
};

GridPlaceholder.defaultProps = {
  repeatCount: 0,
};
