import { PhotoData } from "../interfaces/PhotoData";
import Masonry from "react-masonry-css";
import styled from "styled-components";

const Results = ({ photos }: { photos: PhotoData[] }) => {
  const PhotoList = styled.div`
    .my-masonry-grid {
      display: -webkit-box; /* Not needed if autoprefixing */
      display: -ms-flexbox; /* Not needed if autoprefixing */
      display: flex;
      margin-left: -20px; /* gutter size offset */
      width: auto;
    }
    .my-masonry-grid_column {
      padding-left: 10px; /* gutter size */
      background-clip: padding-box;
    }

    /* Style your items */
    .my-masonry-grid_column > div {
      /* change div to reference your elements you put in <Masonry> */
      background: grey;
      margin-bottom: 10px;
    }
  `;

  const breakpointColumnsObj = {
    default: 4,
    1350: 3,
    1048: 2,
    500: 1,
  };

  return (
    <PhotoList className="photo-list p-2 mx-2">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map((photo) => {
          return (
            <div key={photo.id}>
              <a href={photo.links.html} target="_blank" rel="noreferrer">
                <img src={photo.urls.regular} alt={photo.description} />
              </a>
            </div>
          );
        })}
      </Masonry>
    </PhotoList>
  );
};

export { Results };
