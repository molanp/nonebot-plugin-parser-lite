# 获取帖子 V1

`https://app.5eplay.com/api/csgo/forum/topic/{tid}`

此接口同时支持获取视频和评论，为了方便，此项目采用这个

# 获取帖子 V2

`https://app.5eplay.com/api/csgo/forum/topic_v2/{tid}`

此接口不会返回视频数据，需要判断 `type` 为 `2` 后请求视频帖子接口

嫌麻烦可以直接走v1接口，评论，视频都在一起返回

# 获取评论

`https://app.5eplay.com/api/csgo/forum/comment/{tid}`

可以获取视频和普通帖子的评论

若无评论，则`list`字段为`null`

# 获取视频 (Feed流)

`https://app.5eplay.com/api/feed/video_detail_v2`

## 参数

- `tid`: `{tid}`

## 返回

返回数据里有好多视频数据，只有第一个是需要的

# 关于v1接口的帖子和评论内容字段

帖子直接解析 `intro_text` 的纯文本内容

评论则 `content` 删除标签后添加 `images`

- 例如 `牛啊哥<***>https://file-arena.5eplay.com/memes/20260605/19b8e908f6e3f5c8565d7b85c3a991e1.gif<img><***><end>`

# 说明

数据中的统计信息字段直接就是字符串，无需解析成数字，若统计数据过大，会自动返回解析好的字符串，比如返回 `4.2w`

> 更多接口详见 [5EPLAYAPP](https://s.apifox.cn/563c2d8b-7b94-4bcf-bf1c-85f934c026a3)
