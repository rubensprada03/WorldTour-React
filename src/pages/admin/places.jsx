import { useEffect, useRef, useState } from "react";
import Header from "../../components/header/Header";
import { getImagesFromPexels } from "../../requests/requests";
import {
  Form,
  ImagesArea,
  ImgCard,
  Main,
  Result,
  Carousel,
} from "../../Styles/global";

const Places = () => {
  const useForm = useRef();
  const [keyword, setKeyword] = useState("");
  const [imagesPexels, setImagesPexels] = useState([]);
  const [imagesSelected, setImagesSelected] = useState([]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(useForm.current.keyword.value.trim().replace(/\s+/g, "%20"));
      const imgs = await getImagesFromPexels(useForm.current.keyword.value);
      setImagesPexels(imgs);
    } catch (error) {}
  };

  useEffect(() => {
    console.log("images from pexels:", imagesPexels);
  }, [imagesPexels]);
  useEffect(() => {
    console.log("images selecteds:", imagesSelected);
  }, [imagesSelected]);

  const handleImage = (item) => {
    if (imagesSelected.some((image) => image.id === item.id)) {
      setImagesSelected(imagesSelected.filter((image) => image.id !== item.id));
    } else {
      setImagesSelected([...imagesSelected, item]);
    }
  };

  const verifySelect = (item) => {
    return imagesSelected.some((image) => image.id === item.id);
  };

  return (
    <>
      <Header background={"#19747E"} />

      <Main marginTop={"84px"}>
        <Form onSubmit={handleSubmit} ref={useForm}>
          <label htmlFor="keyword">
            Digite uma palavra chave para buscar imagens para o ponto turístico
          </label>
          <div className="d-flex row">
            <div class="input-group mb-3">
              <input
                onChange={(e) => setKeyword(e.target.value)}
                name="keyword"
                type="text"
                class="form-control"
                placeholder="Busque suas imagens..."
                aria-label="Busque suas imagens..."
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline-primary"
                type="submit"
                id="button-addon2"
              >
                Buscar
              </button>
            </div>
          </div>
        </Form>
        {imagesPexels.length > 0 && (
          <Result>
            <h2>
              Esses foram o resultado para a pesquisa por <span>{keyword}</span>
            </h2>
            <ImagesArea className="">
              {imagesPexels.length > 0 &&
                imagesPexels.map((item) => (
                  <ImgCard>
                    <img
                      key={item.id}
                      src={item.src.medium}
                      width={240}
                      height={135}
                    />
                    <button
                      onClick={() => handleImage(item)}
                      className={verifySelect(item) ? "selected" : ""}
                    >
                      <img
                        src="/assets/images/check.png"
                        alt=""
                        width={8}
                        height={8}
                      />
                    </button>
                  </ImgCard>
                ))}
            </ImagesArea>
          </Result>
        )}
        {imagesSelected.length > 0 && (
          <Result>
            <h2>
              Essas são as imagens selecionadas para <span>{keyword}</span>
            </h2>
            <Carousel className="">
              {imagesSelected.length > 0 &&
                imagesSelected.map((item) => (
                  <ImgCard>
                    <img
                      key={item.id}
                      src={item.src.medium}
                      width={240}
                      height={135}
                    />
                  </ImgCard>
                ))}
            </Carousel>
          </Result>
        )}
      </Main>
    </>
  );
};

export default Places;
