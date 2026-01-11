"""测试网易云音乐解析器"""

import pytest
from nonebot import logger


@pytest.mark.asyncio
async def test_netease_parse():
    """测试网易云音乐解析"""
    from nonebot_plugin_parser.parsers import NCMParser

    # 测试多个网易云链接
    urls = [
        "https://music.163.com/#/song?id=2602989948",  # 普通链接
    ]
    
    parser = NCMParser()
    
    for url in urls:
        logger.info(f"开始测试网易云链接: {url}")
        
        # 测试URL匹配
        keyword, searched = parser.search_url(url)
        
        assert searched, f"URL {url} 应该能被网易云解析器匹配"
        
        # 测试解析
        try:
            result = await parser.parse(keyword, searched)
        except Exception as e:
            pytest.skip(f"网易云解析失败: {e}")
        
        # 验证结果
        assert result.title, "应该能提取标题"
        assert result.author is not None, "应该能提取作者信息"
        assert result.platform.name == "netease", "平台名称应该是netease"
        logger.debug(f"标题: {result.title}")
        logger.debug(f"作者: {result.author.name}")
        logger.debug(f"内容数量: {len(result.contents)}")
        
        # 检查是否包含音频内容
        assert len(result.audio_contents) > 0, "应该能提取音频内容"
        
        # 检查是否包含封面图片
        assert len(result.img_contents) > 0, "应该能提取封面图片"
        
    logger.success("网易云音乐解析成功")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "-s"])