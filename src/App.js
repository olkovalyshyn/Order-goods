import { Component } from "react";
import "./App.css";
import GalleryGoods from ".//components/GalleryGoods/GalleryGoods";
import ButtonCheapest from "./components/ButtonCheapest/ButtonCheapest";
import Modal from "../src/components/Modal/Modal";

export default class App extends Component {
  state = {
    goods: null,
  };

  async componentDidMount() {
    fetch("https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e")
      .then((res) => res.json())
      .then((goods) => this.setState({ goods }));
  }

  render() {
    return (
      <>
        {this.state.goods && (
          <GalleryGoods
            goodsProp={this.state.goods}
            onOpenModal={this.openModal}
          />
        )}
        <ButtonCheapest />
      </>
    );
  }
}
