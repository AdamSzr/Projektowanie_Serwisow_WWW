import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import {
  SEARCH_DISPLAY_ROWS,
  DISPLAY_ROWS
} from "./appSettings.js";


export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", DISPLAY_ROWS), // base state of emoji arr
    };
  }

 
  handleSearchChange = event => { // fire when, value change in header.
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, SEARCH_DISPLAY_ROWS)
    });
  };



  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}
