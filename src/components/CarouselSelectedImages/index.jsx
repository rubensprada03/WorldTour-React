import * as C from "./styles";

const CarouselSelectedImages = ({ images, setImages }) => {
  //   const organizeArray = () => {
  //     setImages(
  //       images.map((item, index) => ({
  //         ...item,
  //         index, // Adiciona o índice
  //       }))
  //     );
  //   };

  //   useEffect(() => {
  //     organizeArray();
  //   }, []);

  function updateIndex(id, direction) {
    const newImages = [...images];
    const itemToMove = newImages.filter((value) => value.id === id);
    const targetIndex =
      direction === "left" ? itemToMove[0].index - 1 : itemToMove[0].index + 1;
    console.log(itemToMove.index);
    console.log(itemToMove[0].index + targetIndex);
    const itemToMoveIndex = newImages.filter(
      (value) => value.index === targetIndex
    );

    if (targetIndex >= 0 && targetIndex < newImages.length) {
      setImages(
        images.map((item) => {
          if (item.id === id) {
            return { ...item, index: targetIndex };
          } else if (item.index === targetIndex) {
            return {
              ...item,
              index: direction === "left" ? targetIndex + 1 : targetIndex - 1,
            };
          } else {
            return item;
          }
        })
      );
    }
  }

  return (
    <C.Carousel className="">
      {images.map((image, index) => (
        <C.Card key={image.id} positionX={image.index * 252}>
          <img
            src={image.src.medium}
            alt={image.title}
            width={240}
            height={135}
          />
          <div className="controls">
            <button onClick={() => updateIndex(image.id, "left")}>
              &larr;
            </button>
            <button type="button">
              <i class="bi bi-trash red"></i>
            </button>

            <button onClick={() => updateIndex(image.id, "right")}>
              &rarr;
            </button>
          </div>
        </C.Card>
      ))}
    </C.Carousel>
  );
};

export default CarouselSelectedImages;
