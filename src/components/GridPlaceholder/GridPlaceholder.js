import React from 'react';
import PropTypes from 'prop-types';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function GridPlaceholder({ repeatCount }) {
  const howMany = Array.from(Array(repeatCount).keys());
  return (
    <>
      {howMany.map(placeholder => (
        <li key={placeholder}>
          <div style={{ alignSelf: 'center' }}>
            <Skeleton height={249} />
          </div>
          <strong>
            <Skeleton width={220} />
            <Skeleton width={150} />
          </strong>
          <div>
            <span>
              <Skeleton width={90} />
            </span>
            <button type="button">
              <SkeletonTheme color="#7159c1" highlightColor="#444">
                <Skeleton width={26} />
              </SkeletonTheme>

              <span>
                <SkeletonTheme color="#997df5" highlightColor="#4e3b8c">
                  <Skeleton width={150} />
                </SkeletonTheme>
              </span>
            </button>
          </div>
        </li>
      ))}
    </>
  );
}

GridPlaceholder.propTypes = {
  repeatCount: PropTypes.number,
};

GridPlaceholder.defaultProps = {
  repeatCount: 1,
};
