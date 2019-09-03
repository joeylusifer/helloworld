// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: ''
  },
  handleChooseAlbum(){
    // 调用系统API,让用户在相册中选择图片或者拍照
    // console.log('-----------------')
    wx.chooseImage({
      success: (res) => {
        // 1.取出路径
        // console.log(res)
        const path = res.tempFilePaths[0]

        // 2.设置imagePath
        this.setData({
          imagePath: path
        })
      },
    })
  },
  handleImageLoad(){
    console.log('图片加载完成了')
  }
})