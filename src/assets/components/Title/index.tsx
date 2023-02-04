import "./style.scss";
import chooseImg from '../../img/shuffle.svg'

export default function Title() {
  return (
    <div className="Title">
      <img src={chooseImg} />
      <h1>Don't know what to watch ??</h1>
    </div>
  );
}
