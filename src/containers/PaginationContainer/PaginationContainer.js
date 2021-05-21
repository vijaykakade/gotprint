import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'semantic-ui-react';
import { setCurrentActivePage } from '../../reducers/galleryReducer';

const PaginationContainer = ({ items, setCurrentActivePage }) => {

  const itemsPerPage = 15;
  const totalItems = items && items.length;
  const totalPages = Math.floor(totalItems / itemsPerPage);

  const [activePage, setActivePage] = useState(1);

  const onPageChange = (e, { activePage }) => {
    setActivePage(activePage);
    setCurrentActivePage(activePage);
  }

  return (
    <Pagination
      activePage={activePage}
      onPageChange={onPageChange}
      showEllipsis
      showFirstAndLastNav
      showPreviousAndNextNav
      totalPages={totalPages}
      boundaryRange={0}
      ellipsisItem={null}
    />
  )
}

const mapStateToProps = () => {

}

const mapDispatchToProps = {
  setCurrentActivePage
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer);