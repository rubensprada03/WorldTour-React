import { useEffect, useRef, useState } from "react";
import CarouselSelectedImages from "../../../components/CarouselSelectedImages";
import Header from "../../../components/header/Header";
import { getImagesFromPexels } from "../../../requests/requests";
import {
  Container,
  Form,
  ImagesArea,
  ImgCard,
  Main,
  Result,
} from "../../../Styles/global";
import * as C from "./styles";

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
      setImagesSelected([
        ...imagesSelected,
        { ...item, index: imagesSelected.length },
      ]);
    }
  };

  const verifySelect = (item) => {
    return imagesSelected.some((image) => image.id === item.id);
  };

  return (
    <Container>
      <Header background={"#19747E"} />

      <Main marginTop={"84px"}>
        <C.Title>Adicionar novo ponto turístico</C.Title>
        <Form onSubmit={handleSubmit} ref={useForm}>
          <C.InputArea>
            <C.BoxInput>
              <label htmlFor="">Nome</label>
              <C.Input />
            </C.BoxInput>
            <C.BoxInput>
              <label htmlFor="">Cidade</label>
              <C.Input />
            </C.BoxInput>
            <C.BoxInput>
              <label htmlFor="">País</label>
              <C.Input />
            </C.BoxInput>
            <C.BoxInput>
              <label htmlFor="">Preço</label>
              <C.Input />
            </C.BoxInput>
            <C.BoxInput className="full">
              <label htmlFor="">Descrição</label>
              <textarea />
            </C.BoxInput>
          </C.InputArea>
          <C.InputSearchImg>
            <label htmlFor="keyword">
              Digite uma palavra chave para buscar imagens para o ponto
              turístico
            </label>
            <div className="d-flex row">
              <div class="input-group mb-3">
                <input
                  onChange={(e) => setKeyword(e.target.value)}
                  name="keyword"
                  id="keyword"
                  type="text"
                  // class="form-control"
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
          </C.InputSearchImg>
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
            <h2>Essas são as imagens selecionadas</h2>
          </Result>
        )}

        <Result>
          <CarouselSelectedImages
            images={imagesSelected}
            setImages={(value) => setImagesSelected(value)}
          />
        </Result>
      </Main>
    </Container>
  );
};

export default Places;
