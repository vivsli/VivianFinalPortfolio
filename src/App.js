import './index.css';
import './App.css';
import React from 'react';
import FilteredList from './FilteredList.js';

export default class App extends React.Component {
  /* this is the main app file*/

  render() {
    const artDict = [
      /* A dictionary that contains all the information on every art piece*/
      { name: "Harold Parker Forest", src: "/images/Piece1.jpg", medium: "oil paint", date: "08/2/2017", has_awards: "no", awards: "", time: "10" },
      { name: "Black Cloud", src: "/images/Piece2.jpg", medium: "colored pencil", date: "11/3/2016", has_awards: "yes", awards: "* Scholastic Art and Writing Awards National Gold Medal *", time: "52" },
      { name: "Serenity", src: "/images/Piece3.jpg", medium: "watercolor", date: "05/20/2018", has_awards: "no", awards: "", time: "2" },
      { name: "Frosted Pink", src: "/images/Piece4.jpg", medium: "colored pencil", date: "02/27/2014", has_awards: "no", awards: "", time: "6" },
      { name: "Unexpected Adventure", src: "/images/Piece5.jpg", medium: "colored pencil", date: "11/27/2015", has_awards: "no", awards: "", time: "8" },
      { name: "Offstage", src: "/images/Piece6.jpg", medium: "colored pencil", date: "08/17/2016", has_awards: "yes", awards: "* Scholastic Art and Writing Awards Regional Silver Medal *", time: "14" },
      { name: "Flash of Life", src: "/images/Piece7.jpg", medium: "colored pencil", date: "09/14/2017", has_awards: "no", awards: "", time: "13" },
      { name: "Red", src: "/images/Piece8.jpg", medium: "ink", date: "12/29/2016", has_awards: "no", awards: "", time: "2" },
      { name: "*Untitled*", src: "/images/Piece9.jpg", medium: "collage", date: "10/30/2019", has_awards: "no", awards: "", time: "4" },
      { name: "Moving Forward", src: "/images/Piece10.jpg", medium: "oil paint", date: "6/1/2016", has_awards: "no", awards: "", time: "11" },
      { name: "Autumn Farmhouse", src: "/images/Piece11.jpg", medium: "oil paint", date: "7/18/2016", has_awards: "no", awards: "", time: "12" },
      { name: "Cornucopia", src: "/images/Piece12.jpg", medium: "mixed media", date: "3/23/2017", has_awards: "yes", awards: "* Scholastic Art and Writing Awards Regional Gold Medal *", time: "55" }
    ];
    return (
      <div>
        <FilteredList list={artDict} />
      </div>
    )
  }
}