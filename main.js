// Elements
const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");

// API를 요청하기 위한 필수 Parameter
const baseURL = "http://apis.data.go.kr/1262000/TravelAlarmService2/getTravelAlarmList2";

const necessary = {
  servicelKey: "YJfCdKTd2Xc9jh96ViOqYaxQwZZ6JeNMS1Hbh4CoUFB935wwI7CHLU%2BBXQ%2BIBGUtu3EkQXGsBKHldH%2BejL8NAg%3D%3D",
  numOfRows: 1,
  pageNo: 1,
};

let inputValue = "";

console.log(country_KrEl);
// if(country_KrEl.textContent ===)
// input Event: input 값을 저장하는 Event
inputEl.addEventListener("change", (event) => {
  inputValue = event.target.value;
});

// button Event
buttonEl.addEventListener("click", () => {
  getData(baseURL, necessary.servicelKey, necessary.numOfRows, necessary.pageNo, inputValue);
});

/* 데이터를 보낼 형식
  http://apis.data.go.kr/1262000/TravelAlarmService2/getTravelAlarmList2?ServiceKey=YJfCdKTd2Xc9jh96ViOqYaxQwZZ6JeNMS1Hbh4CoUFB935wwI7CHLU%2BBXQ%2BIBGUtu3EkQXGsBKHldH%2BejL8NAg%3D%3D&numOfRows=10&pageNo=1&cond[country_nm::EQ]=가나
*/
function getData(url, key, numRow, pNo, value) {
  const query = url + "?" + `ServiceKey=${key}` + "&" + `numOfRows=${numRow}` + "&" + `pageNo=${pNo}` + "&" + `cond[country_nm::EQ]=${value}`;
  console.log(query);

  let response = fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
}
