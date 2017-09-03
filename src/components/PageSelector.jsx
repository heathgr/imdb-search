import React from 'react';
import PropTypes from 'prop-types';

const PageSelector = (props) => {
  const pageCount = props.resultCount ? Math.ceil(props.resultCount / 10) : null;

  return (
    (pageCount > 1) && <div className='flexRow'>
      {
        Array(pageCount).fill(null).map(
          (item, i) => {
            const pageNumber = i + 1;
            const className = props.searchPage === pageNumber ? 'pageButton currentPageButton' : 'pageButton';

            return (
              <div
                key={pageNumber}
                className={className}
                onClick={
                  () => props.onSubmitSearchPage(pageNumber)
                }
              >
                {pageNumber}
              </div>
            );
          }
        )
      }
    </div>
  );
};

PageSelector.propTypes = {
  searchPage: PropTypes.number.isRequired,
  onSubmitSearchPage: PropTypes.func.isRequired,
  resultCount: PropTypes.number.isRequired,
};

export default PageSelector;
