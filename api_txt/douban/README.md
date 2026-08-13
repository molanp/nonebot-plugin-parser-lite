# 前言

豆瓣图片资源地址需要`Referer`才能下载，不然返回 `418`

- **Referer**: `https://douban.com/`

# Topic

- `https://m.douban.com/rexxar/api/v2/group/topic/{topic_id}`
- horizontal `https://m.douban.com/rexxar/api/v2/group/topic/490753319`
- vertical `https://m.douban.com/rexxar/api/v2/group/topic/472573751`

## Topic 链接格式

- 移动端: `https://m.douban.com/group/topic/\d+`
- PC 端: `https://www.douban.com/group/topic/\d+`

返回的url，应使用数据中带有`_spm_id`的地址，否则电脑端会提示需要登录访问

## 关于 topic

- **`$.image_layout`** 为 `vertical` 的，需要在正文提取图片并顺序排布
- **`$.image_layout`** 为 `horizontal` 的，直接提取 `$.photos` 放在一起就行

# Comment

- `https://m.douban.com/rexxar/api/v2/group/topic/{topic_id}/comments`
- only text `https://m.douban.com/rexxar/api/v2/group/topic/490753319/comments?count=5`
- with photo `https://m.douban.com/rexxar/api/v2/group/topic/472573751/comments?count=5`
- 可携带参数 `?count={int}` 来获取指定数量的评论
