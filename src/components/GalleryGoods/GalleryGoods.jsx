import CardGood from "../CardGood/CardGood";
import s from "./GalleryGoods.module.css";

function GalleryGoods({ goodsProp }) {
  return (
    <>
      <ul className={s.gridFlex}>
        {goodsProp.map((good) => {
          return <CardGood goodSingle={good} />;
        })}
      </ul>
    </>
  );
}

export default GalleryGoods;
