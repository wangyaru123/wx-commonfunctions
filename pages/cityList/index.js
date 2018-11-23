Page({
  data: {
    //下面是字母排序
    letter: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    cityListId: '',
    //下面是城市列表信息，这里只是模拟数据
    citylist: [{ "letter": "A", "data": [{ "id": "v7", "cityName": "安徽" }] }, { "letter": "B", "data": [{ "id": "v10", "cityName": "巴中" }, { "id": "v4", "cityName": "包头" }, { "id": "v1", "cityName": "北京" }] }, { "letter": "C", "data": [{ "id": "v15", "cityName": "成都" }] }, { "letter": "D", "data": [{ "id": "v21", "cityName": "稻城" }] }, { "letter": "G", "data": [{ "id": "v17", "cityName": "广州" }, { "id": "v29", "cityName": "桂林" }] }, { "letter": "H", "data": [{ "id": "v9", "cityName": "海南" }, { "id": "v3", "cityName": "呼和浩特" }] }, { "letter": "L", "data": [{ "id": "v24", "cityName": "洛阳" }, { "id": "v20", "cityName": "拉萨" }, { "id": "v14", "cityName": "丽江" }] }, { "letter": "M", "data": [{ "id": "v13", "cityName": "眉山" }] }, { "letter": "N", "data": [{ "id": "v27", "cityName": "南京" }] }, { "letter": "S", "data": [{ "id": "v18", "cityName": "三亚" }, { "id": "v2", "cityName": "上海" }] }, { "letter": "T", "data": [{ "id": "v5", "cityName": "天津" }] }, { "letter": "W", "data": [{ "id": "v12", "cityName": "乌鲁木齐" }, { "id": "v25", "cityName": "武汉" }] }, { "letter": "X", "data": [{ "id": "v23", "cityName": "西安" }, { "id": "v28", "cityName": "香港" }, { "id": "v19", "cityName": "厦门" }] }, { "letter": "Z", "data": [{ "id": "v8", "cityName": "张家口" }] }],
    //下面是热门城市数据，模拟数据
    newcity: ['北京', '上海', '广州', '深圳', '成都', '杭州'],
    // citySel: '全国',
    locateCity: ''
  },

  //点击城市字母
  letterTap(e) {
    const Item = e.currentTarget.dataset.item;
    this.setData({
      cityListId: Item
    });
    console.log("..............." + this.data.cityListId);
  },
  onShow() {
    console.log(getApp());
    let that = this,
      cityOrTime = wx.getStorageSync('locatecity') || {},
      time = new Date().getTime(),
      city = '';
    if (!cityOrTime.time || (time - cityOrTime.time > 1800000)) {//每隔30分钟请求一次定位
    } else {//如果未满30分钟，那么直接从本地缓存里取值
      that.setData({
        locateCity: cityOrTime.city
      })
    }


  }
})