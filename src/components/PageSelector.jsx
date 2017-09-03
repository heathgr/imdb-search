import React from 'react';
import PropTypes from 'prop-types';

const PageSelector = (props) => {
  const pageCount = props.resultCount ? Math.ceil(props.resultCount / 10) : null;

  return (
    (pageCount > 1) && <div className='flexRow'>
      {
        Array(pageCount).fill(null).map(
          (item, i) => <div className={props.searchPage === (i + 1) ? 'pageButton currentPageButton' : 'pageButton'}>{i + 1}</div>
        )
      }
    </div>
  );
};

PageSelector.propTypes = {
  searchPage: PropTypes.number.isRequired,
  resultCount: PropTypes.number.isRequired,
};

export default PageSelector;
