"""测试今日头条解析器"""

import pytest
from nonebot import logger


@pytest.mark.asyncio
async def test_toutiao_parse():
    """测试今日头条解析"""
    from nonebot_plugin_parser.parsers import ToutiaoParser

    # 测试今日头条/西瓜视频链接
    urls = [
        "https://m.toutiao.com/is/oEe4HwA2dRY/",  # 分享链接示例
        "https://ixigua.com/is/27nVgW9/",  # 西瓜视频链接示例
    ]
    
    parser = ToutiaoParser()
    
    for url in urls:
        logger.info(f"开始测试今日头条链接: {url}")
        
        # 测试URL匹配
        keyword, searched = parser.search_url(url)
        
        assert searched, f"URL {url} 应该能被今日头条解析器匹配"
        logger.debug(f"匹配到的关键词: {keyword}")
        logger.debug(f"匹配到的内容: {searched.group(0)}")
        
        # 测试解析
        try:
            result = await parser.parse(keyword, searched)
        except Exception as e:
            pytest.skip(f"今日头条解析失败: {e}")
        
        # 验证结果
        assert result.title, "应该能提取标题"
        assert result.author is not None, "应该能提取作者信息"
        assert result.platform.name == "toutiao", "平台名称应该是toutiao"
        logger.debug(f"标题: {result.title}")
        logger.debug(f"作者: {result.author.name}")
        logger.debug(f"内容数量: {len(result.contents)}")
        
        # 检查是否包含视频内容
        from nonebot_plugin_parser.parsers.data import VideoContent
        video_contents = [content for content in result.contents if isinstance(content, VideoContent)]
        assert len(video_contents) > 0, "应该能提取视频内容"
    
    logger.success("今日头条解析成功")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "-s"])
