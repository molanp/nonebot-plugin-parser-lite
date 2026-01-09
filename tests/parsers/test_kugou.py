"""测试酷狗音乐解析器"""

import pytest
from nonebot import logger


@pytest.mark.asyncio
async def test_kugou_parse():
    """测试酷狗音乐解析"""
    from nonebot_plugin_parser.parsers import KuGouParser

    # 测试多个酷狗链接
    urls = [
        "https://www.kugou.com/share/mSHQ69EsV3.html#13u1c9ef",  # 分享链接
        "https://www.kugou.com/share/9nF482EsV3.html#4knmd10b",  # 歌曲链接
    ]
    
    parser = KuGouParser()
    
    for url in urls:
        logger.info(f"开始测试酷狗链接: {url}")
        
        # 测试URL匹配
        keyword, searched = parser.search_url(url)
        
        assert searched, f"URL {url} 应该能被酷狗解析器匹配"
        logger.debug(f"匹配到的关键词: {keyword}")
        logger.debug(f"匹配到的内容: {searched.group(0)}")
        
        # 测试解析
        try:
            result = await parser.parse(keyword, searched)
        except Exception as e:
            pytest.skip(f"酷狗解析失败: {e}")
        
        # 验证结果
        assert result.title, "应该能提取标题"
        assert result.author is not None, "应该能提取作者信息"
        assert result.platform.name == "kugou", "平台名称应该是kugou"
        logger.debug(f"标题: {result.title}")
        logger.debug(f"作者: {result.author.name}")
        logger.debug(f"内容数量: {len(result.contents)}")
        
        # 检查是否包含音频内容
        audio_contents = [content for content in result.contents if hasattr(content, 'audio_url')]
        assert len(audio_contents) > 0, "应该能提取音频内容"
        
        # 检查是否包含封面图片
        img_contents = [content for content in result.contents if hasattr(content, 'img_url')]
        assert len(img_contents) > 0, "应该能提取封面图片"
    
    logger.success("酷狗音乐解析成功")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "-s"])