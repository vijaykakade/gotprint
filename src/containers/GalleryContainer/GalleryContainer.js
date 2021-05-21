import React, { useEffect, useState } from 'react'; 
import { Container, Loader } from 'semantic-ui-react';
import ImageList from '../../components/ImageList/ImageList';
import { connect } from 'react-redux';
import { selectPhotos, selectLoadindStatus, selectCurrentActivePage } from '../../reducers/galleryReducer';
import PaginationContainer from '../PaginationContainer/PaginationContainer';
import SearchBar from '../../components/SearchBar/SearchBar';

const GalleryContainer = ({ 
  photos,
  getPhotos,
  loading,
  currentActivePage
}) => {

  useEffect(() => {
    getPhotos();
    
  }, []);

  const getGalleryImage = (photos) => {
    if(!loading) {
      return photos.slice(Number(currentActivePage*15), currentActivePage*15 + 15);
    }
  }

  return (
    <Container fluid>
      <SearchBar/>
      <Loader
        active={loading}
      />
      <ImageList
        items={getGalleryImage(photos)}
      />
      <PaginationContainer
        items={!loading ? photos : null}
      />
    </Container>
  )
}

const mapStateToProps = (state) => {
  const loading = selectLoadindStatus(state);
  const photos = selectPhotos(state);
  const currentActivePage = selectCurrentActivePage(state);

  return {
    photos,
    loading,
    currentActivePage
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPhotos : (e) => {
    dispatch({type:'POSTS_REQUEST'})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);