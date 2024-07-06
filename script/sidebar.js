//サイドバーのOn/Off
const SideButton = document.getElementById("b1");
const SideBar = document.getElementById("s1");
const Main = document.getElementById("main");
SideButton.addEventListener("click", side_button_click, false);
function side_button_click ()
{
  if (SideBar.style.display === 'block') {
    SideBar.style.display = 'none';
    Main.style.marginLeft = "0%";
  } else {
    SideBar.style.display = 'block';
    Main.style.marginLeft = "22%";
  }
}
//from https://qiita.com/sei84/items/75cb7fd5cdfa84dee7e9
//ページ全体の高さ取得
const docHeight = document.body.clientHeight;
SideBar.style.height = (SideBar.style.display-27) + "px";
