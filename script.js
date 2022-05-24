// Elements
const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const nationFlagEl = document.querySelector(".national-flag > img");
const country_KrEl = document.querySelector(".country-name-kr");
const country_EnEl = document.querySelector(".country-name-en");
const continentEl = document.querySelector(".continent-name");
const levelEl = document.querySelector(".alarm-lvl");

let inputValue = "";

let baseUrl = "http://apis.data.go.kr/1262000/TravelAlarmService2/getTravelAlarmList2";
let params = {
  servicelKey: "YJfCdKTd2Xc9jh96ViOqYaxQwZZ6JeNMS1Hbh4CoUFB935wwI7CHLU%2BBXQ%2BIBGUtu3EkQXGsBKHldH%2BejL8NAg%3D%3D",
  numOfRows: 1,
  pageNo: 1,
};

const country = {};

inputEl.addEventListener("change", (event) => {
  inputValue = event.target.value;
});

buttonEl.addEventListener("click", () => {
  getData(baseUrl, params.servicelKey, params.numOfRows, params.pageNo, inputValue);
});

// 데이터를 가져오는 함수 : getData
function getData(baseUrl, servicelKey, numOfRows, pageNo, value) {
  const url = `${baseUrl}?ServiceKey=${servicelKey}&numOfRows=${numOfRows}&pageNo=${pageNo}&cond[country_nm::EQ]=${value}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      nationFlagEl.src = data.data[0].flag_download_url;
      country_KrEl.textContent = data.data[0].country_nm;
      country_EnEl.textContent = data.data[0].country_eng_nm;
      continentEl.textContent = data.data[0].continent_eng_nm;
      levelEl.textContent = `${data.data[0].alarm_lvl} 단계`;

      // country.nation_flag = data.data[0].flag_download_url;
      // console.log(country.nation_flag);
      // country.country_nm = data.data[0].country_nm;
      // country.country_eng_nm = data.data[0].country_eng_nm;
      // country.continent_eng_nm = data.data[0].continent_eng_nm;
      // country.alarm_level = data.data[0].alarm_lvl;
    });
}
