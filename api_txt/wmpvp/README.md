## 图片/视频资源

- `Referer`: `https://news.wmpvp.com`

## 新闻

eg: `https://news.wmpvp.com/news.html?id=301077&gameTypeStr=2`

- `gameType`: `2`
- `newsId`: `301077`

Api: `https://appactivity.wmpvp.com/steamcn/app/news/getAppNewsById?gameType={{gameType}}&newsId={{newsId}}`

## 玩家帖子

包括视频帖子

eg: `https://news.wmpvp.com/community-detail.html?id=375290247`
eg: `https://news.wmpvp.com/community-pcDetail.html?id=375290247`
eg: `https://news.wmpvp.com/community-detail.html?id=376026294`

Api: `https://appengine.wmpvp.com/steamcn/community/post/getPostById?postId={{postId}}`


## 获取评论列表

新闻和帖子通用

- 帖子类型: `11`
- 新闻类型: `2` 

Api: `https://gwapi.pwesports.cn/appuser/community/comment/getCommentList?entityId={{对象id}}&entityType={{对象类型}}&pageNum=1&pageSize={{pconfig.max_comment}}&sort=4&type=1&onlyOwner=false&ratingType=0`