// MainLayout.jsx

import Header from "../Component/Header/Header"
import Content from "../Component/Contents/Content"
import Content01 from "../Component/Contents/Content01";
import Search from "../Component/Search/Search";

import 'bootstrap-icons/font/bootstrap-icons.css';

function MainLayout() {
  return (
    <section id="main-layout">
        <Header></Header>
        <Search></Search>
        <Content></Content>
        <Content01></Content01>
    </section>
  )
}

export default MainLayout
