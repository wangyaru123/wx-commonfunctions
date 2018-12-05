var app = getApp();

Page({
  data: {
    positionArray: [{
      "id": "1",
      "text": "管理员"
    }, {
      "id": "2",
      "text": "班组长"
    }, {
      "id": "3",
      "text": "机修"
    }, {
      "id": "4",
      "text": "财务"
    }, {
      "id": "5",
      "text": "员工"
    }],
    positionIndex: 0,
    selectDep: '请选择',
    buttonDisabled: false,
    modalHidden: true,
    show: false
  },
  
  showModal: function () {
    this.setData({
      modalHidden: !this.data.modalHidden
    })
  },

  modalBindaconfirm: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
      show: !this.data.show,
      buttonDisabled: !this.data.buttonDisabled
    })
    if (this.data.selectDep == "请选择") {
      this.setData({
        selectDep_id: 1,
        selectDep: "管理员"
      })
    }
  },

  modalBindcancel: function () {
    this.setData({
      modalHidden: !this.data.modalHidden
    })
  },
  bindChange: function (e) {
    const val = e.detail.value;
    this.setData({
      selectDep_id: parseInt(val) + 1,
      selectDep: this.data.positionArray[val].text
    })
  }
})