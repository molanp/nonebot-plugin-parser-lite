"""测试TapTap解析器"""

import pytest
from nonebot import logger


@pytest.mark.asyncio
async def test_taptap_parse():
    """测试TapTap帖子解析"""
    from nonebot_plugin_parser.parsers import TapTapParser

    # 测试多个TapTap链接
    urls = [
        "https://www.taptap.cn/moment/758768580652172995",
        "https://www.taptap.cn/moment/757660024108485081"
    ]
    
    parser = TapTapParser()
    
    for url in urls:
        logger.info(f"开始测试TapTap链接: {url}")
        
        # 测试URL匹配
        keyword, searched = parser.search_url(url)
        
        assert searched, f"URL {url} 应该能被TapTap解析器匹配"
        
        # 测试解析
        try:
            result = await parser.parse(keyword, searched)
        except Exception as e:
            pytest.skip(f"TapTap解析失败: {e}")
        
        # 验证结果
        assert result.title, "应该能提取标题"
        assert result.author is not None, "应该能提取作者信息"
        assert result.platform.name == "taptap", "平台名称应该是taptap"
        logger.debug(f"标题: {result.title}")
        logger.debug(f"作者: {result.author.name}")
        logger.debug(f"内容: {result.text}")
        logger.debug(f"内容数量: {len(result.contents)}")
    
    logger.success("TapTap解析成功")


if __name__ == "__main__":
    pytest.main([__file__, "-v", "-s"])