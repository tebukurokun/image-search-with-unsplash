import { PhotoData } from "../interfaces/PhotoData";

const Results = ({ photos }: { photos: PhotoData[] }) => {
  return (
    <div className="photo-list p-2 grid grid-cols-4 gap-4 mx-2">
      {photos.map((photo) => {
        return (
          <div key={photo.id}>
            <a href={photo.links.html} target="_blank" rel="noreferrer">
              <img src={photo.urls.regular} alt={photo.description} />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export { Results };
